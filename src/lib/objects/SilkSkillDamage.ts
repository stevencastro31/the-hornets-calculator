import { SkillType } from "../enums/SkillType";
import type { SkillDamageInfo } from "$lib/types/DamageInfo";

export const SILK_SKILL_DAMAGE: Record<SkillType, SkillDamageInfo> = {
    [SkillType.SilkSpear]: {
    	damage: [15, 27, 39, 51, 63],
    	subtext: "",
        name: "Silk Spear",
    },
    [SkillType.ThreadStorm]: {
    	damage: [23, 36, 55, 74, 93],
    	subtext: " (6 HITS)",
        name: "Thread Storm",
    },
    [SkillType.CrossStitch]: {
    	damage: [16, 28, 40, 52, 64],
    	subtext: " (4 HITS)",
        name: "Cross Stitch",
    },
    [SkillType.SharpDart]: {
    	damage: [17, 31, 45, 59, 73],
    	subtext: "",
        name: " Sharp Dart",
    },
    [SkillType.RuneRage]: {
    	damage: [10, 19, 27, 36, 44],
    	subtext: " (1st HIT)",
        name: "Rune Rage",
    },
    [SkillType.PaleNails]: {
    	damage: [15, 27, 39, 51, 63],
    	subtext: " (3 HITS)",
        name: "Pale Nails",
    },
}	

