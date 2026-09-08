import { LoadoutTabType } from "$lib/enums/LoadoutTabType";

export const LOADOUT_TAB_ICONS: Record<LoadoutTabType, string> = {
    [LoadoutTabType.Tools]: "tool_pouch_and_crafting_kit.png",
    [LoadoutTabType.Crests]: "memory_locket.png",
    [LoadoutTabType.Skills]: "spool_fragment.png",
    [LoadoutTabType.Needles]: "pale_oil.png",
};