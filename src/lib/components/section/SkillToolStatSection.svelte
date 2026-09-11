<script lang="ts">
    import StatLabel from "../stats/StatLabel.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import type { DamageCalculator } from "$lib/class/DamageCalculator.svelte";
    import SkillStatLabel from "../stats/SkillStatLabel.svelte";
    import { CrestType } from "$lib/enums/CrestType";

    let { data } : { data: UserLoadout } = $props();
    let calculator: DamageCalculator = $derived(data.damageCalculator);
</script>
    

<div class="flex flex-wrap">
    <StatLabel label="Max" text={`${data.maxSilk}`} subtext="SILK"/>
    {#if data.crest !== CrestType.Cursed}
        <StatLabel label="Spell Cost" text={`${data.spellCost}`} subtext="SILK"/>
    {/if}
    <StatLabel label="Regen" text="1" subtext="SILK"/>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 mt-4">
        {#each calculator.skillDamageInfoDetail as detail}
                <SkillStatLabel info={detail}/>
        {/each}

        {#each calculator.toolDamageInfoDetail as detail}
                <SkillStatLabel info={detail}/>
        {/each}
    </div>
</div>