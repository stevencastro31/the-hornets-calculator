import type { NeedleDamageInfo } from "$lib/types/DamageInfo";
import { NeedleType } from "../enums/NeedleType";

export const NEEDLE_DAMAGE: Record<NeedleType, NeedleDamageInfo> = {
    [NeedleType.Needle]: { damage: 5, name: "Needle" },
    [NeedleType.Sharpened]: { damage: 9, name: "Sharpened Needle" },
    [NeedleType.Shining]: { damage: 13, name: "Shining Needle" },
    [NeedleType.Hivesteel]: { damage: 17, name: "Hivesteel Needle" },
    [NeedleType.PALE_STEEL]: { damage: 21, name: "Pale Steel Needle" },
};
