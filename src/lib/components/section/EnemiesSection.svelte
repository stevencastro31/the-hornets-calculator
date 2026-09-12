<script lang="ts">
    import CheckBox from "../common/CheckBox.svelte";
    import SectionHeader from "../common/SectionHeader.svelte";
    import SearchBar from "../enemies/SearchBar.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import type { EnemiesSectionState } from "$lib/class/EnemiesSectionState.svelte";
    import EnemyCard from "../enemies/EnemyCard.svelte";
    import SortToggleButton from "../enemies/SortToggleButton.svelte";
    import { SortByType } from "$lib/enums/SortByType";

    let { data } : { data: UserLoadout } = $props();
    let enemySectionState: EnemiesSectionState = $derived(data.enemiesSectionState);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->


<div class="flex flex-col h-full max-h-[90vh]">
    <SectionHeader title="Enemies"/>
    <hr>

    <div class="flex flex-wrap items-center w-full gap-2 py-4 shrink-0"> 
        <CheckBox bind:checked={enemySectionState.filterBoss} text="Boss"/>
        <CheckBox bind:checked={enemySectionState.filterMiniBoss} text="Mini-Boss"/>
        <CheckBox bind:checked={enemySectionState.filterMemory} text="Memory"/>
        <span class="border-l h-10"></span>
        <CheckBox bind:checked={enemySectionState.blackThreadHealth} text="Black-Threaded"/>
    </div>

    <SearchBar bind:query={enemySectionState.query}/> 

    <p class="mt-2" style={`filter: brightness(0.80)`}>{`Displaying ${enemySectionState.resultCount} result(s)`}</p>

    <div class="flex place-content-between mt-4">
        <SortToggleButton state={enemySectionState} text="Name" modes={[SortByType.NameAsc, SortByType.NameDesc]}/>
        <SortToggleButton state={enemySectionState} text="Health" modes={[SortByType.HealthAsc, SortByType.HealthDesc]}/>
    </div>

    <div class="flex-1 max-h-80 xl:max-h-4/5 w-full overflow-y-auto">
        {#each enemySectionState.enemyInfo as info}
            <EnemyCard info={info} threaded={enemySectionState.blackThreadHealth} />
        {/each}
    </div>
</div>


<style>
    hr {
        filter: brightness(0.5)
    }
    * {
    scrollbar-color: #555 #1a1a1a;
    scrollbar-width: thin;
    }

    /* Chrome, Edge, Safari */
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    *::-webkit-scrollbar-track {
        background: #1a1a1a;
    }

    *::-webkit-scrollbar-thumb {
        background: #555;
        border-radius: 4px;
    }

    *::-webkit-scrollbar-thumb:hover {
        background: #777;
    }
</style>