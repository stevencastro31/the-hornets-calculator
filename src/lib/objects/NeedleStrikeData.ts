import { CrestType } from "$lib/enums/CrestType";

export const NEEDLE_STRIKE_MULTIPLIER: Record<CrestType, number> = {
    [CrestType.Architect]: 0.6,
    [CrestType.Beast]: 2.5,
    [CrestType.Cursed]: 0.8,
    [CrestType.Hunter2]: 1.4,
    [CrestType.Hunter3]: 1.4,
    [CrestType.Hunter4]: 1.4,
    [CrestType.Reaper]: 2.5,
    [CrestType.Shaman]: 2.3,
    [CrestType.Wanderer]: 0.6,
    [CrestType.Witch]: 0.8,
    [CrestType.Vesti]: -1,
};

export const NEEDLE_STRIKE_HITS: Record<CrestType, number> = {
    [CrestType.Architect]: 5,
    [CrestType.Beast]: 1,
    [CrestType.Cursed]: 6,
    [CrestType.Hunter2]: 2,
    [CrestType.Hunter3]: 2,
    [CrestType.Hunter4]: 2,
    [CrestType.Reaper]: 1,
    [CrestType.Shaman]: 1,
    [CrestType.Wanderer]: 5,
    [CrestType.Witch]: 6,
    [CrestType.Vesti]: 1,
};