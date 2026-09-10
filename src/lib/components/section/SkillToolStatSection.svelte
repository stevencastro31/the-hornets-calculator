<script lang="ts">
    import StatLabel from "../stats/StatLabel.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import type { DamageCalculator } from "$lib/class/DamageCalculator.svelte";
    import SkillStatLabel from "../stats/SkillStatLabel.svelte";

    let { data } : { data: UserLoadout } = $props();
    let calculator: DamageCalculator = $derived(data.damageCalculator);
</script>
    

<div class="flex flex-wrap">
    <StatLabel label="Max" text={`${data.maxSilk}`} subtext="SILK"/>
    <StatLabel label="Spell Cost" text={`${data.spellCost}`} subtext="SILK"/>
    <StatLabel label="Regen" text="1" subtext="SILK"/>

    <div class="w-full items-center">
        {#each data.equippedSkills as skill_type: SkillType}
            <!-- <SkillStatLabel skill_type={skill_type} needle_level={data.needle} has_shaman_crest={false} has_volt_filament={true}/> -->
        {/each}

    </div>
</div>