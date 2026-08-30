<script lang="ts">
    import ToolSlot from "./ToolSlot.svelte";
    import { CREST_DATA } from "$lib/objects/CrestData";
    import { CREST_UIS } from "$lib/objects/CrestUI";
    import { CrestType } from "$lib/types/CrestType";
    import { ToolType } from "$lib/types/ToolType";
    import { SkillType } from "$lib/types/SkillType";

    let { type }: { type: CrestType} = $props();
    let crest_info = $derived(CREST_DATA[type]);
    let vesticrest_info = $derived(CREST_DATA[CrestType.Vesti]);


    // crest_info.slots[0].skill = SkillType.PALE_NAILS;
    // crest_info.slots[2].tool = ToolType.BLUE_EGG_OF_FLEALIA;

    // vesticrest_info.slots[0].is_selected = true;
    vesticrest_info.slots[0].tool = ToolType.BLUE_CLAW_MIRROR;
    vesticrest_info.slots[1].tool = ToolType.YELLOW_DEAD_BUGS_PURSE;
    vesticrest_info.slots[1].is_selected = true;


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

<div class="w-full px-0 2xl:px-20">
    <div bind:this={container} class="w-full flex flex-col flex-grow" style={`visibility: ${ready ? "visible" : "hidden"}`}>
        <div class="pb-12" style={`height: ${720 * scale}px;`}>
            <div class="w-[1056px] flex flex-row origin-top-left" style={`transform: scale(${scale});`}>

                <!-- Vesti Crest -->
                <div class="w-100 h-180 min-w-80 min-h-180 justify-center pt-16 pl-32 relative">
                    <img src="assets/CREST/VestiCrest3.png" alt={vesticrest_info.name} class="w-full h-full object-contain select-none brightness-50"/>

                    <!-- Tool & Skill Slot UIs -->
                    {#each vesticrest_info.slots as slot}
                        <div class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                            <ToolSlot slot_type={slot.type} show_icon={slot.show_icon} show_slot={slot.show_slot} is_venom={slot.is_venom} is_selected={slot.is_selected} tool={slot.tool} skill={slot.skill}/>
                        </div>
                    {/each}
                </div>

                <!-- Crest -->
                <div class={`w-164 h-180 min-w-164 min-h-180 p-${crest_info.padding} justify-center relative`}>
                    <!-- Crest UI -->
                    <img src={`assets/CREST/${CREST_UIS[crest_info.type]}`} alt={crest_info.name} class="w-full h-full object-contain select-none brightness-50"/>

                    <!-- Tool & Skill Slot UIs -->
                    {#each crest_info.slots as slot}
                        <div class="absolute" style={`left: ${slot.x * 0.25}rem; top: ${slot.y * 0.25}rem;`}>
                            <ToolSlot slot_type={slot.type} show_icon={slot.show_icon} show_slot={slot.show_slot} is_venom={slot.is_venom} is_selected={slot.is_selected} tool={slot.tool} skill={slot.skill}/>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>




