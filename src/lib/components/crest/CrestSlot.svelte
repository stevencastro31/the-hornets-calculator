<script lang="ts">
    import { CrestType } from "$lib/enums/CrestType";
    import { CREST_UIS } from "$lib/objects/CrestUI";

    let { crestType, isSelected = false } : { crestType: CrestType, isSelected?: boolean } = $props();
</script>

<div class="h-36 w-32 m-2 relative">
    <img src={CREST_UIS[crestType]} alt="crest" class="h-full w-full brightness-80" draggable="false"/>

    {#if isSelected}
        <div class="absolute -top-4 -left-4 z-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="size-12" draggable="false"/>
        </div>

        <div class="absolute -bottom-4 -right-4 rotate-180 z-10">
            <img src="assets/menu/silksong_cursor.png" alt="slot" class="size-12" draggable="false"/>
        </div>
    {/if}   
</div>

<style>
    img {
        user-select: none;
        object-fit: contain;
    }
</style>



