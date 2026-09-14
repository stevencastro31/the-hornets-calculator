import { CrestType } from "../enums/CrestType";

const base = "assets/hud/";

export const HUD_UIS: Record<CrestType, string> = {
        [CrestType.Architect]: base + "architect_hud.png",
        [CrestType.Beast]: base + "beast_hud.png",
        [CrestType.Cursed]: base + "cursed_hud.png",
        [CrestType.Hunter2]: base + "hunter2_hud.png",
        [CrestType.Hunter3]: base + "hunter3_hud.png",
        [CrestType.Hunter4]: base + "hunter4_hud.png",
        [CrestType.Reaper]: base + "reaper_hud.png",
        [CrestType.Shaman]: base + "shaman_hud.png",
        [CrestType.Wanderer]: base + "wanderer_hud.png",
        [CrestType.Witch]: base + "witch_hud.png",
        [CrestType.Vesti]: base + "",
};
