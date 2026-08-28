<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 justify-center p-26 relative">
    <img src="assets/CREST/Crest_Wanderer.png" alt="crest" class="w-full h-full object-contain select-none"/>

    <!-- Silk Skill -->
    <div class="absolute top-50 left-66">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute top-9 left-66">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-26 left-21">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-26 right-21">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-110 right-66">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
    <div class="absolute top-82 left-15.5">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
    <div class="absolute top-82 right-15.5">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>