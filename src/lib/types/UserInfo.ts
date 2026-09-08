import { SlotType } from "../enums/SlotType";
import { ToolType } from "../enums/ToolType";
import { SkillType } from "../enums/SkillType";
import type { CrestType } from "../enums/CrestType";
import type { CrestInfo } from "./CrestInfo";
import type { NeedleType } from "../enums/NeedleType";
import type { SkillDirectionInfo, ToolDirectionInfo } from "./DirectionInfo";

export type UserInfo = {
    active_crest_info: CrestInfo,
    active_vesticrest_info: CrestInfo,
    
    selected_slot_id: number,
    selected_slot_index: number,

    current_loadout_page_type: SlotType,
    current_tool_loadout: Set<ToolType>,
    current_skill_loadout: Set<SkillType>,
    current_needle: NeedleType,
    crest_passive_is_active: boolean,

    tool_direction_info: Array<ToolDirectionInfo>,
    skill_direction_info: Array<SkillDirectionInfo>,
};
