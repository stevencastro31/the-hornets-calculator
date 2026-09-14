import { LoadoutTabType } from "$lib/enums/LoadoutTabType";

const base = "assets/menu/";

export const LOADOUT_TAB_ICONS: Record<LoadoutTabType, string> = {
    [LoadoutTabType.Tools]: base + "tool_pouch_and_crafting_kit.png",
    [LoadoutTabType.Crests]: base + "memory_locket.png",
    [LoadoutTabType.Skills]: base + "spool_fragment.png",
    [LoadoutTabType.Needles]: base + "pale_oil.png",
};