<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import { ToolType } from "$lib/types/ToolType";
    import type { UserInfo } from "$lib/types/UserInfo";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();

    let is_extended = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_SPOOL_EXTENDER));
    let is_cursed = $derived(user_info.active_crest_info.type === CrestType.Cursed);

    let has_reserve_bind = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_RESERVE_BIND));
    let has_wreath = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_WREATH_OF_PURITY));
    let has_flea = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_EGG_OF_FLEALIA));
    
    let silk_bar_count = $derived(is_cursed ? 3 : (is_extended ? 21 : 18));
</script>
<!-- 3.75 intervals -->
<div class="flex flex-row">
    <div class="flex h-[64px]">
    <!--  Spool -->
    {#if is_cursed}
        <img src="assets/HUD/spool_cursed.png" alt="spool cursed" class="spool-cursed"/>
    {:else}
        {#if has_flea}
            <img src="assets/HUD/spool_start_flea.png" alt="spool cursed" class="spool-flea"/>
        {:else}
            <img src="assets/HUD/spool_start.png" alt="spool start" class="spool"/>
        {/if}

        {#if is_extended}
            <img src="assets/HUD/spool_end_extended.png" alt="spool start" class="spool-extender" style={`margin-left: ${(-5 + (3.75 * silk_bar_count)) * 0.25}rem`}/>
        {:else}
            <img src="assets/HUD/spool_end.png" alt="spool start" class="spool" style={`margin-left: ${(-7.75 + (3.75 * silk_bar_count)) * 0.25}rem`}/>
        {/if}
    {/if}
    
    <!-- Silk Bars -->
    {#each { length: silk_bar_count }, i}
        <img src="assets/HUD/silkbar crop.png" alt="silk" class="absolute select-none" draggable="false" style={`left: ${(8.75 + (3.75 * i)) * 0.25}rem`}/>
    {/each}
    </div>  

    {#if has_reserve_bind}
        <img src="assets/HUD/reserve_bind_hud.png" alt="spool" class="h-16 w-20 ml-2"/>
    {/if}
    {#if has_wreath}
        <img src="assets/HUD/wreath_hud.png" alt="spool" class="h-16 w-18 ml-2"/>
    {/if}
</div>

<style>
    .spool {
        height: 44px;
        width: 32px;
        margin-top: 9px;
        margin-left: 19px;
        user-select: none;
    }

    .spool-cursed {
        height: 48px;
        margin-top: 8px;
        margin-left: 19px;
        user-select: none;
    }

    .spool-flea {
        height: 56px;
        margin-top: 5px;
        margin-right: 12px;
        user-select: none;

    }

    .spool-extender {
        height: 44px;
        margin-top: 10px;
        user-select: none;
    }
</style>