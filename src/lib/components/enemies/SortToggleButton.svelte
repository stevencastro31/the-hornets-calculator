<script lang="ts">
    import { SortByType } from "$lib/enums/SortByType";
    import { EnemiesSectionState } from "$lib/class/EnemiesSectionState.svelte";

    let { state: sectionState, text, modes }: { state: EnemiesSectionState, text: string, modes: SortByType[] } = $props();
    let isAscending = $state(false);

    function HandleButtonClick() {
        isAscending = !isAscending;
        sectionState.sortMode = isAscending ? modes[0] : modes[1];
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="flex flex-row items-center pb-2" onclick={HandleButtonClick}>
    {#if !isAscending}
        <img src="assets/menu/silksong_arrow.png" alt="arrow" class="object-contain max-h-8 p-1 rotate-270"/>
    {:else}
        <img src="assets/menu/silksong_arrow.png" alt="arrow" class="object-contain max-h-8 p-1 rotate-90"/>
    {/if}
    <h2 class=" text-xl">{text}</h2>
</div>

<style>
    img {
        user-select: none;
    }
</style>