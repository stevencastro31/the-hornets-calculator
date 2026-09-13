<script lang="ts">
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import CrestMenu from "./CrestMenu.svelte";

    let { data } : { data: UserLoadout } = $props();

    // #region crest menu resizer
    let crestMenuContainer: HTMLDivElement;
    let crestMenuScale = $state(1);

    let isCrestMenuReady = $state(false);
    const MIN_CREST_MENU_WIDTH = 928;
    const MIN_CREST_MENU_HEIGHT = 656 + 36;

    $effect(() => {
        const observer = new ResizeObserver(() => { 
            crestMenuScale = (136/164) * Math.min(crestMenuContainer.clientWidth / MIN_CREST_MENU_WIDTH, 1);
        });
        isCrestMenuReady = true;
        observer.observe(crestMenuContainer);
        return () => observer.disconnect();
    });
    // #endregion
</script>

<div bind:this={crestMenuContainer} class="w-full" style={`visibility: ${isCrestMenuReady ? "visible" : "hidden"}; height: ${MIN_CREST_MENU_HEIGHT * crestMenuScale}px`}>
    <div class="h-full w-full flex justify-center origin-top" style={`transform: scale(${crestMenuScale});`}>
        <CrestMenu data={data}/>
    </div>
</div>
