<script lang="ts">
    import StatLabel from "../stats/StatLabel.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { CrestType } from "$lib/enums/CrestType";
    import type { CrestInfo } from "$lib/types/CrestInfo";
    import type { DamageCalculator } from "$lib/class/DamageCalculator.svelte";
    import CheckBox from "../common/CheckBox.svelte";

    let { data } : { data: UserLoadout } = $props();
    
    let crestInfo: CrestInfo = $derived(data.crestInfo);
    let calculator: DamageCalculator = $derived(data.damageCalculator);
</script>

<h2 class="text-4xl py-4 px-2">{data.needleInfo.name}</h2>
<div class="flex flex-wrap">
    <!-- Base Needle Stats -->
    <div class="w-full flex flex-wrap items-center">
        {#if data.crest === CrestType.Wanderer && data.crestIsActive}
            <StatLabel label="Max" text={`${(calculator.modifiedChallenge * 3)}`} subtext="DMG (Critical)"/>
        {:else}
            {#if calculator.challenged}
                <StatLabel label="Max" text={`${calculator.modifiedChallenge}`} subtext="DMG"/>
            {:else}
                <StatLabel label="Max" text={`${calculator.modified}`} subtext="DMG"/>
            {/if}
        {/if}

        <StatLabel label="DPS" text={`${calculator.dps.toFixed(2)}`}/>
        <StatLabel label="Base" text={`${calculator.base}`} subtext="DMG"/>
        <StatLabel label="Swing Speed" text={`${calculator.swingSpeed.toFixed(2)}`} subtext="s"/>
    </div>

    <!-- Needle Art -->
    <div class="w-full flex items-center">
        <img src="assets/menu/needle_strike.png" alt="needle strike" draggable="false" class="h-16 w-24 object-contain"/>
        <StatLabel label="Needle Strike" text={`${calculator.totalNeedleStrikeDamage}`} subtext={`DMG${calculator.needleStrikeHits > 1 ? ` (${calculator.needleStrikeHits} HITS)` : ""}`}/>
    </div>

    <!-- Modifiers -->
    <h2 class="text-4xl py-4 px-2 w-full">Modifiers</h2>
    <div class="flex flex-row flex-wrap gap-2 items-center">
        <CheckBox bind:checked={calculator.challenged} text="Challenge"/>
        {#if data.HasCrestActive()}
            <CheckBox bind:checked={data.crestIsActive} text="Passive"/>
        {/if}
    </div>
</div>

<style>
    img {
        user-select: none;
    }
</style>