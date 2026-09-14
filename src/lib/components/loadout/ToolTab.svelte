<script lang="ts">
    // @ts-expect-error The package is a JavaScript-only dependency.
    import SvelteCarousel from 'svelte-carousel';
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    
    import { ToolType } from '$lib/enums/ToolType';

    import { TOOLS_BLUE } from "$lib/objects/ToolsBlue";
    import { TOOLS_YELLOW } from "$lib/objects/ToolsYellow";

    import SlotUI from '../crest/SlotUI.svelte';
    import { SlotType } from '$lib/enums/SlotType';
    import { LoadoutTabMenuState } from '$lib/class/LoadoutTabMenuState.svelte';
    import type { CrestMenuState } from '$lib/class/CrestMenuState.svelte';

    let { data } : { data: UserLoadout } = $props();
    let toolCarousel: SvelteCarousel;

    let loadoutTabMenuState: LoadoutTabMenuState = $derived(data.loadoutTabMenuState);
    let crestMenuState: CrestMenuState = $derived(data.crestMenuState);

    // modified data needed to change the appearance of the tool tab item to show the direction in which the tool is equipped on the crest board
    let redToolInfo = $derived(loadoutTabMenuState.redToolInfo);

    function HandleArrowClick(e: any, isPrev: boolean) {
        if (isPrev)
            toolCarousel.goToPrev();
        else
            toolCarousel.goToNext();
        e.stopPropagation();
    }

    function HandleToolClick(e: any, toolType: ToolType) {
        if (loadoutTabMenuState.IsToolDisabled(toolType)) return;   // ignore disabled tools
        if (loadoutTabMenuState.selectedTool === toolType)
            loadoutTabMenuState.EquipTool();
        else
            loadoutTabMenuState.SelectTool(toolType);
        e.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full pt-2 pb-8">
    <SvelteCarousel bind:this={toolCarousel} initialPageIndex={loadoutTabMenuState.activeToolPageType}  on:pageChange={ (event: { detail: number; }) => { 
            if (event.detail !== null)  // event is called before mount (which sets the current_tool_page_index to null)
                loadoutTabMenuState.activeToolPageType = event.detail;                  
        }}>

        <!-- Left Carousel Arrow -->
        <div slot="prev" class="arrow-container hidden md:block arrow-container"  draggable="false" onclick={(e) => { HandleArrowClick(e, true); }}>
            <img src="assets/menu/silksong_arrow.png" alt="arrow" class="rotate-180 arrows" draggable="false"/>
        </div>

        <!-- Red Tools -->
        <div class="page">
            <img src="assets/menu/red_tools_heading.png" class="red tool header" alt="header" draggable="false"/>

            <div class="tools-container" style={`pointer-events: ${crestMenuState.activeSlot?.type === SlotType.Attack ? "auto" : "none"};`}>
            {#each redToolInfo as info (info.toolType)}
                <div class="max-w-20 max-h-22 m-2 my-1 items-center" onclick={ (e) => { HandleToolClick(e, info.toolType )}}>
                    <div class="origin-top-left scale-60">
                        <SlotUI 
                            slotType={SlotType.Attack} 
                            toolType={info.toolType} 
                            slotDirection={info.direction}
                            isSelected={loadoutTabMenuState.selectedTool === info.toolType} 
                            isGlow={data.HasTool(info.toolType)} 
                            isVenom={data.HasTool(ToolType.PollipPouch)}
                            isDisabled={loadoutTabMenuState.IsToolDisabled(info.toolType)}
                            />
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/menu/blue_tools_heading.png" class="blue tool header" alt="header" draggable="false"/>

            <!-- <div class="tools-container" style={`pointer-events: ${toolTabMenuState.activeToolPageType === SlotType.Defense ? "all" : "none"};`}> -->
            <div class="tools-container" style={`pointer-events: ${crestMenuState.activeSlot?.type === SlotType.Defense ? "auto" : "none"};`}>
            {#each TOOLS_BLUE as toolType (toolType)}
                <div class="w-20 h-22 m-2 my-1" onclick={ (e) => { HandleToolClick(e, toolType )}}>
                    <div class="origin-top-left scale-60">
                        <SlotUI 
                            slotType={SlotType.Defense} 
                            toolType={toolType} 
                            isSelected={loadoutTabMenuState.selectedTool === toolType} 
                            isGlow={data.HasTool(toolType)} 
                            isVenom={data.HasTool(ToolType.PollipPouch)}
                            isDisabled={loadoutTabMenuState.IsToolDisabled(toolType)}
                            />
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/menu/yellow_tools_heading.png" class="yellow tool header" alt="header" draggable="false"/>

            <div class="tools-container" style={`pointer-events: ${crestMenuState.activeSlot?.type === SlotType.Explore ? "auto" : "none"};`}>
            {#each TOOLS_YELLOW as toolType (toolType)}
                <div class="w-20 h-22 m-2 my-1" onclick={ (e) => { HandleToolClick(e, toolType )}}>
                    <div class="origin-top-left scale-60">
                        <SlotUI 
                            slotType={SlotType.Explore} 
                            toolType={toolType} 
                            isSelected={loadoutTabMenuState.selectedTool === toolType} 
                            isGlow={data.HasTool(toolType)} 
                            isVenom={data.HasTool(ToolType.PollipPouch)}
                            isDisabled={loadoutTabMenuState.IsToolDisabled(toolType)}
                            />
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <!-- Left Carousel Arrow -->
        <div slot="next" class="arrow-container hidden md:block arrow-container"  draggable="false" onclick={(e) => { HandleArrowClick(e, false); }}>
            <img src="assets/menu/silksong_arrow.png" alt="arrow" class="arrows" draggable="false"/>
        </div>

    </SvelteCarousel>
</div>

<style>
    .page {
        place-items: center;
        flex-shrink: 0;
        width: 100%;
    }

    .header {
        width: 18rem;
        padding-top: 2rem;
    }

    .arrows {
        width: 3rem;
        height: 3rem;
    }

    img {
        user-select: none;
    }

    .arrow-container {
        place-content: center;
    }

    .tools-container {
        display: flex; 
        flex-wrap: wrap; 
        width: 95%; 
        place-content: center;
    }
</style>