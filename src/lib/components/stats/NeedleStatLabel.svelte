<script lang="ts">
    import type { UserInfo } from "$lib/types/UserInfo";
    import StatLabel from "./StatLabel.svelte";
    import { NEEDLE_DAMAGE } from "$lib/objects/NeedleDamage";
    import { CrestType } from "$lib/enums/CrestType";
    import { RoundToEven } from "$lib/utils";
    import { ToolType } from "../../enums/ToolType";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();

    let active_crest_type = $derived(user_info.active_crest_info.type);
    let active_passive = $derived(user_info.crest_passive_is_active);
    let needle_info = $derived(NEEDLE_DAMAGE[user_info.current_needle]);
    let has_barbed_bracelet = $derived(user_info.current_tool_loadout.has(ToolType.BarbedBracelet));
    let has_flintslate = $derived(user_info.current_tool_loadout.has(ToolType.Flintslate));

    let calculated_damage: number = $derived(CalculateDamage(false));
    let calculated_challenge_damage: number = $derived(CalculateDamage(true));

    function CalculateDamage(is_challenge: boolean) {
        let base: number = needle_info.damage;
        let modifier: number = 1;

        if (is_challenge) modifier += 0.5;
        if (active_crest_type === CrestType.Hunter3 && active_passive) modifier += 0.3;
        if (active_crest_type === CrestType.Hunter4 && active_passive) modifier += 0.5;
        if (active_crest_type === CrestType.Beast && active_passive) modifier += 0.25;
        if (has_barbed_bracelet) modifier += 0.25;
        if (has_flintslate) modifier += 0.5;

        return RoundToEven(base * modifier);
    }
</script>

<h2 class="text-4xl py-4 px-2">{needle_info.name}</h2>
<div class="flex flex-wrap">
    <!-- Base Needle Stats -->
    <div class="w-full flex flex-wrap items-center">
        <StatLabel label={"DPS"} text={"9.2"}/>
        <StatLabel label={"Base"} text={`${calculated_damage}`} subtext={"DMG"}/>
        <StatLabel label={"Swing Speed"} text={"1"} subtext={"s"}/>
    </div>

    <!-- Modifiers -->
    <div class="w-full flex flex-wrap items-center">
        <StatLabel label={"Challenge Hit"} text={`${calculated_challenge_damage}`} subtext={"DMG"}/>

        {#if active_crest_type === CrestType.Wanderer && active_passive}
            <StatLabel label={"Critical Hit"} text={`${calculated_damage * 3}`} subtext={"DMG"}/>
            <StatLabel label={"Critical Challenge Hit"} text={`${calculated_challenge_damage * 3}`} subtext={"DMG"}/>
        {/if}
    </div>

    <!-- Needle Art -->
    <div class="w-full flex items-center">
        <img src="assets/HUD/needle_strike.png" alt="needle strike" draggable="false" class="h-16 w-24 object-contain select-none"/>
        <StatLabel label={"Needle Strike"} text={"20"} subtext={"DMG"}/>
    </div>
</div>