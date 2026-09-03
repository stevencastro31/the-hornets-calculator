<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import { HUD_UIS } from "$lib/objects/HudUI";
    import { HUD_DATA } from "$lib/objects/HUDData";
    import { HUDState } from "$lib/types/HUDState";

    let { type }: { type: CrestType} = $props();
    let hud_info = $derived(HUD_DATA[type][HUDState.INACTIVE]);
    let hud_info2 = $derived(HUD_DATA[type][HUDState.ACTIVE]);
    let hud_path = $derived("assets/HUD/" + HUD_UIS[type]);
    let hud_path2 = $derived("assets/HUD/ACTIVE/" + HUD_UIS[type]);

</script>


{#if hud_info !== undefined}
    <div class="relative">
        <div class="container relative">
            <!-- align ment dev thing -->
            <div class="dot absolute flex items-center justify-center"><div class="dot2"></div></div>

            <!-- HUD -->
            <div class="absolute left-4.5 top-8.25 scale-70" style={`scale: ${hud_info.scale}%; top: ${hud_info.top * 0.25}rem; left: ${hud_info.left * 0.25}rem;`}>
                <img src={hud_path} alt="HUD" class="object-contain">
            </div>

            <div class="absolute flex flex-row top-[48px] left-34">
                {#each { length: 7 }, i}
                    <img src="assets/HUD/health.png" alt="hp" class="object-contain m-2" draggable="false">
                {/each}
            </div>
        </div>
    </div>
{/if}

{#if hud_info2 !== undefined}
    <div class="relative">
        <div class="container relative">
            <!-- align ment dev thing -->
            <div class="dot absolute flex items-center justify-center"><div class="dot2"></div></div>

            <!-- HUD -->
            <div class="absolute left-4.5 top-8.25 scale-70" style={`scale: ${hud_info2.scale}%; top: ${hud_info2.top * 0.25}rem; left: ${hud_info2.left * 0.25}rem;`}>
                <img src={hud_path2} alt="HUD" class="object-contain">
            </div>

            <div class="absolute flex flex-row top-[48px] left-34">
                {#each { length: 7 }, i}
                    <img src="assets/HUD/health.png" alt="hp" class="object-contain m-2" draggable="false">
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        min-width: 360;
        /* max-width: 360px; */
        min-height: 160px;
        max-height: 160px;
        /* background-color: gray; */
        margin-top: 0.5rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .dot {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        z-index: 10;
        border: 2px dotted green;
        left: 4rem;
        top: 48px;
        position: absolute;
        visibility: hidden;
    }

    .dot2 {
        height: 24px; /* 20 */
        width: 24px;
        border-radius: 50%;
        border: 2px dotted red;
        left: 20rem;
        top: 0;
        z-index: 12;
    }
</style>