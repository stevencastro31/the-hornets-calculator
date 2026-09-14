import { CrestType } from "../enums/CrestType";

const base = "assets/crests/";

export const CREST_UIS: Record<CrestType, string> = {
	[CrestType.Architect]: base + "Crest_Architect.png",
	[CrestType.Beast]: base + "Crest_Beast.png",
	[CrestType.Cursed]: base + "Crest_Cursed.png",
	[CrestType.Hunter2]: base + "Crest_Hunter2.png",
	[CrestType.Hunter3]: base + "Crest_Hunter3.png",
	[CrestType.Hunter4]: base + "Crest_Hunter4.png",
	[CrestType.Reaper]: base + "Crest_Reaper.png",
	[CrestType.Shaman]: base + "Crest_Shaman.png",
	[CrestType.Wanderer]: base + "Crest_Wanderer.png",
	[CrestType.Witch]: base + "Crest_Witch.png",
	[CrestType.Vesti]: base + "",
};