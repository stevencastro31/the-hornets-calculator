<script lang="ts">
    import { SlotType } from "$lib/types/SlotType";
    import { SLOT_ICONS } from "$lib/objects/SlotIcon";
    import { SLOT_UIS } from "$lib/objects/SlotUI";

    let { slot_type, show_icon = false, show_slot = true }: { slot_type: SlotType, show_icon?: boolean, show_slot?: boolean } = $props();
    let isRed: boolean = $derived(SlotType[slot_type].startsWith("RED"));
    let isUp: boolean = $derived(SlotType[slot_type].endsWith("UP"));
    let isDown: boolean = $derived(SlotType[slot_type].endsWith("DOWN"));


    // TODO: Item Logic
    let path = "assets/TOOLS/BLUE/11_spool_extender.png";
    path = "";
    // path = "assets/TOOLS/RED/16_cogfly.png";
    // path = "assets/TOOLS/RED/23_plasmium_phial.png";
    // path = "assets/TOOLS/YELLOW/01_compass.png";
    // path = "assets/TOOLS/BLUE/22_wispfire_lantern.png";
    // path = "assets/TOOLS/YELLOW/10_ascendants_grip.png";

    if (path.length < 1)
        show_icon = true;

    // Add offsets to tool slots w/ direction
    let posYSlot = isUp ? "top-5" : isDown ? "bottom-5" : "top-3";
    let posYIcon = isUp ? "top-9" : isDown ? "bottom-9" : "top-8";
</script>

<div class="h-36 w-32 min-w-32 min-h-36 relative">
    <!-- Slot -->
    {#if show_slot}
        <img src={`assets/TOOLS/${SLOT_UIS[slot_type]}`} alt="slot" class="w-full h-full object-contain"/>
    {/if}

    <!-- Icon -->
    {#if show_icon}
        {#if isRed && (isUp || isDown)}
            <div class={`w-20 h-24 absolute left-6 ${posYIcon}`}>
                <img src={`assets/TOOLS/${SLOT_ICONS[slot_type]}`}  alt="icon" class="w-full h-full object-contain"/>
            </div>
        {:else}
            <div class={`size-20 absolute left-6 ${posYIcon}`}>
                <img src={`assets/TOOLS/${SLOT_ICONS[slot_type]}`}  alt="icon" class="w-full h-full object-contain"/>
            </div>
        {/if}
    {/if}

    <!-- Tool -->
    {#if path.length > 0}
        <div class={`size-30 absolute left-1 ${posYSlot}`}>
            <img src={path} alt="slot" class="w-full h-full object-contain" />
        </div>
    {/if}
</div>