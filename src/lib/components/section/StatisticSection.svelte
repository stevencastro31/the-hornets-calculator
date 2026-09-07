<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import SectionHeader from "../common/SectionHeader.svelte";
    import CrestHUD from "../hud/CrestHUD.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";
    import StatLabel from "../common/StatLabel.svelte";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();

    let active_crest_type = $derived(user_info.active_crest_info.type);

    let needle_damage = $derived(5 + 4 * user_info.current_needle);
    let needle_strike = $derived(0);
</script>

<div>
    <SectionHeader title="Statistics"/>
    <hr>

    <CrestHUD bind:user_info={user_info}/>
    <hr>

    <h2 class="text-4xl py-4 px-2">Pale Steel Needle</h2>
    <div class="flex flex-wrap">
        <!-- Base Needle Stats -->
        <div class="w-full flex flex-wrap items-center">
            <StatLabel label={"DPS"} text={"9.2"}/>
            <StatLabel label={"Base"} text={`${needle_damage}`} subtext={"DMG"}/>
            <StatLabel label={"Swing Speed"} text={"0.41"} subtext={"s"}/>
        </div>

        <!-- Modifiers -->
        <div class="w-full flex flex-wrap items-center">
            <StatLabel label={"Challenge Hit"} text={"20"} subtext={"DMG"}/>
            <!-- <StatLabel label={"Critical Hit"} text={"20"} subtext={"DMG"}/> -->
        </div>

        <!-- Needle Art -->
        <div class="w-full flex items-center">
            <img src="assets/HUD/needle_strike.png" alt="needle strike" draggable="false" class="h-16 w-24 object-contain select-none"/>
            <StatLabel label={"Needle Strike"} text={"20"} subtext={"DMG"}/>
        </div>
    </div>

    {#if active_crest_type !== CrestType.Cursed}
    <hr class="mt-8"/>
    <h2 class="text-4xl py-4 px-2">Spells & Tools</h2>

    <div class="flex flex-wrap">
        <!-- Base Skill Stats -->
        <StatLabel label={"Max"} text={"9.2"} subtext={"SILK"}/>
        <StatLabel label={"Spell Cost"} text={"9.2"} subtext={"SILK"}/>
        <StatLabel label={"Regen"} text={"0.41"} subtext={"SILK"}/>

        <div class="w-full items-center">
            <div class="flex items-center">
                <img src="assets/SKILLS/01_silkspear_icon.png" alt="needle strike" draggable="false" class="size-20 p-2 object-contain select-none"/>
                <StatLabel label={"Silk Spear"} text={"100"} subtext={"DMG"}/>
            </div>
            <div class="flex items-center">
                <img src="assets/SKILLS/01_silkspear_icon.png" alt="needle strike" draggable="false" class="size-20 p-2 object-contain select-none"/>
                <StatLabel label={"Silk Spear"} text={"100"} subtext={"DMG"}/>
            </div>

            <div class="flex items-center">
                <img src="assets/TOOLS/RED/01_straight_pin.png" alt="needle strike" draggable="false" class="size-20 p-2 object-contain select-none"/>
                <StatLabel label={"Straight Pin"} text={"17"} subtext={"DMG"}/>
            </div>
        </div>
    </div>
    {/if}
</div>

<style>
    hr {
        filter: brightness(0.5)
    }
</style>