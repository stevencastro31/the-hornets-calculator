<script>
    import ToolSlot from "./ToolSlot.svelte";
    import { SlotType } from "$lib/types/SlotType";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 justify-center p-32 relative">
    <img src="assets/CREST/Crest_Hunter2.png" alt="crest" class="w-full h-full object-contain select-none"/>

    <!-- Silk Skill -->
    <div class="absolute top-95.5 left-66">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute top-53 left-66">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>

    <div class="absolute top-137 left-66">
        <ToolSlot slot_type={SlotType.RED_DOWN}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-120 left-32">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-92 left-6">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-120 right-32">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
        <div class="absolute top-92 right-6">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>