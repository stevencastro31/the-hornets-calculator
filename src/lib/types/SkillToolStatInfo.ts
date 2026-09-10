import { SkillType } from "$lib/enums/SkillType";
import type { ToolType } from "$lib/enums/ToolType";

export type SkillToolStatInfo = {
    name: string,
    type: SkillType | ToolType,
    damage: number,
    subtext: string,
    iconPath: string,
};
