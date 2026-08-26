<script>
    import ToolSlot from "./ToolSlot.svelte";
    import { SlotType } from "$lib/types/SlotType";
</script>

<div class="w-100 h-180 min-w-80 min-h-180 bg-black justify-center p-16 rounded-4xl relative">
    <img src="assets/CREST/VestiCrest3.png" alt="vesticrest" class="w-full h-full object-contain"/>

    <!-- Blue Tools -->
    <div class="absolute top-57 left-34">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-98 right-34">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>