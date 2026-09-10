import { SkillType } from "../enums/SkillType";
import type { SkillInfo } from "$lib/types/ItemInfo";

export const SKILL_DATA: Record<SkillType, SkillInfo> = {
    [SkillType.SilkSpear]: {
    	damage: [15, 27, 39, 51, 63],
        hits: 1,
        name: "Silk Spear",
    },
    [SkillType.ThreadStorm]: {
    	damage: [23, 36, 55, 74, 93],
        hits: 6,
        name: "Thread Storm",
    },
    [SkillType.CrossStitch]: {
    	damage: [16, 28, 40, 52, 64],
        hits: 4,
        name: "Cross Stitch",
    },
    [SkillType.SharpDart]: {
    	damage: [17, 31, 45, 59, 73],
        hits: 1,
        name: " Sharp Dart",
    },
    [SkillType.RuneRage]: {
    	damage: [10, 19, 27, 36, 44],
        hits: 1,
        name: "Rune Rage",
    },
    [SkillType.PaleNails]: {
    	damage: [15, 27, 39, 51, 63],
        hits: 3,
        name: "Pale Nails",
    },
}	

