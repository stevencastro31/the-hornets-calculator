<script lang="ts">
    // import { CrestType } from "$lib/types/CrestType";
    // import SectionHeader from "../common/SectionHeader.svelte";
    // import CrestHUD from "../hud/CrestHUD.svelte";
    // import type { UserInfo } from "$lib/types/UserInfo";
    // import StatLabel from "../stats/StatLabel.svelte";
    // import { ToolType } from "../../enums/ToolType";
    // import SkillStatLabel from "../stats/SkillStatLabel.svelte";
    // import NeedleStatLabel from "../stats/NeedleStatLabel.svelte";

    // let { user_info = $bindable() } : { user_info: UserInfo } = $props();

    // let active_crest_type = $derived(user_info.active_crest_info.type);
    // let has_volt_filament = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_VOLT_FILAMENT));

    // let silk_count = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_SPOOL_EXTENDER) ? 21 : 18);
    // let silk_cost = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_EGG_OF_FLEALIA) ? 3 : 4);
</script>

<!-- <div>
    <SectionHeader title="Statistics"/>
    <hr>

    <CrestHUD bind:user_info={user_info}/>
    <hr>

    <NeedleStatLabel bind:user_info={user_info}/>    

    {#if active_crest_type !== CrestType.Cursed}
    <hr class="mt-8"/>
    <h2 class="text-4xl py-4 px-2">Spells & Tools</h2>

    <div class="flex flex-wrap">
        <StatLabel label={"Max"} text={`${silk_count}`} subtext={"SILK"}/>
        <StatLabel label={"Spell Cost"} text={`${silk_cost}`} subtext={"SILK"}/>
        <StatLabel label={"Regen"} text={"1"} subtext={"SILK"}/>

        <div class="w-full items-center">
            {#each user_info.current_skill_loadout as skill_type: SkillType}
                <SkillStatLabel skill_type={skill_type} needle_level={user_info.current_needle} has_shaman_crest={active_crest_type === CrestType.Shaman} has_volt_filament={has_volt_filament}/>
            {/each}

            {#each user_info.current_tool_loadout as tool_Type: ToolType}
                <p>tool stat label</p>
            {/each}
        </div>
    </div>
    {/if}
</div> -->

<style>
    hr {
        filter: brightness(0.5)
    }
</style>