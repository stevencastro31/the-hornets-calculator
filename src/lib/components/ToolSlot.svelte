<script lang="ts">
    import { SlotType } from "$lib/types/SlotType";
    import { SkillType } from "$lib/types/SkillType";
    import { SLOT_ICONS } from "$lib/objects/SlotIcon";
    import { SLOT_UIS } from "$lib/objects/SlotUI";
    import { SILK_SKILL_ICONS } from "$lib/objects/SilkSkillIcon";
    import { TOOL_ICONS } from "$lib/objects/ToolIcons";
    import { ToolType } from "$lib/types/ToolType";

    let { 
        slot_type, show_icon = false, show_slot = true, skill, tool, is_venom = false }: { 
            slot_type: SlotType, 
            show_icon?: boolean, 
            show_slot?: boolean,
            skill? : SkillType,
            tool? : ToolType,
            is_venom?: boolean,
        } = $props();

    tool = ToolType.RED_PLASMIUM_PHIAL;
    is_venom = true;

    // flags
    let isRed: boolean = $derived(SlotType[slot_type].startsWith("RED"));
    let isBlue: boolean = $derived(SlotType[slot_type].startsWith("BLUE"));
    let isWhite: boolean = $derived(SlotType[slot_type].startsWith("WHITE"));
    let isYellow: boolean = $derived(SlotType[slot_type].startsWith("YELLOW"));
    let isUp: boolean = $derived(SlotType[slot_type].endsWith("UP"));
    let isDown: boolean = $derived(SlotType[slot_type].endsWith("DOWN"));

    // icon path
    let skillPath = $derived(skill != undefined ? "assets/SKILLS/" +  SILK_SKILL_ICONS[skill] : "");
    let toolPath = $derived.by(() => {
        if (tool === undefined) return "";
        let root = "assets/TOOLS/"
        if (isRed && ToolType[tool].startsWith("RED")) {
            root += "RED/";
            if (is_venom)
                root += "VENOM/"
            return root + TOOL_ICONS[tool];
        } else if (isBlue && ToolType[tool].startsWith("BLUE")) {
            return root + "BLUE/" + TOOL_ICONS[tool];
        } else if (isYellow && ToolType[tool].startsWith("YELLOW")) {
            return root + "YELLOW/" + TOOL_ICONS[tool];
        }
        return "";
    });

    // more flags
    let icon_visible = $derived(show_icon || (!skillPath && isWhite) || (!toolPath && !isWhite));

    // add offsets to tool slots w/ direction
    let posYSlotOther = $derived(isUp ? "top-6" : isDown ? "bottom-6" : "top-4");
    let posYSlotWhite = $derived(isUp ? "top-7" : isDown ? "bottom-7" : "top-5");
    let posYIcon = $derived(isUp ? "top-9" : isDown ? "bottom-9" : "top-8");
</script>

<div class="h-36 w-32 min-w-32 min-h-36 relative">
    <!-- Slot -->
    {#if show_slot}
        <img src={`assets/TOOLS/${SLOT_UIS[slot_type]}`} alt="slot" class="w-full h-full object-contain"/>
    {/if}

    <!-- Icon -->
    {#if icon_visible}
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

    <!-- Tool && Skill -->
    {#if !icon_visible}
        {#if isWhite}
            <div class={`size-26 absolute left-3 ${posYSlotWhite}`}>
                <img src={skillPath} alt="slot" class="w-full h-full object-contain" />
            </div>
        {:else}
            <div class={`size-30 absolute left-1 ${posYSlotOther}`}>
                <img src={toolPath} alt="slot" class="w-full h-full object-contain" />
            </div>
        {/if}
    {/if}
</div>