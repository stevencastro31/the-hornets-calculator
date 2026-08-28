<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 justify-center p-20 relative">
    <img src="assets/CREST/Crest_Shaman.png" alt="crest" class="w-full h-full object-contain select-none"/>

    <!-- Silk Skill -->
    <div class="absolute top-29 left-64">
        <ToolSlot slot_type={SlotType.WHITE_UP}/>
    </div>
    <div class="absolute top-67.5 left-64">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>
    <div class="absolute top-108 left-64">
        <ToolSlot slot_type={SlotType.WHITE_DOWN}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-67.5 left-24.5">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-67.5 right-27">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
</div>