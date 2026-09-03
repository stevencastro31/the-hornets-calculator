<script lang="ts">
    import { NeedleType } from "$lib/types/NeedleType";
    import { NEEDLE_UIS } from "$lib/objects/NeedleUI";

    let { needle_type, is_selected = false } : { needle_type: NeedleType, is_selected?: boolean } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="md:w-8 md:h-72 w-6 h-54 relative" draggable="false">
    <img src={`assets/NEEDLES/${NEEDLE_UIS[needle_type]}`} alt="needle" class="h-full w-full z-4 object-contain select-none"/>
    {#if is_selected}
        <img src="assets/NEEDLES/glow_needle4.png" alt="glow" class="absolute opacity-10 top-0 left-0 h-full w-full object-contain select-none"/>

        <div class="absolute -top-4 -left-10 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="size-12 object-contain select-none"/>
        </div>

        <div class="absolute -bottom-4 -right-10 rotate-180 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="size-12 object-contain select-none"/>
        </div>
    {/if}   
</div>