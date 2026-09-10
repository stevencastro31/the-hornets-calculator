<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";

    import { CrestType } from "$lib/enums/CrestType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { NeedleType } from "$lib/enums/NeedleType";

    let loadout: UserLoadout = new UserLoadout();
    loadout.SetCrestType(CrestType.Wanderer);
    loadout.SetNeedle(NeedleType.PaleSteel);
    loadout.crestIsActive = false;
</script>

<div class="font-roboto text-white bg-gray-950 h-full w-full" draggable="false">
    <div class="h-10 w-screen bg-gray-800"> 
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