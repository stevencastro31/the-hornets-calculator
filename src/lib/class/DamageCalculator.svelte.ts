import { CrestType } from "$lib/enums/CrestType";
import { ToolType } from "$lib/enums/ToolType";
import { UserLoadout } from "./UserLoadout.svelte"
import { RoundToEven } from "$lib/utils";

import { NEEDLE_STRIKE_HITS, NEEDLE_STRIKE_MULTIPLIER } from "$lib/objects/NeedleStrikeData";
import { SKILL_DATA } from "$lib/objects/SkillData";
import type { SkillToolStatInfo } from "$lib/types/SkillToolStatInfo";
import type { SkillType } from "$lib/enums/SkillType";
import { SKILL_ICONS } from "$lib/objects/SkillIcons";

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
            let skillData = SKILL_DATA[skillType];
            let base = skillData.damage[this.loadout.needle];
            let modifier = 1;

            if (this.loadout.crest === CrestType.Shaman) modifier += 0.4;
            if (this.loadout.HasTool(ToolType.VoltFilament)) modifier += 0.25;

            let modifiedDamage = RoundToEven(base * modifier);
            if (this.loadout.HasTool(ToolType.VoltFilament)) modifiedDamage += 15;

            data.push({
                name: skillData.name,
                damage: modifiedDamage,
                subtext: skillData.hits > 1 ? ` (${skillData.hits} HITS)` : "",
                type: skillType,
                iconPath: SKILL_ICONS[skillType],
            });
        });
        return data;
    }

    CalculateToolDamage() {
        let data: Array<SkillToolStatInfo> = [];

        return data;
    }
}




    // let active_crest_type = $derived(user_info.active_crest_info.type);
    // let active_passive = $derived(user_info.crest_passive_is_active);
    // let needle_info = $derived(NEEDLE_DAMAGE[user_info.current_needle]);
    // let has_barbed_bracelet = $derived(user_info.current_tool_loadout.has(ToolType.BarbedBracelet));
    // let has_flintslate = $derived(user_info.current_tool_loadout.has(ToolType.Flintslate));

    // let calculated_damage: number = $derived(CalculateDamage(false));
    // let calculated_challenge_damage: number = $derived(CalculateDamage(true));

    // function CalculateDamage(is_challenge: boolean) {
    //     let base: number = needle_info.damage;
    //     let modifier: number = 1;



    //     return RoundToEven(base * modifier);
    // }