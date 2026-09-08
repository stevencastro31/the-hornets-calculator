<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<script lang="ts">
    import { CrestType } from "$lib/enums/CrestType";
    import { CREST_DATA } from "$lib/objects/CrestData";   
    import { CREST_UIS } from "$lib/objects/CrestUI";

    import SlotUI from "./SlotUI.svelte";

    let crestData = $derived(CREST_DATA[CrestType.Witch]);
    let vesticrestData = $derived(CREST_DATA[CrestType.Vesti]);
</script>

<div class="flex w-fit h-fit px-12 pb-12">
    <div class="relative w-76 h-152 aspect-[76/152]">
        <img src={`assets/crests/VestiCrest3.png`} alt={crestData.name} class="crest" draggable="false" style={`padding: ${vesticrestData.padding * 0.25}rem;`}/>
        {#each vesticrestData.slots as slot} 
            <div class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                <SlotUI slotType={slot.type} slotDirection={slot.direction}/>
            </div>
        {/each}
    </div>

    <!-- 16p 16x 14.25y -->
    <div class="relative w-132 h-152 aspect-[132/152]">
        <img src={`assets/crests/${CREST_UIS[crestData.type]}`} alt={crestData.name} class="crest" draggable="false" style={`padding: ${crestData.padding * 0.25}rem;`}/>
        {#each crestData.slots as slot} 
            <div class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                <SlotUI slotType={slot.type} slotDirection={slot.direction}/>
            </div>
        {/each}
    </div>
</div>

<style>
    img {
        user-select: none;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    .crest {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0.5);
    }
</style>

