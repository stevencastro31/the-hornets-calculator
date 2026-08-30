import { SlotType } from "./SlotType";
import { ToolType } from "./ToolType";
import { SkillType } from "./SkillType";

export type SlotInfo {
    type: SlotType;
    x: number;
    y: number;
    show_icon?: boolean;
    show_slot?: boolean;
    is_venom?: boolean;
    is_selected?: boolean;
    tool?: ToolType;
    skill?: SkillType;
};
