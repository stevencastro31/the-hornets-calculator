import { SlotType } from "./SlotType";
import { ToolType } from "./ToolType";
import { SkillType } from "./SkillType";
import type { CrestType } from "./CrestType";
import type { CrestInfo } from "./CrestInfo";

export type UserInfo = {
    active_crest_info: CrestInfo,
    active_vesticrest_info: CrestInfo,
    
    selected_slot_id: number,
    selected_slot_index: number,

    current_tool_page_index: number,
};
