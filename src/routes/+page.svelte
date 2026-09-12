<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";

    import { CrestType } from "$lib/enums/CrestType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";

    let loadout: UserLoadout = new UserLoadout();
    loadout.SetCrestType(CrestType.Architect);
</script>

<div class="font-roboto text-white flex flex-col" draggable="false">
    <div class="h-12 w-screen bg-gray-800"> 
        <button class="px-8 py-2" onclick={ () => {
            console.log(loadout.crestMenuState.activeSlot?.type );
        }}> CHECK SOMETHING </button>
    </div>

    <!-- Sections -->
    <div class="h-full w-full flex-1 min-h-0 xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3">
            <EnemiesSection data={loadout}/>
        </div>

        <div class="col-span-4">
            <LoadoutSection data={loadout}/>
        </div>
        <div class="col-span-3">
            <StatisticSection data={loadout}/>
        </div>
    </div>
</div>

<style>
    :global(body) {
		background-color: #0A0A0C;
	}
</style>