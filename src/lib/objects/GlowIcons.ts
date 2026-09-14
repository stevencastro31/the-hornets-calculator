import { SlotType } from "$lib/enums/SlotType";

const base = "assets/menu/"

export const GLOW_ICONS: Record<SlotType, string> = {
    [SlotType.Attack]: base + "tool_red_highlight.png",
    [SlotType.Defense]: base + "tool_blue_highlight.png",
    [SlotType.Explore]: base + "tool_yellow_highlight.png",
    [SlotType.Skill]: base + "tool_white_highlight.png",
};