<script lang="ts">
    import { LOADOUT_TAB_ICONS } from "$lib/objects/LoadoutTabIcons";
    import { LoadoutTabType } from "$lib/types/LoadoutTabType";
    import type { UserInfo } from "$lib/types/UserInfo";

    let { items, activeTabValue, user_info = $bindable() } : { items: Array<{value: LoadoutTabType, label: string, component: any}>, activeTabValue: number, user_info: UserInfo } = $props();
    const handleClick = (tabValue: string | number) => () => (activeTabValue = tabValue as number);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<!-- Tab Buttons -->
<ul class="flex flex-wrap border-b-1 border-b-white/50 pb-4 2xl:pb-0">
    {#each items as item}
        <li class={`m-2 2xl:ml-0 2xl:mb-0 {activeTabValue === item.value ? 'active' : ''}`} >
            <div class="border-1 border-gray-400 hover:border-white rounded-xl 2xl:rounded-b-none flex p-2 flex-row place-items-center" onclick={handleClick(item.value)}>
                <img class="size-10 object-contain select-none" src={`assets/TABS/${LOADOUT_TAB_ICONS[item.value]}`} alt="tab icon" draggable="false"/>
                <p class="px-2 text-xl">{item.label}</p>
            </div>  
        </li>
    {/each}
</ul>

<!-- Tab Content -->
{#each items as item}
	{#if activeTabValue == item.value}
        <div class="flex grow">
            <item.component bind:user_info={user_info}/>
        </div>
	{/if}
{/each}

