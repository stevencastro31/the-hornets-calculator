import { LoadoutTabType } from "$lib/types/LoadoutTabType";

export const LOADOUT_TAB_ICONS: Record<LoadoutTabType, string> = {
    [LoadoutTabType.TOOLS]: "tool_pouch_and_crafting_kit.png",
    [LoadoutTabType.CRESTS]: "memory_locket.png",
    [LoadoutTabType.SKILLS]: "spool_fragment.png",
    [LoadoutTabType.NEEDLES]: "pale_oil.png",
};