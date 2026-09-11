import { UserLoadout } from "./UserLoadout.svelte";
import type { SlotInfo } from "$lib/types/SlotInfo";

export class CrestMenuState {
    // Attributes
    loadout: UserLoadout;
    selectedSlotID = $state(0);
    selectedSlotIndex = $state(-1);

    activeSlot: SlotInfo | undefined = $derived.by(() => {
        if (this.selectedSlotID > 0) return this.loadout.crestInfo.slots[this.selectedSlotIndex];
        if (this.selectedSlotID < 0) return this.loadout.vesticrestInfo.slots[this.selectedSlotIndex];
        return;
    });

    // Constructors
    constructor(loadout: UserLoadout) { 
        this.loadout = loadout;
    }

    // Methods
    SelectSlot(id: number, index: number) {
        let previousID = this.selectedSlotID;
        this.selectedSlotID = id;
        this.selectedSlotIndex = index;
        if (previousID !== 0)               // avoid unecessary recalculation
            this.loadout.loadoutTabMenuState.UpdateToolSelection();
    }
};