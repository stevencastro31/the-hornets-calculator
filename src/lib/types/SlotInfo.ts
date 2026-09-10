import { SlotType } from "../enums/SlotType";
import { ToolType } from "../enums/ToolType";
import { SkillType } from "../enums/SkillType";
import type { SlotDirection } from "../enums/SlotDirection";

export type SlotInfo {
    id: number,
    type: SlotType;
    direction?: SlotDirection,
    x: number;
    y: number;
    iconVisible?: boolean;
    slotVisible?: boolean;
    isVenom?: boolean;
    isSelected?: boolean;
    toolType?: ToolType;
    skillType?: SkillType;
};
