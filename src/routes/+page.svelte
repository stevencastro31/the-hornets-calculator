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
</script>

<div class="font-roboto text-white bg-gray-800">
    <div class="h-16 w-screen"> nav bar </div>

    <div class="bg-gray-950 w-screen xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection/>
        </div>
        <div class="col-span-3">
            <StatisticSection/>
        </div>
        <div class="col-span-4">
            <LoadoutSection/>
        </div>
    </div>
</div>







