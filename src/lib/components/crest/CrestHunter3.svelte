<script>
    import ToolSlot from "./ToolSlot.svelte";
    import { SlotType } from "$lib/types/SlotType";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 justify-center p-24 relative">
    <img src="assets/CREST/Crest_Hunter3.png" alt="crest" class="w-full h-full object-contain select-none"/>

    <!-- Silk Skill -->
    <div class="absolute top-103 left-66">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute size-20 top-60.5 left-66">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>

    <div class="absolute top-144 left-66">
        <ToolSlot slot_type={SlotType.RED_DOWN}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-127 left-33">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-100 left-6">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-127 right-33">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
        <div class="absolute top-100 right-6">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>