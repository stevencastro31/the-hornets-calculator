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
        {#each calculator.skillDamageInfoDetail as detail}
            <SkillStatLabel info={detail}/>
        {/each}
    </div>
</div>