<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 bg-black justify-center p-28 rounded-4xl relative">
    <img src="assets/CREST/Crest_Hunter4.png" alt="crest" class="w-full h-full object-contain"/>

    <!-- Silk Skill -->
    <div class="absolute top-103.5 left-66">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute size-20 top-61 left-66">
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