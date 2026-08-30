import { CrestType } from "./CrestType";
import type { SlotInfo } from "./SlotInfo";

export type CrestInfo {
    name: string,
    type: CrestType,
    padding: number,
    slots: SlotInfo[],
};