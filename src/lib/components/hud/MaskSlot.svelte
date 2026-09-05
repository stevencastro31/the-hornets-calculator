<script lang="ts">
    import { MaskType } from "$lib/types/MaskType";

    let { type = MaskType.MASK, is_barbed = false, is_venom = false, index = 0 }: { type?: MaskType, is_barbed?: boolean, is_venom?: boolean, index?: number } = $props();
</script>

<!-- 8:11 ratio  32:44 -->
<div class="h-24 w-14 flex items-center justify-center relative">
    {#if type == MaskType.MASK}
        {#if is_barbed}
            {#if index % 2 === 0}
                <img src="assets/HUD/mask_barbed1.png" alt="mask" class="barbed-slot1"/>
            {:else}
                <img src="assets/HUD/mask_barbed2.png" alt="mask" class="barbed-slot2"/>
            {/if}
        {:else}
            <img src="assets/HUD/mask2.png" alt="mask" class="mask-slot"/>
        {/if}
    {:else}
        {#if is_venom}
            <img src="assets/HUD/mask_plasmium_venom.png" alt="mask" class="plasmium-slot"/>
        {:else}
            <img src="assets/HUD/mask_plasmium.png" alt="mask" class="plasmium-slot"/>
        {/if}
    {/if}
</div>

<style>
    .mask-slot {
        height: 50px;
        width: 34px;
    }

    .barbed-slot1 {
        height: 80px;
        width: 54px;
        margin-top: 8px;
    }

    .barbed-slot2 {
        height: 80px;
        width: 54px;
        margin-top: 6px;
    }

    .plasmium-slot {
        height: 58px;
        width: 44px;
    }
</style>