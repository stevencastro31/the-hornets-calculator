<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import { CREST_UIS } from "$lib/objects/CrestUI";

    let { crest_type, is_selected = true } : { crest_type: CrestType, is_selected?: boolean } = $props();
</script>

<div class="h-36 w-32 m-2 relative">
    <img src={`assets/CREST/${CREST_UIS[crest_type]}`} alt="crest" class="h-full w-full object-contain brightness-80 select-none" draggable="false"/>

    {#if is_selected}
        <div class="absolute -top-4 -left-4 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="size-12 object-contain select-none" draggable="false"/>
        </div>

        <div class="absolute -bottom-4 -right-4 rotate-180 z-10">
            <img src={`assets/TOOLS/silksong_cursor.png`} alt="slot" class="size-12 object-contain select-none" draggable="false"/>
        </div>
    {/if}   
</div>



