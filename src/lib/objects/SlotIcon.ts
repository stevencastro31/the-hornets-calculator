import { SlotType } from "$lib/types/SlotType";

export const SLOT_ICONS: Record<SlotType, string> = {
    [SlotType.RED_UP]: "tool_attack_icon_up.png",
    [SlotType.RED_CENTER]: "tool_attack_icon_center.png",
    [SlotType.RED_DOWN]: "tool_attack_icon_down.png",
    [SlotType.BLUE]: "tool_defense_icon.png",
    [SlotType.YELLOW]: "tool_explore_icon.png",
    [SlotType.WHITE_UP]: "tool_skill_icon.png",
    [SlotType.WHITE_CENTER]: "tool_skill_icon.png",
    [SlotType.WHITE_DOWN]: "tool_skill_icon.png",
};