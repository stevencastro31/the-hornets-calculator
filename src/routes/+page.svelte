<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";
    import CrestBoard from "$lib/components/loadout/CrestBoard.svelte";
    import ToolSlot from "$lib/components/crest/ToolSlot.svelte";
    import { SlotType } from "$lib/types/SlotType";
    import { ToolType } from "$lib/types/ToolType";
    import { SkillType } from "$lib/types/SkillType";
    import CrestBeast from "$lib/components/crest/CrestBeast.svelte";
    import ToolTab from "$lib/components/loadout/ToolTab.svelte";
</script>

<div class="font-roboto text-white bg-black">
    <div class="h-16 w-screen"> nav bar </div>

    <div class="pl-20 flex flex-row gap-20 flex-wrap  h-1/2 w-screen"> 
        <ToolSlot slot_type={SlotType.RED_UP} tool={ToolType.RED_COGFLY}/>
        <ToolSlot slot_type={SlotType.RED_CENTER} tool={ToolType.RED_COGFLY}/>
        <ToolSlot slot_type={SlotType.RED_DOWN} tool={ToolType.RED_COGFLY}/>
        <ToolSlot slot_type={SlotType.WHITE_UP} skill={SkillType.PALE_NAILS}/>
        <ToolSlot slot_type={SlotType.WHITE_CENTER} skill={SkillType.PALE_NAILS}/>
        <ToolSlot slot_type={SlotType.WHITE_DOWN} skill={SkillType.PALE_NAILS}/>
        <ToolSlot slot_type={SlotType.BLUE} tool={ToolType.BLUE_LONGCLAW}/>
        <ToolSlot slot_type={SlotType.YELLOW} tool={ToolType.YELLOW_COMPASS}/>

        <ToolSlot slot_type={SlotType.RED_CENTER} show_icon={false}/>
        <ToolSlot slot_type={SlotType.WHITE_CENTER} show_icon={false}/>
        <ToolSlot slot_type={SlotType.BLUE} show_icon={false}/>
        <ToolSlot slot_type={SlotType.YELLOW} show_icon={false} tool={ToolType.YELLOW_BARBED_BRACELET} is_selected={true} show_slot={false}/>
    </div>

    <div class="w-1/2">
        <CrestBoard/>
    </div>




    <!-- <div class="bg-gray-950 w-screen xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection/>
        </div>
        <div class="col-span-3">
            <StatisticSection/>
        </div>
        <div class="col-span-4">
            <LoadoutSection/>
        </div>
    </div> -->
</div>







