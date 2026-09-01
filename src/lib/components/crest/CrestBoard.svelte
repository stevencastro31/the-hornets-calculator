<script lang="ts">
    import ToolSlot from "./ToolSlot.svelte";
    import { CREST_DATA } from "$lib/objects/CrestData";
    import { CREST_UIS } from "$lib/objects/CrestUI";
    import { CrestType } from "$lib/types/CrestType";
    import { ToolType } from "$lib/types/ToolType";
    import { SkillType } from "$lib/types/SkillType";

    // props
    let { type }: { type: CrestType} = $props();

    // states
    let crest_info = $state(CREST_DATA[type]);
    let vesticrest_info = $state(CREST_DATA[CrestType.Vesti]);
    let selected = $state(0);
    let slot_index = $state(-1);

    let selected_vesticrest_slot = $derived(vesticrest_info.slots[slot_index]);
    let selected_crest_slot = $derived(crest_info.slots[slot_index]);

    function SetTool() {
        if (0 < selected) {
            selected_crest_slot.tool = ToolType.BLUE_DRUIDS_EYE;
        } else {
            selected_vesticrest_slot.tool = ToolType.BLUE_DRUIDS_EYE;
        }
    }

    // #region resize logic
    let container: HTMLDivElement;
    let scale = $state(1);
    let ready = $state(false);
    const CREST_WIDTH = 1056;
    $effect(() => {
        const observer = new ResizeObserver(() => {
            const widthScale = container.clientWidth / CREST_WIDTH;
            scale = widthScale;
        });
        ready = true;   // to hide the scale adjustment
        observer.observe(container);
        return () => observer.disconnect();
    });
    // #endregion
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full px-0 2xl:px-20" onclick={() => { selected = 0; slot_index = -1 }}>
    <div bind:this={container} class="w-full flex flex-col flex-grow" style={`visibility: ${ready ? "visible" : "hidden"}`}>
        <div class="pb-12" style={`height: ${720 * scale}px;`}>
            <div class="w-[1056px] flex flex-row origin-top-left" style={`transform: scale(${scale});`}>

                <!-- Vesti Crest -->
                <div class="w-100 h-180 min-w-80 min-h-180 justify-center pt-16 pl-32 relative">
                    <img src="assets/CREST/VestiCrest3.png" alt={vesticrest_info.name} class="w-full h-full object-contain select-none brightness-50"/>

                    <!-- Tool & Skill Slot UIs -->
                    {#each vesticrest_info.slots as slot, i}
                        <div onclick={(e) => { selected = slot.id; slot_index = i; e.stopPropagation() }} class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                            <ToolSlot slot_type={slot.type} show_icon={slot.show_icon} show_slot={slot.show_slot} is_venom={slot.is_venom} is_selected={selected === slot.id} tool={slot.tool} skill={slot.skill}/>
                        </div>
                    {/each}
                </div>

                <!-- Crest -->
                <div class={`w-164 h-180 min-w-164 min-h-180 justify-center relative`} style={`padding: ${crest_info.padding * 0.25}rem`}>
                    <!-- Crest UI -->
                    <img src={`assets/CREST/${CREST_UIS[crest_info.type]}`} alt={crest_info.name} class="w-full h-full object-contain select-none brightness-50"/>

                    <!-- Tool & Skill Slot UIs -->
                    {#each crest_info.slots as slot, i}
                        <div onclick={(e) => { selected = slot.id; slot_index = i; e.stopPropagation() }} class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                            <ToolSlot slot_type={slot.type} show_icon={slot.show_icon} show_slot={slot.show_slot} is_venom={slot.is_venom} is_selected={selected === slot.id} tool={slot.tool} skill={slot.skill}/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>

<button class="hover:bg-red-900" onclick={SetTool}> Set Tool </button>




