<script lang="ts">
    import SectionHeader from "../common/SectionHeader.svelte";
    import CrestHUDContainer from "../hud/CrestHUDContainer.svelte";
    import NeedleStatSection from "./NeedleStatSection.svelte";
    import SkillToolStatSection from "./SkillToolStatSection.svelte";

    import { CrestType } from "$lib/enums/CrestType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";

    let { data } : { data: UserLoadout } = $props();
</script>

<SectionHeader title="Statistics"/>
<hr>

<div class="mb-2">
    <CrestHUDContainer loadout={data}/>
</div>
<hr>

<NeedleStatSection data={data}/>    

{#if data.crest !== CrestType.Cursed}
    <hr class="mt-6">
    <h2 class="text-4xl py-4 px-2">Spells & Tools</h2>
    <SkillToolStatSection data={data}/>
{/if}

<style>
    hr {
        filter: brightness(0.5)
    }
</style>