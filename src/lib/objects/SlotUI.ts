import { SlotType } from "$lib/types/SlotType";
import { SlotDirection } from "$lib/types/SlotDirection";

export const SLOT_UIS: Record<SlotType, Record<SlotDirection, string>> = {
    [SlotType.RED]: {
        [SlotDirection.UP]: "tool_attack_slot_up.png",
        [SlotDirection.CENTER]: "tool_attack_slot_center.png",
        [SlotDirection.DOWN]: "tool_attack_slot_down.png",
    },
    [SlotType.BLUE]: {
        [SlotDirection.UP]: "",
        [SlotDirection.CENTER]: "tool_defense_slot.png",
        [SlotDirection.DOWN]: "",
    },
    [SlotType.YELLOW]: {
        [SlotDirection.UP]: "",
        [SlotDirection.CENTER]: "tool_explore_slot.png",
        [SlotDirection.DOWN]: "",
    },
    [SlotType.WHITE]: {
        [SlotDirection.UP]: "tool_skill_slot_up.png",
        [SlotDirection.CENTER]: "tool_skill_slot_center.png",
        [SlotDirection.DOWN]: "tool_skill_slot_down.png",
    },
};