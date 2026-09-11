import { CrestType } from "$lib/enums/CrestType";
import { ToolType } from "$lib/enums/ToolType";
import { UserLoadout } from "./UserLoadout.svelte"
import { RoundToEven } from "$lib/utils";

import { TOOLS_WITH_DAMAGE } from "$lib/objects/ToolsWithDamage";
import { NEEDLE_STRIKE_HITS, NEEDLE_STRIKE_MULTIPLIER } from "$lib/objects/NeedleStrikeData";
import { SKILL_DATA } from "$lib/objects/SkillData";
import { TOOL_DATA } from "$lib/objects/ToolData";

import type { SkillToolStatInfo } from "$lib/types/SkillToolStatInfo";
import { SkillType } from "$lib/enums/SkillType";
import { SKILL_ICONS } from "$lib/objects/SkillIcons";
import type { SkillInfo, ToolInfo } from "$lib/types/ItemInfo";
import { TOOL_ICONS } from "$lib/objects/ToolIcons";

export class DamageCalculator {
    // Attributes
    loadout: UserLoadout; 
    challenged: boolean = $state(false);

    // Needle Damage Stats
    swingSpeed: number;
    base: number;
    modified: number;
    modifiedChallenge: number;
    dps: number;
    needleStrikeDamage: number;
    needleStrikeHits: number;
    totalNeedleStrikeDamage: number;

    // Skill & Tool Damage Stats
    skillDamageInfoDetail: Array<SkillToolStatInfo>;
    toolDamageInfoDetail: Array<SkillToolStatInfo>;

    // Constructors
    constructor(loadout: UserLoadout) { 
        this.loadout = loadout;

        this.base = $derived(this.loadout.needleInfo.damage);
        this.swingSpeed = $derived(this.CalculateSwingSpeed());
        this.modified = $derived(this.CalculateModifiedNailDamage(true));
        this.modifiedChallenge = $derived(this.CalculateModifiedNailDamage());
        this.dps = $derived(this.modified * this.swingSpeed);
        this.needleStrikeDamage = $derived(this.modified * NEEDLE_STRIKE_MULTIPLIER[this.loadout.crest]);
        this.needleStrikeHits = $derived(NEEDLE_STRIKE_HITS[this.loadout.crest]);
        this.totalNeedleStrikeDamage = $derived(RoundToEven(this.needleStrikeDamage * this.needleStrikeHits));

        this.skillDamageInfoDetail = $derived(this.CalculateSpellDamage());
        this.toolDamageInfoDetail = $derived(this.CalculateToolDamage());
    }

    // Methods
    CalculateSwingSpeed() {
        let hps = 10;
        if (this.loadout.HasTool(ToolType.FleaBrew))
            if (this.loadout.crest === CrestType.Shaman || this.loadout.crest === CrestType.Cursed) 
                hps = this.loadout.crestInfo.swingSpeed;
            else
                hps = this.loadout.crestInfo.swingSpeedBrew;
        else
            hps = this.loadout.crestInfo.swingSpeed;
        return 10 / hps;
    }

    CalculateModifiedNailDamage(ignoreChallenge: boolean = false) {
        let modifier = 1;

        if (!ignoreChallenge)
            if (this.challenged) modifier += 0.5;
        if (this.loadout.crest === CrestType.Hunter3 && this.loadout.crestIsActive) modifier += 0.3;
        if (this.loadout.crest === CrestType.Hunter4 && this.loadout.crestIsActive) modifier += 0.5;
        if (this.loadout.crest === CrestType.Beast && this.loadout.crestIsActive) modifier += 0.25;
        if (this.loadout.HasTool(ToolType.BarbedBracelet)) modifier += 0.25;
        if (this.loadout.HasTool(ToolType.Flintslate)) modifier += 0.5;

        return RoundToEven(this.base * modifier);
    }

    CalculateSpellDamage() {
        let data: Array<SkillToolStatInfo> = [];

        this.loadout.equippedSkills.forEach(skillType => {
            let skillData: SkillInfo = SKILL_DATA[skillType];
            let base: number = skillData.damage[this.loadout.needle];
            let modifier: number = 1;

            if (this.loadout.crest === CrestType.Shaman) modifier += 0.4;
            if (this.loadout.HasTool(ToolType.VoltFilament)) modifier += 0.25;

            let modifiedDamage = RoundToEven(base * modifier);
            if (this.loadout.HasTool(ToolType.VoltFilament)) modifiedDamage += 15;

            let subtext = skillData.hits > 1 ? ` (${skillData.hits} HITS)` : "";
            if (skillType ===  SkillType.RuneRage)
                subtext = " (1st HIT)";

            data.push({
                name: skillData.name,
                damage: modifiedDamage,
                subtext: subtext,
                type: skillType,
                iconPath: SKILL_ICONS[skillType],
            });
        });
        return data;
    }

    CalculateToolDamage() {
        let data: Array<SkillToolStatInfo> = [];

        this.loadout.equippedTools.forEach(toolType => {
            if (!TOOLS_WITH_DAMAGE.includes(toolType)) return;

            let toolData: ToolInfo = TOOL_DATA[toolType];
            let subtext = toolData.hits > 1 ? ` (${toolData.hits} HITS)` : "";

            if (toolType === ToolType.RosaryCannon) subtext = " (MAX)";
            else if (toolType === ToolType.Flintslate || toolType === ToolType.PollipPouch) subtext = ` (${toolData.hits} TICKS)`;
            else if (toolType === ToolType.FleaBrew) subtext = ` (EMPTY)`;
            // else if (toolType === ToolType.VoltVesselBola || toolType === ToolType.VoltVesselSpear) subtext = ` (${toolData.hits - 1} ZAPS)`;

            data.push({
                name: toolData.name,
                damage: toolData.damage[this.loadout.needle],
                subtext: subtext,
                type: toolType,
                iconPath: TOOL_ICONS[toolType], 
            });
        });
        return data;
    }
}