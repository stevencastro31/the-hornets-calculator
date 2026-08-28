<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 justify-center p-18 relative">
    <img src="assets/CREST/Crest_Architect.png" alt="crest" class="w-full h-full object-contain select-none brightness-50"/>

    <!-- Red Tools -->
    <div class="absolute size-20 top-39 left-66">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>
    <div class="absolute size-20 top-76.5 left-66">
        <ToolSlot slot_type={SlotType.RED_CENTER}/>
    </div>
    <div class="absolute top-115 left-66">
        <ToolSlot slot_type={SlotType.RED_DOWN}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-24 left-32">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-55 left-12">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-24 right-32">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
        <div class="absolute top-55 right-12">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>