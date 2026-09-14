<script lang="ts">
    import EnemiesSection from "$lib/components/section/EnemiesSection.svelte";
    import StatisticSection from "$lib/components/section/StatisticSection.svelte";
    import LoadoutSection from "$lib/components/section/LoadoutSection.svelte";
    import InfoButton from "$lib/components/common/InfoButton.svelte";

    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import AboutOverlay from "$lib/components/common/AboutOverlay.svelte";

    let loadout: UserLoadout = new UserLoadout();
    let showOverlay: boolean = $state(false);
</script>

<svelte:head>
	<title>Hornet's Calculator - Hollow Knight: Silksong Damage Analysis Tool</title>
	<meta name="description" content="calculate hornet's damage in Hollow Knight: Silksong using different tools, skills, crests, and effects."/>
    <meta name="keywords" content="silksong calculator, hollow knight silksong, hornet damage calculator, silksong damage, hornet loadout"/>
</svelte:head>


<div class="font-roboto text-white flex flex-col place-content-center relative" draggable="false">
    <!-- Header -->
    <div class="sticky w-screen top-0 z-200 bg-[#0A0A0C]">
        <div class="w-full flex flex-col bg-[url(/assets/banner/marrow.png)] bg-contain bg-no-repeat">
            <div class="flex place-content-between h-20 items-center">
                <div class="flex items-center px-12 gap-4">
                    <img src="assets/menu/silksong_icon.png" alt="icon" class="size-10"/>
                    <span class="text-xl md:text-3xl font-semibold text-shadow-lg">Hornet's Calculator</span>
                </div>

                {#if !showOverlay}
                    <InfoButton bind:checked={showOverlay}/>
                {/if}

            </div>
            <div class="flex flex-row gap-4 px-8 pb-4 xl:hidden">
                <a href="#enemies">Enemies</a>
                <a href="#loadout">Loadout</a>
                <a href="#statistics">Statistics</a>
            </div>
        </div>
    </div>

    <!-- Sections -->
    <div class="h-full w-full flex-1 min-h-0 xl:grid xl:grid-cols-10 xl:gap-8 xl:px-24 px-8">
        <div class="col-span-3" id="enemies">
            <EnemiesSection data={loadout}/>
        </div>
        <div class="col-span-4" id="loadout">
            <LoadoutSection data={loadout}/>
        </div>
        <div class="col-span-3" id="statistics">
            <StatisticSection data={loadout}/>
        </div>
    </div>

    <!-- Overlay -->
    {#if showOverlay}
        <div class="bg-black/80 h-full w-screen z-300 absolute top-0 left-0 place-content-center place-items-center pointer-events-none">
            <div class="fixed right-0 top-0 pointer-events-auto">
                <InfoButton bind:checked={showOverlay}/>
            </div>

            <div class="fixed left-1/2 -translate-x-1/2 top-20 2xl:top-1/2 2xl:-translate-y-1/2 w-4/5 xl:w-3/7 pointer-events-auto">
                <AboutOverlay/>
            </div>
        </div>
    {/if}
</div>

<style>
    :global(body) {
		background-color: #0A0A0C;
	}

    img {
        user-select: none;
    }
</style>.


