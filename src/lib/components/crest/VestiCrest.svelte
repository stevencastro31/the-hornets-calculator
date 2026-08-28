<script>
    import ToolSlot from "./ToolSlot.svelte";
    import { SlotType } from "$lib/types/SlotType";
</script>

<div class="w-100 h-180 min-w-80 min-h-180 justify-center pt-16 pl-32 relative">
    <img src="assets/CREST/VestiCrest3.png" alt="vesticrest" class="w-full h-full object-contain select-none brightness-50"/>

    <!-- Blue Tools -->
    <div class="absolute top-65 left-50">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-106 left-50">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>