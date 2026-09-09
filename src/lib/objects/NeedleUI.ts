import { NeedleType } from "../enums/NeedleType";

let base = "assets/needles/"

export const NEEDLE_UIS: Record<NeedleType, string> = {
    [NeedleType.Needle]: base + "needle.png",
    [NeedleType.Sharpened]: base + "sharpened.png",
    [NeedleType.Shining]: base + "shining.png",
    [NeedleType.Hivesteel]: base + "hivesteel.png",
    [NeedleType.PaleSteel]: base + "pale_steel.png",
};
