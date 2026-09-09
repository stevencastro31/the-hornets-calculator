<script lang="ts">
    import { ToolType } from "$lib/enums/ToolType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { CrestType } from "$lib/enums/CrestType";

    let { loadout }: { loadout: UserLoadout} = $props();
    let silkBarCount = $derived(loadout.crest === CrestType.Cursed ? 3 : (loadout.HasTool(ToolType.SpoolExtender) ? 21 : 18));
</script>

<div class="flex flex-row w-144">
    <div class="relative flex h-[64px]">
        {#if loadout.crest === CrestType.Cursed }
            <img src="assets/hud/spool_cursed.png" alt="spool cursed" class="spool-cursed"/>
        {:else}
            {#if loadout.HasTool(ToolType.EggOfFlealia)}
                <img src="assets/hud/spool_start_flea.png" alt="spool cursed" class="spool-flea"/>
            {:else}
                <img src="assets/hud/spool_start.png" alt="spool start" class="spool"/>
            {/if}

            {#if loadout.HasTool(ToolType.SpoolExtender)}
                <img src="assets/hud/spool_end_extended.png" alt="spool start" class="spool-extender" style={`margin-left: ${(-5 + (3.75 * silkBarCount)) * 0.25}rem`}/>
            {:else}
                <img src="assets/hud/spool_end.png" alt="spool start" class="spool" style={`margin-left: ${(-7.75 + (3.75 * silkBarCount)) * 0.25}rem`}/>
            {/if}
        {/if}
        
        {#each { length: silkBarCount }, i}
            <img src="assets/hud/silkbar crop.png" alt="silk" class="absolute" draggable="false" style={`left: ${(8.75 + (3.75 * i)) * 0.25}rem`}/>
        {/each}
    </div>  

    {#if loadout.HasTool(ToolType.ReserveBind)}
        <img src="assets/hud/reserve_bind_hud.png" alt="spool" class="h-16 w-20 ml-2"/>
    {/if}
    {#if loadout.HasTool(ToolType.WreathOfPurity)}
        <img src="assets/hud/wreath_hud.png" alt="spool" class="h-16 w-18 ml-2"/>
    {/if}
</div>

<!-- 3.75 intervals -->

<style>
    .spool {
        height: 44px;
        width: 32px;
        margin-top: 9px;
        margin-left: 19px;
    }

    .spool-cursed {
        height: 48px;
        margin-top: 8px;
        margin-left: 19px;
    }

    .spool-flea {
        height: 56px;
        margin-top: 5px;
        margin-right: 12px;

    }

    .spool-extender {
        height: 44px;
        margin-top: 10px;
    }

    img {
        user-select: none;
    }
</style>