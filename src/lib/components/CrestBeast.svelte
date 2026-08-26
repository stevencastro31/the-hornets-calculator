<script>
    import { SlotType } from "$lib/types/SlotType";
    import ToolSlot from "./ToolSlot.svelte";
</script>

<div class="w-164 h-180 min-w-164 min-h-180 bg-black justify-center p-24 rounded-4xl relative">
    <img src="assets/CREST/Crest_Beast.png" alt="crest" class="w-full h-full object-contain"/>

    <!-- Silk Skill -->
    <div class="absolute size-20 top-73 left-66">
        <ToolSlot slot_type={SlotType.WHITE_CENTER}/>
    </div>

    <!-- Red Tools -->
    <div class="absolute size-20 top-34 left-66">
        <ToolSlot slot_type={SlotType.RED_UP}/>
    </div>

    <div class="absolute top-111 left-66">
        <ToolSlot slot_type={SlotType.RED_DOWN}/>
    </div>

    <!-- Yellow Tools -->
    <div class="absolute top-53 left-30">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
    <div class="absolute top-53 right-30">
        <ToolSlot slot_type={SlotType.YELLOW}/>
    </div>
</div>