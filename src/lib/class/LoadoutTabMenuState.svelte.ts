import type { UserLoadout } from "./UserLoadout.svelte";
import { TOOLS_RED } from "$lib/objects/ToolsRed";
import { SlotDirection } from "$lib/enums/SlotDirection";
import { ToolType } from "$lib/enums/ToolType";
import { SkillType } from "$lib/enums/SkillType";
import { SlotType } from "$lib/enums/SlotType";

export class LoadoutTabMenuState {
    SKIILS = [SkillType.SilkSpear, SkillType.ThreadStorm, SkillType.CrossStitch, SkillType.SharpDart, SkillType.RuneRage, SkillType.PaleNails];

    // Attributes
    loadout: UserLoadout;
    selectedTool: ToolType | undefined = $state();
    selectedSkill: SkillType | undefined = $state();

    // used to display direction on equipped red tools & skills
    redToolInfo: Array<any> = $state(TOOLS_RED.map(tool => ({ toolType: tool, direction: SlotDirection.Center })));  
    skillInfo: Array<any> = $state(this.SKIILS.map(skill => ({ skillType: skill, direction: SlotDirection.Center })));

    activeToolPageType: SlotType | number = $state(SlotType.Attack);

    // Constructors
    constructor(loadout: UserLoadout) { 
        this.loadout = loadout;
    }

    // Methods
    SelectTool(type: ToolType) {
        this.selectedTool = type;
    }

    SelectSkill(type: SkillType) {
        this.selectedSkill = type;
    }

    Deselect() {
        this.selectedTool = undefined;
        this.selectedSkill = undefined;
    }

    EquipTool() {
        if (this.selectedTool !== undefined)
            this.loadout.EquipTool(this.selectedTool);
    }

    EquipSkill() {
        if (this.selectedSkill !== undefined)
            this.loadout.EquipSkill(this.selectedSkill);
    }

    SetRedToolDirection(type: ToolType, direction: SlotDirection) {
        this.redToolInfo[type - 23].direction = direction;
    }

    SetSkillDirection(type: SkillType, direction: SlotDirection) {
        this.skillInfo[type].direction = direction;
    }
};