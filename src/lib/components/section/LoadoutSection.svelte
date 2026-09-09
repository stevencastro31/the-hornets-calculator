<script lang="ts">
    import SectionHeader from "../common/SectionHeader.svelte";
    import LoadoutTabs from "../loadout/LoadoutTabs.svelte";
    import CrestMenuContainer from "../crest/CrestMenuContainer.svelte";
    import type { UserLoadout } from "$lib/class/UserLoadout.svelte";

    let { data } : { data: UserLoadout } = $props();
</script>

<div>
    <SectionHeader title="Loadout"/>
    <hr>

    <div class="max-h-154">
        <CrestMenuContainer data={data}/>
    </div>

    <LoadoutTabs data={data}/>
</div> 

<style>
    hr {
        filter: brightness(0.5)
    }
</style>
