<script lang="ts">
    import CrestHUD from "./CrestHUD.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";

    let { loadout }: { loadout: UserLoadout} = $props();

    // #region crest menu resizer
    let crestHUDContainer: HTMLDivElement;
    let crestHUDScale = $state(1);

    let isCrestMenuReady = $state(false);
    const MIN_CREST_HUD_WIDTH = 624;
    const MIN_CREST_HUD_HEIGHT = 208;

    $effect(() => {
        const observer = new ResizeObserver(() => { 
            crestHUDScale = (1) * Math.min(crestHUDContainer.clientWidth / MIN_CREST_HUD_WIDTH, 1);
        });
        isCrestMenuReady = true;
        observer.observe(crestHUDContainer);
        return () => observer.disconnect();
    });
    // #endregion
</script>

<div bind:this={crestHUDContainer} class="w-full" style={`visibility: ${isCrestMenuReady ? "visible" : "hidden"}; height: ${MIN_CREST_HUD_HEIGHT * crestHUDScale}px`}>
    <div class="h-full w-full flex origin-top-left" style={`transform: scale(${crestHUDScale});`}>
        <CrestHUD loadout={loadout}/>
    </div>
</div>    

