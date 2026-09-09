<script lang="ts">
    import { CREST_UIS } from "$lib/objects/CrestUI";
    import type { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import SlotUI from "./SlotUI.svelte";
    import { ToolType } from "$lib/enums/ToolType";
    import { CrestType } from "$lib/enums/CrestType";

    let { data } : { data: UserLoadout } = $props();

    let crestData = $derived(data.crestInfo);
    let vesticrestData = $derived(data.vesticrestInfo);
    let crestUIPath = $derived(CREST_UIS[data.crest]);
    let vesticrestUIPath = "assets/crests/VestiCrest3.png";

    let crestMenuState = $derived(data.crestMenuState);

    function SelectCrestSlot(e: any, id: number, index: number) {
        crestMenuState.selectedSlotID = id;
        crestMenuState.selectedSlotIndex = index;
        e.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="flex w-fit h-fit px-12 py-12" onclick={(e) => { SelectCrestSlot(e, 0, -1); }} >
    <!-- Vesticrest -->
    <div class="relative w-76 h-152 aspect-[76/152]">

        {#if data.crest !== CrestType.Cursed}
            <img src={vesticrestUIPath} alt={crestData.name} class="crest" draggable="false" style={`padding: ${vesticrestData.padding * 0.25}rem;`}/>
            {#each vesticrestData.slots as slotInfo, index} 
                <div class="absolute" style={`left: ${slotInfo.x * 0.25}rem; top: ${slotInfo.y * 0.25}rem;`} onclick={(e) => { SelectCrestSlot(e, slotInfo.id, index); }}>
                    <SlotUI 
                        slotType={slotInfo.type} 
                        slotDirection={slotInfo.direction} 
                        isSelected={crestMenuState.selectedSlotID === slotInfo.id}
                        toolType={slotInfo.toolType}
                        skillType={slotInfo.skillType}
                        isVenom={data.HasTool(ToolType.PollipPouch)}
                        isGlow={slotInfo.type === data.loadoutTabMenuState.activeToolPageType}
                    />
                </div>
            {/each}
        {:else}
            <div class="h-full flex flex-col justify-center items-center">
                <img src="assets/menu/cursed_prompt.png" alt="cursed" class="w-full object-contain select-none" draggable="false"/>
                <p class="text-5xl py-8 text-center">Hornet is Cursed</p>
            </div>
        {/if}
    </div>

    <!-- Crest -->
    <div class="relative w-132 h-152 aspect-[132/152]">
        <img src={crestUIPath} alt={crestData.name} class="crest" draggable="false" style={`padding: ${crestData.padding * 0.25}rem;`}/>
        {#each crestData.slots as slotInfo, index} 
            <div class="absolute" style={`left: ${slotInfo.x * 0.25}rem; top: ${slotInfo.y * 0.25}rem;`} onclick={(e) => { SelectCrestSlot(e, slotInfo.id, index); }}>
                <SlotUI 
                    slotType={slotInfo.type} 
                    slotDirection={slotInfo.direction} 
                    isSelected={crestMenuState.selectedSlotID === slotInfo.id}
                    toolType={slotInfo.toolType}
                    skillType={slotInfo.skillType}
                    isVenom={data.HasTool(ToolType.PollipPouch)}
                    isGlow={slotInfo.type === data.loadoutTabMenuState.activeToolPageType}
                />
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

