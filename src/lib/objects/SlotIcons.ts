import { SlotDirection } from "$lib/types/SlotDirection";
import { SlotType } from "../enums/SlotType";

let base = "assets/menu/"

export const SLOT_ICONS: Record<SlotType, Partial<Record<SlotDirection, string>>> = {
    [SlotType.Attack]: {
        [SlotDirection.Up]: base + "tool_attack_icon_up.png",
        [SlotDirection.Center]: base + "tool_attack_icon_center.png",
        [SlotDirection.Down]: base + "tool_attack_icon_down.png",
    },
    [SlotType.Defense]: {
        [SlotDirection.Center]: base + "tool_defense_icon.png",
    },
    [SlotType.Explore]: {
        [SlotDirection.Center]: base + "tool_explore_icon.png",
    },
    [SlotType.Skill]: {
        [SlotDirection.Up]: base + "tool_skill_icon.png",
        [SlotDirection.Center]: base + "tool_skill_icon.png",
        [SlotDirection.Down]: base + "tool_skill_icon.png",
    },
};