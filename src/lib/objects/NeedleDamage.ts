import { NeedleType } from "$lib/types/NeedleType";

export const NEEDLE_DAMAGE: Record<NeedleType, number> = {
    [NeedleType.NEEDLE]: 5,
    [NeedleType.SHARPENED]: 9,
    [NeedleType.SHINING]: 13,
    [NeedleType.HIVESTEEL]: 17,
    [NeedleType.PALE_STEEL]: 21,
};
