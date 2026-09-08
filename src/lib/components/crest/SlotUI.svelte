<script lang="ts">
    import { SlotDirection } from "$lib/types/SlotDirection";
    import { SlotType } from "$lib/enums/SlotType";
    import { SkillType } from "$lib/enums/SkillType";
    import { ToolType } from "$lib/enums/ToolType";

    import { SLOT_UIS } from "$lib/objects/SlotUI";
    import { SLOT_ICONS } from "$lib/objects/SlotIcons";
    import { TOOL_ICONS } from "$lib/objects/ToolIcons";
    import { SKILL_ICONS } from "$lib/objects/SkillIcons";
    import { GLOW_ICONS } from "$lib/objects/GlowIcons";

    import { TOOLS_RED } from "$lib/objects/ToolsRed";
    import { TOOLS_BLUE } from "$lib/objects/ToolsBlue";
    import { TOOLS_YELLOW } from "$lib/objects/ToolsYellow";

    let { slotType, slotDirection = SlotDirection.Center, iconVisible = true, slotVisible = true, skillType, toolType, isVenom = false, isSelected = false, isGlow = false }: { 
        slotType: SlotType, 
        slotDirection?: SlotDirection,
        iconVisible?: boolean, 
        slotVisible?: boolean,
        skillType? : SkillType,
        toolType? : ToolType,
        isVenom?: boolean,
        isSelected? : boolean,
        isGlow? : boolean,
    } = $props();

    iconVisible = false;
    skillType = SkillType.SilkSpear;
    toolType = ToolType.StraightPin;
    isVenom =true;
    isSelected = true;

    // icon paths
    let slotUIPath: string | undefined  = $derived(SLOT_UIS[slotType][slotDirection]);
    let slotIconPath: string | undefined = $derived(SLOT_ICONS[slotType][slotDirection]);
    let skillIconPath: string | undefined = $derived(skillType !== undefined ?  SKILL_ICONS[skillType] : "");
    let toolIconPath: string | undefined = $derived.by(() => {
        if (toolType === undefined) return;
        let path: string;

        if (slotType === SlotType.Attack && TOOLS_RED.includes(toolType)) {
            path = TOOL_ICONS[toolType];
            if (isVenom)
                path = path.slice(0, 17) + "venom/" + path.slice(17);
            return path;
        }

        if (slotType === SlotType.Defense && TOOLS_BLUE.includes(toolType)) return TOOL_ICONS[toolType];
        if (slotType === SlotType.Explore && TOOLS_YELLOW.includes(toolType))  return TOOL_ICONS[toolType];
        return;
    });
    let glowIconPath: string = $derived(GLOW_ICONS[slotType]);

    // flags
    let itemVisible = $derived((!skillIconPath && slotType === SlotType.Skill) || (!toolIconPath && !(slotType === SlotType.Skill)));
    let brightness = $derived(isSelected || isGlow ? 1 : 0.5);

    // offsets
    let toolIconYOffset = $derived.by(() => {
        if (slotDirection === SlotDirection.Up) return 6;
        if (slotDirection === SlotDirection.Down) return 0;
        return 4;
    });
    let skillIconYOffset = $derived.by(() => {
        if (slotDirection === SlotDirection.Up) return 7;
        if (slotDirection === SlotDirection.Down) return 2;
        return 5;
    });
    let slotTypeIconYOffset: number = $derived.by(() => {
        if (slotDirection === SlotDirection.Up) return 9;
        if (slotDirection === SlotDirection.Down) return 3;
        return 8;
    });
    let glowIconYOffset = $derived.by(() => {
        if (slotDirection === SlotDirection.Up) return 4;
        if (slotDirection === SlotDirection.Down) return 0;
        return 2;
    });
</script>


<div class="relative w-32 h-36 aspect-[32/36]">
    <!-- Slot UI  -->
    {#if slotVisible}
        <img src={slotUIPath} alt="slot ui" class="common" draggable="false" style={`filter: brightness(${brightness})`}/>
    {/if}

    <!-- Slot Type Icon -->
    {#if iconVisible}
        {#if itemVisible}
            {#if slotType === SlotType.Attack && !(slotDirection === SlotDirection.Center)} <!-- Directional Icons -->
                <img src={slotIconPath} alt="slot icon" class="absolute w-20 h-24 left-6" draggable="false" style={`top: ${slotTypeIconYOffset * 0.25}rem`}/>
            {:else}
                <img src={slotIconPath} alt="slot icon" class="absolute size-20 left-6" draggable="false" style={`top: ${slotTypeIconYOffset * 0.25}rem`}/>
            {/if}
        {/if}
    {/if}

    <!-- Skill/Tool Icon -->
    {#if !itemVisible}
        {#if slotType === SlotType.Skill}
            <div class="absolute size-26 left-3" style={`top: ${skillIconYOffset * 0.25}rem`}>
                <img src={skillIconPath} alt="skill icon" class="common" draggable="false"/>
            </div>
        {:else}
            <div class="absolute size-30 left-1" style={`top: ${toolIconYOffset * 0.25}rem`}>
                <img src={toolIconPath} alt="tool icon" class="common" draggable="false"/>
            </div>
        {/if}            
    {/if}

    <!-- Glow & Cursor -->
    {#if isSelected}
        <div class="absolute size-32 opacity-15" style={`top: ${glowIconYOffset * 0.25}rem`}>
            <img src={glowIconPath} alt="glow" class="common" draggable="false"/>
        </div>

        <div class="absolute -left-8 -top-6 z-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="cursor" draggable="false"/>
        </div>

        <div class="absolute -bottom-6 -right-8 rotate-180 z-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="cursor" draggable="false"/>
        </div>
    {/if}
</div>

<style>
    img {
        user-select: none;
        object-fit: contain;
    }

    .common {
        width: 100%;
        height: 100%;
    }

    .cursor {
        width: 5rem;
        height: 5rem;
        user-select: none;
        z-index: 10;
    }
</style>
