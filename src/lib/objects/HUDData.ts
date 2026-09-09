import { CrestType } from "../enums/CrestType";
import type { HUDInfo } from "$lib/types/HUDInfo";
import { HUDState } from "$lib/types/HUDState";

export const HUD_DATA: Record<CrestType, Partial<Record<HUDState, HUDInfo>>> = {
    [CrestType.Architect]: {
        [HUDState.INACTIVE]: { top: 5.25, left: 8.25, scale: 88 }
    },
    [CrestType.Beast]: {
        [HUDState.INACTIVE]: { top: 9, left: 8.75, scale: 100 },
        [HUDState.ACTIVE]: { top: 3.25, left: 15, scale: 144 }
    },
    [CrestType.Cursed]: {
        [HUDState.INACTIVE]: { top: 8.25, left: 9.25, scale: 90 }
    },
    [CrestType.Hunter2]: {
        [HUDState.INACTIVE]: { top: 8.25, left: 4.5, scale: 70 }
    },
    [CrestType.Hunter3]: {
        [HUDState.INACTIVE]: { top: 9.5, left: 4, scale: 90 },
        [HUDState.ACTIVE]: { top: 9.5, left: 4, scale: 92 }
    },
    [CrestType.Hunter4]: {
        [HUDState.INACTIVE]: { top: 9.5, left: 8, scale: 108 },
        [HUDState.ACTIVE]: { top: 8.5, left: 7.5, scale: 108 }
    },
    [CrestType.Reaper]: {
        [HUDState.INACTIVE]: { top: 6.5, left: 9.25, scale: 108 },
        [HUDState.ACTIVE]: { top: 3.75, left: 8, scale: 110 }
    },
    [CrestType.Shaman]: {
        [HUDState.INACTIVE]: { top: 0.5, left: -0.5, scale: 68 }
    },
    [CrestType.Vesti]: {},
    [CrestType.Wanderer]: {
        [HUDState.INACTIVE]: { top: 0.5, left: -1.75, scale: 68 },
        [HUDState.ACTIVE]: { top: -2.25, left: -4.75, scale: 68 }
    },
    [CrestType.Witch]: {
        [HUDState.INACTIVE]: { top: 9.5, left: 13.75, scale: 100 }
    }
};

// left-22.5 top-3.25
// left-15   top-3.25