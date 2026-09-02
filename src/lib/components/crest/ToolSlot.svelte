<script lang="ts">
    import { SlotType } from "$lib/types/SlotType";
    import { SkillType } from "$lib/types/SkillType";
    import { SLOT_ICONS } from "$lib/objects/SlotIcon";
    import { SLOT_UIS } from "$lib/objects/SlotUI";
    import { SILK_SKILL_ICONS } from "$lib/objects/SilkSkillIcon";
    import { TOOL_ICONS } from "$lib/objects/ToolIcon";
    import { ToolType } from "$lib/types/ToolType";
    import { SlotDirection } from "$lib/types/SlotDirection";

    let { slot_type, slot_direction = SlotDirection.CENTER, show_icon = true, show_slot = true, skill, tool, is_venom = false, is_selected = false, is_glow = false }: { 
        slot_type: SlotType, 
        slot_direction?: SlotDirection,
        show_icon?: boolean, 
        show_slot?: boolean,
        skill? : SkillType,
        tool? : ToolType,
        is_venom?: boolean,
        is_selected? : boolean,
        is_glow? : boolean,
    } = $props();

    // svelte-ignore state_referenced_locally
    if (slot_type === SlotType.BLUE || slot_type === SlotType.YELLOW) {
        if (slot_direction != SlotDirection.CENTER) throw new Error("illegal slot setting!");
    };

    // icon path
    let skillPath = $derived(skill != undefined ? "assets/SKILLS/" +  SILK_SKILL_ICONS[skill] : "");
    let toolPath = $derived.by(() => {
        if (tool === undefined) return "";
        let root = "assets/TOOLS/"
        if (slot_type === SlotType.RED && ToolType[tool].startsWith("RED")) {
            root += "RED/";
            if (is_venom && tool != ToolType.RED_NEEDLE_PHIAL) { root += "VENOM/"; }    // need to exclude Needle Phial (no posion variant)
            return root + TOOL_ICONS[tool];
        } else if (slot_type === SlotType.BLUE && ToolType[tool].startsWith("BLUE")) {
            return root + "BLUE/" + TOOL_ICONS[tool];
        } else if (slot_type === SlotType.YELLOW && ToolType[tool].startsWith("YELLOW")) {
            return root + "YELLOW/" + TOOL_ICONS[tool];
        }
        return "";
    });

    // glow path
    let glowPath = $derived.by(() => {
        // if (!is_selected) return "";
        switch (slot_type) {
            case SlotType.RED:      return "assets/TOOLS/tool_red_highlight.png";
            case SlotType.BLUE:     return "assets/TOOLS/tool_blue_highlight.png";
            case SlotType.YELLOW:   return "assets/TOOLS/tool_yellow_highlight.png";
            case SlotType.WHITE:    return "assets/TOOLS/tool_white_highlight.png";
            default:                return "";
        }
    });

    let slotPath = $derived("assets/TOOLS/" + SLOT_UIS[slot_type][slot_direction]);
    let iconPath = $derived("assets/TOOLS/" + SLOT_ICONS[slot_type][slot_direction]);

    // more flags
    let icon_visible = $derived((!skillPath && slot_type === SlotType.WHITE) || (!toolPath && !(slot_type === SlotType.WHITE)));

    // add offsets to tool slots w/ direction
    let toolIconYOffsetOther = $derived(slot_direction === SlotDirection.UP  ? "top-6" : slot_direction === SlotDirection.DOWN ? "bottom-6" : "top-4");
    let toolIconYOffsetWhite = $derived(slot_direction === SlotDirection.UP  ? "top-7" : slot_direction === SlotDirection.DOWN ? "bottom-7" : "top-5");
    let glowYOffset = $derived(slot_direction === SlotDirection.UP  ? "top-4" : slot_direction === SlotDirection.DOWN ? "bottom-4" : "top-2");
    let toolTypeIconYOffset = $derived(slot_direction === SlotDirection.UP  ? "top-9" : slot_direction === SlotDirection.DOWN ? "bottom-9" : "top-8");

    let brightness = $derived(is_selected || is_glow ? 100 : 50);
</script>

<div class="h-36 w-32 min-h-36 min-w-32 relative">
    <!-- Slot -->
    {#if show_slot}
        <img src={slotPath} alt="slot ui" class="general brightness-{brightness}" draggable="false"/>
    {/if}


    <!-- Icon -->
    {#if show_icon}
        {#if icon_visible}
            {#if slot_type === SlotType.RED && !(slot_direction === SlotDirection.CENTER)}
                <div class={`w-20 h-24 absolute left-6 ${toolTypeIconYOffset}`}>
                    <img src={iconPath} alt="icon" class="general" draggable="false"/>
                </div>
            {:else}
                <div class={`size-20 absolute left-6 ${toolTypeIconYOffset}`}>
                    <img src={iconPath} alt="icon" class="general" draggable="false"/>
                </div>
            {/if}
        {/if}
    {/if}


    <!-- Tool && Skill -->
    {#if !icon_visible}
        {#if slot_type === SlotType.WHITE}
            <div class={`size-26 absolute left-3 ${toolIconYOffsetWhite}`}>
                <img src={skillPath} alt="skill icon" class="general" draggable="false"/>
            </div>
        {:else}
            <div class={`size-30 absolute left-1 ${toolIconYOffsetOther}`}>
                <img src={toolPath} alt="tool icon" class="general" draggable="false"/>
            </div>
        {/if}
    {/if}


    <!-- Glow -->
    {#if is_selected}
        <div class={`size-32 absolute ${glowYOffset} opacity-15`}>
            <img src={glowPath} alt="glow" class="general" draggable="false"/>
        </div>
    {/if}


    <!-- Cursor -->
    {#if is_selected}
        <div class="absolute -left-8 -top-6 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="cursor" draggable="false"/>
        </div>

        <div class="absolute -bottom-6 -right-8 rotate-180 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="cursor" draggable="false"/>
        </div>
    {/if}
</div>

<style>
    .general {
        width: 100%;
        height: 100%;
        object-fit: contain;
        user-select: none;
    }

    .cursor {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        user-select: none;
    }
</style>