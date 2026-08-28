<script lang="ts">
    import VestiCrest from "../crest/VestiCrest.svelte";

    import Hunter2Crest from "../crest/CrestHunter2.svelte";
    import Hunter3Crest from "../crest/CrestHunter3.svelte";
    import Hunter4Crest from "../crest/CrestHunter4.svelte";
    import ArchitectCrest from "../crest/CrestArchitect.svelte";

    let container: HTMLDivElement;
    let scale = $state(1);
    let ready = $state(false);
    const CREST_WIDTH = 1056;
    $effect(() => {
        const observer = new ResizeObserver(() => {
            const widthScale = container.clientWidth / CREST_WIDTH;
            scale = widthScale;
        });
        ready = true;   // to hide the scale adjustment
        observer.observe(container);
        return () => observer.disconnect();
    });
</script>

<!--  TODO: make tool ui then make it interact with crest -->

<div class="w-full px-0 2xl:px-20">
    <div bind:this={container} class="w-full flex flex-col flex-grow" style={`visibility: ${ready ? "visible" : "hidden"}`}>
        <div class="pb-12" style={`height: ${720 * scale}px;`}>
            <div class="w-[1056px] flex flex-row origin-top-left" style={`transform: scale(${scale});`}>
                <VestiCrest/>
                <Hunter4Crest />
            </div>
        </div>
    </div>
</div>

