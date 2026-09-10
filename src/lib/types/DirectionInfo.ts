import { ToolType } from "../enums/ToolType";
import { SkillType } from "../enums/SkillType";
import { SlotDirection } from "../enums/SlotDirection";

export type ToolDirectionInfo = {
    tool: ToolType,
    direction: SlotDirection,
};

export type SkillDirectionInfo = {
    skill: SkillType,
    direction: SlotDirection,
};