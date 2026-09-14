<script lang="ts">
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { CrestType } from "$lib/enums/CrestType";
    import CrestSlot from "../crest/CrestSlot.svelte";

    let { data } : { data: UserLoadout } = $props();
    let crests = [CrestType.Architect, CrestType.Beast, CrestType.Cursed, CrestType.Hunter2, CrestType.Hunter3, CrestType.Hunter4, CrestType.Reaper, CrestType.Shaman, CrestType.Wanderer, CrestType.Witch];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full">
    <div class="page md:px-8">
        <img src="assets/menu/crest_heading.png" class="header" alt="header" draggable="false"/>
        <div class="flex flex-wrap flex-row place-content-center">
        {#each crests as crestType (crestType)}
            <div onclick={() => { data.SetCrestType(crestType); }}>
                <CrestSlot crestType={crestType} isSelected={crestType === data.crest}/>
            </div>
        {/each}
        </div>

        <!-- maybe add glow -->
    </div>
</div>

<style>
    .header {
        width: 18rem;
        padding-top: 2rem;
        user-select: none;
        padding-bottom: 1rem;
    }

    .page {
        place-items: center;
        flex-shrink: 0;
        width: 100%;
    }
</style>