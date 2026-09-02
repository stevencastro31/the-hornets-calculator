<script lang="ts">
    import type { UserInfo } from "$lib/types/UserInfo";
    import ToolSlot from "../crest/ToolSlot.svelte";

    // @ts-expect-error The package is a JavaScript-only dependency.
    import SvelteCarousel from 'svelte-carousel';

    import { TOOLS_RED } from "$lib/objects/ToolsRed";
    import { TOOLS_BLUE } from "$lib/objects/ToolsBlue";
    import { TOOLS_YELLOW } from "$lib/objects/ToolsYellow";
    import { SlotType } from "$lib/types/SlotType";
    import type { ToolType } from "$lib/types/ToolType";

    let carousel : SvelteCarousel;
    let { user_info = $bindable() }: { user_info: UserInfo } = $props();

    function SetToolSlot(tool: ToolType) {
        
    }
</script>

<div class="flex flex-col w-full pt-2 pb-8">
    <SvelteCarousel bind:this={carousel} initialPageIndex={user_info.current_tool_page_index} on:pageChange={ (event: { detail: number; }) => { 
                if (event.detail !== null)  // event is called before mount (which sets the current_tool_page_index to null)
                    user_info.current_tool_page_index = event.detail;                  
            } }>
        <div class="page">
            <img src="assets/TOOLS/red_tools_heading.png" class="header" alt="header" draggable="false"/>
            <div class="tools">
            {#each TOOLS_RED as tool, i}
                <div class="w-20 h-22 m-2 my-1">
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.RED_CENTER} tool={tool}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/TOOLS/blue_tools_heading.png" class="header" alt="header" draggable="false"/>
            <div class="tools">
            {#each TOOLS_BLUE as tool, i}
                <div class="w-20 h-22 m-2 my-1">
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.BLUE} tool={tool}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>

        <div class="page">
            <img src="assets/TOOLS/yellow_tool_heading.png" class="header" alt="header" draggable="false"/>
            <div class="tools">
            {#each TOOLS_YELLOW as tool, i}
                <div class="w-20 h-22 m-2 my-1">
                    <div class="origin-top-left scale-60">
                        <ToolSlot slot_type={SlotType.YELLOW} tool={tool}/>
                    </div>
                </div>
            {/each}
            </div>
        </div>
    </SvelteCarousel>
</div>

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
        padding-top: 1rem;
    }
</style>







