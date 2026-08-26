import { SlotType } from "$lib/types/SlotType";

export const SLOT_UIS: Record<SlotType, string> = {
    [SlotType.RED_UP]: "tool_attack_slot_up.png",
    [SlotType.RED_CENTER]: "tool_attack_slot_center.png",
    [SlotType.RED_DOWN]: "tool_attack_slot_down.png",
    [SlotType.BLUE]: "tool_defense_slot.png",
    [SlotType.YELLOW]: "tool_explore_slot.png",
    [SlotType.WHITE_UP]: "tool_skill_slot_up.png",
    [SlotType.WHITE_CENTER]: "tool_skill_slot_center.png",
    [SlotType.WHITE_DOWN]: "tool_skill_slot_down.png",
};