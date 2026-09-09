<script lang="ts">
    import { NeedleType } from "$lib/enums/NeedleType";
    import { NEEDLE_UIS } from "$lib/objects/NeedleUI";

    let { needleType = NeedleType.Needle, isSelected = false } : { needleType: NeedleType, isSelected?: boolean } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="md:w-8 md:h-72 w-6 h-54 relative" draggable="false">
    <img src={NEEDLE_UIS[needleType]} alt="needle" class="h-full w-full"/>
    {#if isSelected}
        <img src="assets/needles/glow_needle4.png" alt="glow" class="absolute opacity-10 top-0 left-0 h-full w-full" />

        <div class="absolute -top-4 -left-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="size-12"/>
        </div>

        <div class="absolute -bottom-4 -right-10 rotate-180 z-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="size-12"/>
        </div>
    {/if}   
</div>

<style>
    img {
        object-fit: contain;
        user-select: none;
    }
</style>