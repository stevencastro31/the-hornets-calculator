<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import { ToolType } from "$lib/types/ToolType";
    import type { UserInfo } from "$lib/types/UserInfo";

    // MISSING: FLEA SPOOL (COULD NOT FIND ART ASSET)

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    let is_extended = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_SPOOL_EXTENDER));
    let is_cursed = $derived(user_info.active_crest_info.type === CrestType.Cursed);
    let has_reserve_bind = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_RESERVE_BIND));
    let has_wreath = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_WREATH_OF_PURITY));
    let silk_bar_count = $derived(is_extended ? 21 : 18 );
</script>

<div class="flex">
    <div class="relative flex flex-row">
    {#if is_cursed}
        <img src="assets/HUD/spool_cursed.png" alt="spool" class="spool-cursed"/>
        {#each { length: 3 }, i}                    <!-- 3.75 intervals -->
            <img src="assets/HUD/silkbar crop.png" alt="spool" class="silk-bar" style={`left: ${(4.5 + (i * 3.75)) * 0.25}rem`}/>
        {/each}
    {:else}
        <img src="assets/HUD/spool_start.png" alt="spool" class="spool"/>
        {#if is_extended}
            <img src="assets/HUD/spool_end_extended.png" alt="spool" class="spool ml-63.25" style={`margin-left: ${74.25 * 0.25}rem`}/>
        {:else}
            <img src="assets/HUD/spool_end.png" alt="spool" class="spool ml-63.25" style={`margin-left: ${59.5 * 0.25}rem`}/>
        {/if}
        {#each { length: silk_bar_count }, i}       <!-- 3.75 intervals -->
            <img src="assets/HUD/silkbar crop.png" alt="spool" class="silk-bar" style={`left: ${(4 + (i * 3.75)) * 0.25}rem`}/>
        {/each}
    {/if}
    </div>

    {#if has_reserve_bind}
        <img src="assets/HUD/reserve_bind_hud.png" alt="spool" class="h-16 w-20 ml-2"/>
    {/if}
    {#if has_wreath}
        <img src="assets/HUD/wreath_hud.png" alt="spool" class="h-16 w-18 ml-2"/>
    {/if}
</div>

<style>
    .silk-bar {
        height: 64px;
        width: 16px;
        position: absolute;
        z-index: 10;
        user-select: none;
        pointer-events: none;
    }

    .spool {
        height: 48px;
        width: 32px;
        margin-top: 7px;
        margin-bottom: 9px;
        user-select: none;
        pointer-events: none;
    }

    .spool-cursed {
        margin-top: 0px;
        margin-bottom: 0px;
        height: 52px;
        margin-top: 4px;
        margin-bottom: 8px;
    }
</style>