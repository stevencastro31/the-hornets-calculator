<script lang="ts">
    // import StatLabel from "./StatLabel.svelte";
    // import type { NeedleType } from "$lib/types/NeedleType";
    // import type { SkillDamageInfo } from "$lib/types/DamageInfo";
    // import { RoundToEven } from "$lib/utils";
    // import { SILK_SKILL_DAMAGE } from "$lib/objects/SilkSkillDamage";
    // import { SILK_SKILL_ICONS } from "$lib/objects/SilkSkillIcon";
    // import { SkillType } from "$lib/types/SkillType";
    
    // let { skill_type, needle_level, has_shaman_crest = false, has_volt_filament = false } : { 
    //     skill_type: SkillType, 
    //     needle_level: NeedleType, 
    //     has_shaman_crest?: boolean, 
    //     has_volt_filament?: boolean 
    // } = $props();

    // let damage_info: SkillDamageInfo = $derived(SILK_SKILL_DAMAGE[skill_type]);
    // let calculated_damage = $derived.by(() => {
    //     let base = damage_info.damage[needle_level];
    //     let modifier = 1;
    //     if (has_shaman_crest) modifier += 0.4;
    //     if (has_volt_filament) modifier += 0.25;
    //     return RoundToEven(base * modifier); 
    // });
</script>

<!-- <div class="flex items-center">
    <img src={`assets/SKILLS/${SILK_SKILL_ICONS[skill_type]}`} alt="skill" draggable="false" class="size-20 p-2 object-contain select-none"/>
    <StatLabel label={damage_info.name} text={`${calculated_damage}`} subtext={"DMG" + damage_info.subtext}/>
</div> -->