<script lang="ts">
    import type { UserInfo } from "$lib/types/UserInfo";
    import ToolSlot from "../crest/ToolSlot.svelte";

    // @ts-expect-error The package is a JavaScript-only dependency.
    import SvelteCarousel from 'svelte-carousel';

    import { TOOLS_RED } from "$lib/objects/ToolsRed";
    import { TOOLS_BLUE } from "$lib/objects/ToolsBlue";
    import { TOOLS_YELLOW } from "$lib/objects/ToolsYellow";
    import { SlotType } from "$lib/types/SlotType";
    import { ToolType } from "$lib/types/ToolType";
    import { SlotDirection } from "$lib/types/SlotDirection";

    let carousel : SvelteCarousel;
    let { user_info = $bindable() }: { user_info: UserInfo } = $props();
    let selected_tool = $state(-1);

    let id = $derived(user_info.selected_slot_id);
    let index = $derived(user_info.selected_slot_index);
    let active_slot = $derived(id < 0 ? user_info.active_vesticrest_info.slots[index] : (0 < id ? user_info.active_crest_info.slots[index] : null));

    // modified data needed to change the appearance of the tool tab item to show the direction in which the tool is equipped on the crest board
    let red_tools_info: { tool: ToolType; direction: SlotDirection }[] = $state(TOOLS_RED.map(tool => ({ tool: tool, direction: SlotDirection.CENTER })));

    function SetToolSlot(tool: ToolType) {
        if (id === 0) return;   // ignore if there is no selected crest slot

        // ignore if tool is already equipped
        if (user_info.current_tool_loadout.has(tool)) return;

        // remove old tool from set
        let old_tool: ToolType | undefined = user_info.active_crest_info.slots[index].tool;
        if (old_tool && user_info.current_tool_loadout.has(old_tool)) {
            user_info.current_tool_loadout.delete(old_tool);

            // will break if you reorder the ToolType enum, changes the appearance of the tool tab item to show the direction in which the tool is equipped on the crest board
            if (active_slot?.type === SlotType.RED) { red_tools_info[old_tool - 23].direction = SlotDirection.CENTER }
        }
        
        // equip tool to current loadout
        selected_tool = tool;   // select tool
        if (0 < id)
            user_info.active_crest_info.slots[index].tool = tool;
        else if (id < 0)
            user_info.active_vesticrest_info.slots[index].tool = tool;

        user_info.current_tool_loadout.add(tool);

        // will break if you reorder the ToolType enum, revert the appearance of the tool tab item that show the direction in which the tool is equipped on the crest board
        if (active_slot?.type === SlotType.RED) { red_tools_info[tool - 23].direction = active_slot.direction || SlotDirection.UP  }
    };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="flex flex-col w-full pt-2 pb-8" onclick={ () => selected_tool = -1 } >
    <SvelteCarousel bind:this={carousel} let:goToPrev let:showNextPage initialPageIndex={user_info.current_loadout_page_type} on:pageChange={ (event: { detail: number; }) => { 
                if (event.detail !== null)  // event is called before mount (which sets the current_tool_page_index to null)
                    user_info.current_loadout_page_type = event.detail;                  
            } }>

        <div slot="prev" onclick={ (e) => {
                carousel.goToPrev();
                selected_tool = -1;
                e.stopPropagation();
        }} class="arrow-container hidden md:block"  draggable="false">
            <img src="assets/MENU/silksong_arrow.png" alt="arrow" class="rotate-180 arrows" draggable="false"/>
        </div>

        <div class="page">
            <img src="assets/MENU/red_tools_heading.png" class="header" alt="header" draggable="false"/>
            <div class={`tools ${active_slot?.type === SlotType.RED ? "" : "pointer-events-none"}`}>
            {#each red_tools_info as tool_info}
                <div class="w-20 h-22 m-2 my-1" onclick={ () => SetToolSlot(tool_info.tool) }>
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.RED} slot_direction={tool_info.direction} tool={tool_info.tool} is_selected={selected_tool === tool_info.tool} is_glow={user_info.current_tool_loadout.has(tool_info.tool)} is_venom={user_info.current_tool_loadout.has(ToolType.BLUE_POLLIP_POUCH)}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/MENU/blue_tools_heading.png" class="header" alt="header" draggable="false"/>
            <div class={`tools ${active_slot?.type === SlotType.BLUE ? "" : "pointer-events-none"}`}>
            {#each TOOLS_BLUE as tool}
                <div class="w-20 h-22 m-2 my-1" onclick={ () => SetToolSlot(tool) }>
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.BLUE} tool={tool} is_selected={selected_tool === tool} is_glow={user_info.current_tool_loadout.has(tool)}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/MENU/yellow_tool_heading.png" class="header" alt="header" draggable="false"/>
            <div class={`tools ${active_slot?.type === SlotType.YELLOW ? "" : "pointer-events-none"}`}>
            {#each TOOLS_YELLOW as tool}
                <div class="w-20 h-22 m-2 my-1" onclick={ () => SetToolSlot(tool) }>
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.YELLOW} tool={tool} is_selected={selected_tool === tool} is_glow={user_info.current_tool_loadout.has(tool)}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div slot="next" onclick={ (e) => {
            carousel.goToNext();
            selected_tool = -1;
            e.stopPropagation();
        }} class="arrow-container hidden md:block">
            <img src="assets/MENU/silksong_arrow.png" alt="arrow" class="arrows" draggable="false"/>
        </div>
    </SvelteCarousel>
</div>

<!--  -->

<style>
    .page {
        place-items: center;
        flex-shrink: 0;
        width: 100%;
    }

    .tools {
        display: flex; 
        flex-wrap: wrap; 
        width: 95%; 
        place-content: center;
    }

    .header {
        width: 18rem;
        padding-top: 2rem;
        user-select: none;
    }

    .arrows {
        user-select: none;
        width: 3rem;
        height: 3rem;
    }

    .arrow-container {
        place-content: center;
    }
</style>







