import { SkillType } from "../enums/SkillType";

const base = "assets/skills/"

export const SKILL_ICONS: Record<SkillType, string> = {
    [SkillType.SilkSpear]: base + "01_silkspear_icon.png",
    [SkillType.ThreadStorm]: base + "02_thread_storm_icon.png",
    [SkillType.CrossStitch]: base + "03_cross_stitch_icon.png",
    [SkillType.SharpDart]: base + "04_sharpdart_icon.png",
    [SkillType.RuneRage]: base + "05_rune_rage_icon.png",
    [SkillType.PaleNails]: base + "06_pale_nails_icon.png",
};