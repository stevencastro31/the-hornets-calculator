import type { UserLoadout } from "./UserLoadout.svelte";
import { TOOLS_RED } from "$lib/objects/ToolsRed";
import { SlotDirection } from "$lib/enums/SlotDirection";
import { ToolType } from "$lib/enums/ToolType";
import { SkillType } from "$lib/enums/SkillType";
import { SlotType } from "$lib/enums/SlotType";
import { SvelteSet } from "svelte/reactivity";

export class LoadoutTabMenuState {
    SKIILS = [SkillType.SilkSpear, SkillType.ThreadStorm, SkillType.CrossStitch, SkillType.SharpDart, SkillType.RuneRage, SkillType.PaleNails];

    // Attributes
    loadout: UserLoadout;
    selectedTool: ToolType | undefined = $state();
    selectedSkill: SkillType | undefined = $state();
    disabledTools: SvelteSet<ToolType> = new SvelteSet();

    // used to display direction on equipped red tools & skills
    redToolInfo: Array<any> = $state(TOOLS_RED.map(tool => ({ toolType: tool, direction: SlotDirection.Center })));  
    skillInfo: Array<any> = $state(this.SKIILS.map(skill => ({ skillType: skill, direction: SlotDirection.Center })));

    activeToolPageType: SlotType | number = $state(SlotType.Attack);

    private MUTUALLY_EXCLUSIVE_TOOL_GROUP: Array<ToolType[]> = [
        [ToolType.DruidsEye, ToolType.DruidsEyes],
        [ToolType.VoltVesselBola, ToolType.VoltVesselSpear],
        [ToolType.ClawMirror, ToolType.ClawMirrors],
        [ToolType.Curveclaw, ToolType.Curvesickle],
        [ToolType.SilkshotForge, ToolType.SilkshotOriginal, ToolType.SilkshotTwelve],
    ];
    private MUTUALLY_EXCLUSIVE_TOOLS: SvelteSet<ToolType> = new SvelteSet(this.MUTUALLY_EXCLUSIVE_TOOL_GROUP.flat());

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
        if (this.selectedTool !== undefined) {
            this.loadout.EquipTool(this.selectedTool);
            this.UpdateToolSelection();
        }
    }

    EquipSkill() {
        if (this.selectedSkill !== undefined) {
            this.loadout.EquipSkill(this.selectedSkill);
            this.UpdateToolSelection()
        }
    }

    IsToolDisabled(type: ToolType) {
        return this.disabledTools.has(type);
    }

    SetRedToolDirection(type: ToolType, direction: SlotDirection) {
        this.redToolInfo[type - 23].direction = direction;
    }

    SetSkillDirection(type: SkillType, direction: SlotDirection) {
        this.skillInfo[type].direction = direction;
    }

    UpdateToolSelection() {
        this.disabledTools.clear();

        // disable some tool options based on the tool equipped in the current active slot (e.g. provide the option to swap between base and upgraded versions of some tools [Druid Eye, Druid Eyes])
        const slotTool = this.loadout.crestMenuState.activeSlot?.toolType;
        this.loadout.equippedTools.forEach(tool => {
            this.disabledTools.add(tool);
            if (!this.MUTUALLY_EXCLUSIVE_TOOLS.has(tool)) return;

            let group = this.MUTUALLY_EXCLUSIVE_TOOL_GROUP.find(g => g.includes(tool))!;
            if (!group) return;

            if (slotTool === undefined || !group.includes(slotTool)) {
                group.forEach(item => { if (item !== tool) this.disabledTools.add(item); });
            }
        }); 
    }
};