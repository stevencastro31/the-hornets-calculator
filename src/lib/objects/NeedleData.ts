import type { NeedleInfo } from "$lib/types/ItemInfo";
import { NeedleType } from "../enums/NeedleType";

export const NEEDLE_DATA: Record<NeedleType, NeedleInfo> = {
    [NeedleType.Needle]: { damage: 5, name: "Needle" },
    [NeedleType.Sharpened]: { damage: 9, name: "Sharpened Needle" },
    [NeedleType.Shining]: { damage: 13, name: "Shining Needle" },
    [NeedleType.Hivesteel]: { damage: 17, name: "Hivesteel Needle" },
    [NeedleType.PaleSteel]: { damage: 21, name: "Pale Steel Needle" },
};
