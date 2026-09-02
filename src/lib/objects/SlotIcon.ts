import { SlotDirection } from "$lib/types/SlotDirection";
import { SlotType } from "$lib/types/SlotType";

export const SLOT_ICONS: Record<SlotType, Record<SlotDirection, string>> = {
    [SlotType.RED]: {
        [SlotDirection.UP]: "tool_attack_icon_up.png",
        [SlotDirection.CENTER]: "tool_attack_icon_center.png",
        [SlotDirection.DOWN]: "tool_attack_icon_down.png",
    },
    [SlotType.BLUE]: {
        [SlotDirection.UP]: "",
        [SlotDirection.CENTER]: "tool_defense_icon.png",
        [SlotDirection.DOWN]: "",
    },
    [SlotType.YELLOW]: {
        [SlotDirection.UP]: "",
        [SlotDirection.CENTER]: "tool_explore_icon.png",
        [SlotDirection.DOWN]: "",
    },
    [SlotType.WHITE]: {
        [SlotDirection.UP]: "tool_skill_icon.png",
        [SlotDirection.CENTER]: "tool_skill_icon.png",
        [SlotDirection.DOWN]: "tool_skill_icon.png",
    },
};