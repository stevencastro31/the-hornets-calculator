<script lang="ts">
    import CrestMenu from "./CrestMenu.svelte";

    // #region crest menu resizer
    let crestMenuContainer: HTMLDivElement;
    let crestMenuScale = $state(1);
    let isCrestMenuReady = $state(false);
    const MIN_CREST_MENU_WIDTH = 928;
    const MIN_CREST_MENU_HEIGHT = 656;
    $effect(() => {
        const observer = new ResizeObserver(() => { 
            let widthScale = crestMenuContainer.clientWidth < MIN_CREST_MENU_WIDTH ? crestMenuContainer.clientWidth / MIN_CREST_MENU_WIDTH : 1; 
            let heightScale = crestMenuContainer.clientHeight < MIN_CREST_MENU_HEIGHT ? crestMenuContainer.clientHeight / MIN_CREST_MENU_HEIGHT : 1; 
            crestMenuScale = Math.min(widthScale, heightScale);
        });
        isCrestMenuReady = true;
        observer.observe(crestMenuContainer);
        return () => observer.disconnect();
    });
    // #endregion
</script>

<div bind:this={crestMenuContainer} class="h-full w-full flex justify-center origin-top" style={`transform: scale(${crestMenuScale});`}>
    <CrestMenu/>
</div>