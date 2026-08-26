<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 bg-black justify-center p-16 rounded-4xl relative">
    <img src="assets/CREST/Crest_Witch.png" alt="crest" class="w-full h-full object-contain"/>

    <!-- Silk Skill -->
    <div class="absolute top-75 left-71">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute top-25 left-61">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>
    <div class="absolute top-122 left-72">
        <ToolSlot slot_type={SlotType.RED_DOWN}/>
    </div>

    <!-- Blue Tools -->
    <div class="absolute top-52 right-25">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-93 right-20">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
    <div class="absolute top-92 left-21">
        <ToolSlot slot_type={SlotType.BLUE}/>
    </div>
</div>