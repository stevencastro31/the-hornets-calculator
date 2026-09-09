<script lang="ts">
    import { MaskType } from "$lib/enums/MaskType";

    let { type = MaskType.Mask, isBarbed = false, isVenom = false, index = 0 }: { type?: MaskType, isBarbed?: boolean, isVenom?: boolean, index?: number } = $props();
</script>

<!-- 8:11 ratio  32:44 -->
<div class="h-24 w-14 flex items-center justify-center relative">
    {#if type == MaskType.Mask}
        {#if isBarbed}
            {#if index % 2 === 0}
                <img src="assets/hud/mask_barbed1.png" alt="mask" class="barbed-slot1"/>
            {:else}
                <img src="assets/hud/mask_barbed2.png" alt="mask" class="barbed-slot2"/>
            {/if}
        {:else}
            <img src="assets/hud/mask2.png" alt="mask" class="mask-slot"/>
        {/if}
    {:else if type == MaskType.Fractured}
        <img src="assets/hud/mask_fractured.png" alt="mask" class="fractured-slot"/>
    {:else}
        {#if isVenom}
            <img src="assets/hud/mask_plasmium_venom.png" alt="mask" class="plasmium-slot"/>
        {:else}
            <img src="assets/hud/mask_plasmium.png" alt="mask" class="plasmium-slot"/>
        {/if}
    {/if}
</div>

<style>
    .mask-slot {
        height: 50px;
        width: 34px;
        user-select: none;
    }

    .barbed-slot1 {
        height: 80px;
        width: 54px;
        margin-top: 8px;
        user-select: none;
    }

    .barbed-slot2 {
        height: 80px;
        width: 54px;
        margin-top: 6px;
        user-select: none;
    }

    .plasmium-slot {
        height: 58px;
        width: 44px;
        user-select: none;
    }

    .fractured-slot {
        height: 58px;
        width: 48px;
        user-select: none;
    }
</style>