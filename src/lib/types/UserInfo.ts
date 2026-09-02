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

    current_loadout_page_type: SlotType,
    current_tool_loadout: Set<ToolType>,
    current_skill_loadout: Set<SkillType>,
};
