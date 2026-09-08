import { SlotType } from "../enums/SlotType";
import { SlotDirection } from "$lib/types/SlotDirection";

const base = "assets/menu/";

export const SLOT_UIS: Record<SlotType, Partial<Record<SlotDirection, string>>> = {
    [SlotType.Attack]: {
        [SlotDirection.Up]: base + "tool_attack_slot_up.png",
        [SlotDirection.Center]: base + "tool_attack_slot_center.png",
        [SlotDirection.Down]: base + "tool_attack_slot_down.png",
    },
    [SlotType.Defense]: {
        [SlotDirection.Center]: base + "tool_defense_slot.png",
    },
    [SlotType.Explore]: {
        [SlotDirection.Center]: base + "tool_explore_slot.png",
    },
    [SlotType.Skill]: {
        [SlotDirection.Up]: base + "tool_skill_slot_up.png",
        [SlotDirection.Center]: base + "tool_skill_slot_center.png",
        [SlotDirection.Down]: base + "tool_skill_slot_down.png",
    },
};