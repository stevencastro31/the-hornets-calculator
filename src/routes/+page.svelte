<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";
    import { SlotType } from "$lib/types/SlotType";
    import { ToolType } from "$lib/types/ToolType";
    import { SkillType } from "$lib/types/SkillType";
    import ToolTab from "$lib/components/loadout/ToolTab.svelte";
    import { CrestType } from "$lib/types/CrestType";
    import CrestBoard from "$lib/components/crest/CrestBoard.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";
    import { CREST_DATA } from "$lib/objects/CrestData";

    let user_info: UserInfo = $state<UserInfo>({
        active_crest_info: CREST_DATA[CrestType.Hunter2],
        active_vesticrest_info: CREST_DATA[CrestType.Vesti],
        selected_slot_id: 0,
        selected_slot_index: -1,
        current_tool_page_index: 1,
    });
</script>

<div class="font-roboto text-white bg-gray-800">
    <div class="h-16 w-screen"> nav bar 

        <button onclick={ () => console.log(user_info.current_tool_page_index) }>CHECK</button>

    </div>

    <div class="bg-gray-950 w-screen xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection/>
        </div>
        <div class="col-span-3">
            <StatisticSection/>
        </div>
        <div class="col-span-4">
            <LoadoutSection bind:user_info={user_info}/>
        </div>
    </div>
</div>







