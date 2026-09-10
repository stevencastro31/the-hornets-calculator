<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";

    import { CrestType } from "$lib/enums/CrestType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { SkillType } from "$lib/enums/SkillType";

    let loadout: UserLoadout = new UserLoadout();
    loadout.SetCrestType(CrestType.Shaman);

    // loadout.crestMenuState.selectedSlotID = 1;
    // loadout.crestMenuState.selectedSlotIndex = 0;
    // loadout.EquipSkill(SkillType.PaleNails);
    // loadout.crestMenuState.selectedSlotID = 2;
    // loadout.crestMenuState.selectedSlotIndex = 1;
    // loadout.EquipSkill(SkillType.ThreadStorm);
    // loadout.crestMenuState.selectedSlotID = 3;
    // loadout.crestMenuState.selectedSlotIndex = 2;
    // loadout.EquipSkill(SkillType.CrossStitch);
</script>

<div class="font-roboto text-white bg-[#0A0A0C] flex flex-col" draggable="false">
    <div class="h-12 w-screen bg-gray-800"> 
        <button class="px-8 py-2" onclick={ () => {

            console.log("HELLOW ORLD!");
        }}> CHECK SOMETHING </button>
    </div>

    <!-- Sections -->
    <div class="w-full flex-1 min-h-0 xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection/>
        </div>
        <div class="col-span-3">
            <StatisticSection data={loadout}/>
        </div>
        <div class="col-span-4">
            <LoadoutSection data={loadout}/>
        </div>
    </div>
</div>