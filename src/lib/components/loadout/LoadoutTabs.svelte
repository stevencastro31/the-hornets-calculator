<script lang="ts">
    import { LOADOUT_TAB_ICONS } from "$lib/objects/LoadoutTabIcons";
    import { LoadoutTabType } from "$lib/enums/LoadoutTabType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";

    import ToolTab from "./ToolTab.svelte";
    import CrestTab from "./CrestTab.svelte";
    import SkillTab from "./SkillTab.svelte";
    import NeedleTab from "./NeedleTab.svelte";
    import type { LoadoutTabMenuState } from "$lib/class/LoadoutTabMenuState.svelte";
    import { SlotType } from "$lib/enums/SlotType";

    let { data } : { data: UserLoadout } = $props();
    let loadoutTabMenuState: LoadoutTabMenuState = $derived(data.loadoutTabMenuState);

    let activeTabValue = $state(0);
    let tabItems = [
        { label: "Tools", value: LoadoutTabType.Tools, component: ToolTab }, 
        { label: "Crests", value: LoadoutTabType.Crests, component: CrestTab }, 
        { label: "Skills", value: LoadoutTabType.Skills, component: SkillTab },
        { label: "Needles", value: LoadoutTabType.Needles, component: NeedleTab },
    ];

    let previousToolPageType: SlotType | undefined = $state();
    const handleClick = (tabValue: string | number) => () => {
        activeTabValue = tabValue as number;
        if (loadoutTabMenuState.activeToolPageType >= 0 && loadoutTabMenuState.activeToolPageType < 3)    // store tool state
            previousToolPageType = loadoutTabMenuState.activeToolPageType;
        if (tabValue === LoadoutTabType.Skills)
            loadoutTabMenuState.activeToolPageType = SlotType.Skill;
        else if (tabValue === LoadoutTabType.Tools)
            loadoutTabMenuState.activeToolPageType = previousToolPageType!;
        else
            loadoutTabMenuState.activeToolPageType = -1;
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<!-- Tab Buttons -->
<ul class="flex flex-wrap border-b border-b-white/50 pb-4 2xl:pb-0">
    {#each tabItems as tab}
        <li class="m-2 2xl:ml-0 2xl:mb-0" >
            <div class="border border-gray-400 hover:border-white transition-colors duration-250 rounded-xl 2xl:rounded-b-none flex p-2 flex-row place-items-center" class:border-white={activeTabValue === tab.value} onclick={handleClick(tab.value)} >
                <img class="size-8 md:size-10" src={`${LOADOUT_TAB_ICONS[tab.value]}`} alt="tab icon" draggable="false"/>
                <p class="px-2 text-lg lg:text-xl">{tab.label}</p>
            </div>  
        </li>
    {/each}
</ul>

<!-- Tab Content -->
{#each tabItems as tab}
	{#if activeTabValue == tab.value}
        <div class="flex grow">
            <tab.component data={data}/>
        </div>
	{/if}
{/each}

<style>
    img {
        object-fit: contain;
        user-select: none;
    }
</style>

