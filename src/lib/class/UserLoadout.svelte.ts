import { NeedleType } from "../enums/NeedleType";
import { CrestType } from "../enums/CrestType";
import { ToolType } from "$lib/enums/ToolType";
import { SkillType } from "$lib/enums/SkillType";
import { SlotType } from "$lib/enums/SlotType";
import { SlotDirection } from "$lib/enums/SlotDirection";

import { CREST_DATA } from "$lib/objects/CrestData";
import { NEEDLE_DATA } from "$lib/objects/NeedleData";

import type { CrestInfo } from "$lib/types/CrestInfo";
import type { NeedleInfo } from "$lib/types/ItemInfo";

import { CrestMenuState } from "./CrestMenuState.svelte";
import { LoadoutTabMenuState } from "./LoadoutTabMenuState.svelte";
import { SvelteSet } from "svelte/reactivity";
import { DamageCalculator } from "./DamageCalculator.svelte";
import { EnemiesSectionState } from "./EnemiesSectionState.svelte";

export class UserLoadout {
    // Page States
    crestMenuState: CrestMenuState = new CrestMenuState(this);
    loadoutTabMenuState: LoadoutTabMenuState = new LoadoutTabMenuState(this);
    enemiesSectionState: EnemiesSectionState = new EnemiesSectionState(this);

    // Attributes
    crest: CrestType = $state(CrestType.Hunter2);
    needle: NeedleType = $state(NeedleType.Needle);
    crestIsActive: boolean = $state(false);

    maxSilk: number = $derived.by(() => {
        if (this.crest === CrestType.Cursed) return 3;
        if (this.HasTool(ToolType.SpoolExtender)) return 21;
        return 18;
    });
    spellCost: number = $derived(this.HasTool(ToolType.EggOfFlealia) ? 3: 4);

    crestInfo: CrestInfo = $state(CREST_DATA[this.crest]);
    vesticrestInfo: CrestInfo = $state(CREST_DATA[CrestType.Vesti]);
    needleInfo: NeedleInfo = $derived(NEEDLE_DATA[this.needle]);

    // Objects
    equippedTools: SvelteSet<ToolType> = new SvelteSet();
    equippedSkills: SvelteSet<SkillType> = new SvelteSet();
    damageCalculator: DamageCalculator = new DamageCalculator(this);

    private activeCrests = [CrestType.Beast, CrestType.Hunter3, CrestType.Hunter4, CrestType.Reaper, CrestType.Wanderer];

    // Constructors
    constructor() { }

    // Methods
    SetCrestType(type: CrestType) { 
        this.crest = type; 
        this.crestInfo = CREST_DATA[this.crest];
        this.vesticrestInfo = CREST_DATA[CrestType.Vesti];
        this.equippedSkills.clear();
        this.equippedTools.clear();
        this.loadoutTabMenuState.disabledTools.clear();
    }

    SetNeedle(type: NeedleType) {  
        this.needle = type; 
    }

    HasTool(type: ToolType) {
        return this.equippedTools.has(type);
    }

    HasSkill(type: SkillType) {
        return this.equippedSkills.has(type);
    }

    EquipTool(type: ToolType) {
        if (this.crestMenuState.selectedSlotID === 0) return;    // ignore if there is no selected crest slot
        if (this.HasTool(type)) return;                          // ignore if the tool is already equipped

         // unequip old tool
        const oldTool: ToolType | undefined = this.crestMenuState.activeSlot?.toolType;
        if (oldTool !== undefined && this.HasTool(oldTool)) {
            this.equippedTools.delete(oldTool);

            if (this.crestMenuState.activeSlot?.type === SlotType.Attack)
                this.loadoutTabMenuState.SetRedToolDirection(oldTool, SlotDirection.Center);
        }

        // equip new tool
        if (this.crestMenuState.activeSlot) {
            this.crestMenuState.activeSlot.toolType = type;
            this.equippedTools.add(type);

            if (this.crestMenuState.activeSlot?.type === SlotType.Attack)
                this.loadoutTabMenuState.SetRedToolDirection(type, this.crestMenuState.activeSlot.direction ?? SlotDirection.Up);
            this.loadoutTabMenuState.UpdateToolSelection();
            this.loadoutTabMenuState.Deselect();
        }
    }

    EquipSkill(type: SkillType) {
        if (this.crestMenuState.selectedSlotID === 0) return;    // ignore if there is no selected crest slot
        if (this.HasSkill(type)) return;                         // ignore if the skill is already equipped

         // unequip old skill
        const oldSkill: SkillType | undefined = this.crestMenuState.activeSlot?.skillType;
        if (oldSkill !== undefined && this.HasSkill(oldSkill)) {
            this.equippedSkills.delete(oldSkill);

            if (this.crestMenuState.activeSlot?.type === SlotType.Skill)
                this.loadoutTabMenuState.SetSkillDirection(oldSkill, SlotDirection.Center);
        }

        // equip new skill
        if (this.crestMenuState.activeSlot) {
            this.crestMenuState.activeSlot.skillType = type;
            this.equippedSkills.add(type);

            if (this.crestMenuState.activeSlot?.type === SlotType.Skill)
                this.loadoutTabMenuState.SetSkillDirection(type, this.crestMenuState.activeSlot.direction ?? SlotDirection.Up);
            this.loadoutTabMenuState.Deselect();
        }
    }

    ToggleCrest() {
        this.crestIsActive = !this.crestIsActive;
    }

    HasCrestActive() {
        return this.activeCrests.includes(this.crest);
    }

    Reset() {
        this.SetCrestType(CrestType.Hunter2);
    }
};

