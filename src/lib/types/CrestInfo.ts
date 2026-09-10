import { CrestType } from "../enums/CrestType";
import type { SlotInfo } from "./SlotInfo";

export type CrestInfo = {
    name: string,
    type: CrestType,
    padding: Array<number>, // top right bottom left
    slots: SlotInfo[],
    swingSpeed: number,     // duration in seconds to reach 10 hits at base.
    swingSpeedBrew: number, // duration in seconds to reach 10 hits w/ flea brew.
};