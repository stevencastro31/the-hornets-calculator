import { SlotType } from "../enums/SlotType";
import { ToolType } from "../enums/ToolType";
import { SkillType } from "../enums/SkillType";
import type { SlotDirection } from "./SlotDirection";

export type SlotInfo {
    id: number,
    type: SlotType;
    direction?: SlotDirection,
    x: number;
    y: number;
    show_icon?: boolean;
    show_slot?: boolean;
    is_venom?: boolean;
    is_selected?: boolean;
    tool?: ToolType;
    skill?: SkillType;
};
