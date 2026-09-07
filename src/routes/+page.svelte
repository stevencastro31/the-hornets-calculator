<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";
    import { CrestType } from "$lib/types/CrestType";
    import { CREST_DATA } from "$lib/objects/CrestData";
    import { SkillType } from "$lib/types/SkillType";
    import { ToolType } from "$lib/types/ToolType";

    import { SvelteSet } from 'svelte/reactivity';
    import { NeedleType } from "$lib/types/NeedleType";

    let user_info: UserInfo = $state<UserInfo>({
        active_crest_info: CREST_DATA[CrestType.Hunter4],
        active_vesticrest_info: CREST_DATA[CrestType.Vesti],

        selected_slot_id: 0,
        selected_slot_index: -1,

        current_loadout_page_type: 0,

        current_tool_loadout: new SvelteSet<ToolType>(),
        current_skill_loadout: new SvelteSet<SkillType>(),
        current_needle: NeedleType.NEEDLE,
        crest_passive_is_active: false,
    });
</script>

<div class="font-roboto text-white bg-gray-950 h-screen" draggable="false">
    <div class="h-16 w-screen bg-gray-800"> nav bar 
        <button onclick={ () => {
            console.log("CHECKING!");
            console.log(user_info.current_tool_loadout);
        } }> CHECK </button>
    </div>

    <div class="bg-gray-950 w-screen xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection/>
        </div>
        <div class="col-span-3">
            <StatisticSection bind:user_info={user_info}/>
        </div>
        <div class="col-span-4">
            <LoadoutSection bind:user_info={user_info}/>
        </div>
    </div>
</div>