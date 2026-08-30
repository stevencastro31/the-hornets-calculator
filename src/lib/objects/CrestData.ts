import type { CrestInfo } from "$lib/types/CrestInfo";
import { CrestType } from "$lib/types/CrestType";
import { SlotType } from "$lib/types/SlotType";

export const CREST_DATA: Record<CrestType, CrestInfo> = {
    [CrestType.Architect]: {
        name: "architect",
        type: CrestType.Architect,
        padding: 18,
        slots: [
            { type: SlotType.RED_UP, x: 66, y: 39 },
            { type: SlotType.RED_CENTER, x: 66, y: 76.5 },
            { type: SlotType.RED_DOWN, x: 66, y: 115 },
            { type: SlotType.BLUE, x: 12, y: 55 },
            { type: SlotType.BLUE, x: 32, y: 24 },
            { type: SlotType.YELLOW, x: 100, y: 24 },
            { type: SlotType.YELLOW, x: 120, y: 55 },
        ],
    },
    [CrestType.Beast]: {
        name: "beast",
        type: CrestType.Beast,
        padding: 24,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 66, y: 73 },
            { type: SlotType.RED_UP, x: 66, y: 34 },
            { type: SlotType.RED_DOWN, x: 66, y: 111 },
            { type: SlotType.YELLOW, x: 30, y: 53 },
            { type: SlotType.YELLOW, x: 102, y: 53 },
        ], 
    },
    [CrestType.Cursed]: {
        name: "cursed",
        type: CrestType.Cursed,
        padding: 16,
        slots: [], 
    },
    [CrestType.Hunter2]: {
        name: "hunter 2",
        type: CrestType.Hunter2,
        padding: 32,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 66, y: 95.5 },
            { type: SlotType.RED_UP, x: 66, y: 53 },
            { type: SlotType.RED_DOWN, x: 66, y: 137 },
            { type: SlotType.BLUE, x: 6, y: 92 },
            { type: SlotType.BLUE, x: 32, y: 120 },
            { type: SlotType.YELLOW, x: 100, y: 120 },
            { type: SlotType.YELLOW, x: 126, y: 92 },
        ], 
    },
    [CrestType.Hunter3]: {
        name: "hunter 3",
        type: CrestType.Hunter3,
        padding: 24,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 66, y: 103 },
            { type: SlotType.RED_UP, x: 66, y: 60.5 },
            { type: SlotType.RED_DOWN, x: 66, y: 144 },
            { type: SlotType.BLUE, x: 6, y: 100 },
            { type: SlotType.BLUE, x: 32, y: 127 },
            { type: SlotType.YELLOW, x: 100, y: 127 },
            { type: SlotType.YELLOW, x: 126, y: 100 },
        ], 
    },
    [CrestType.Hunter4]: {
        name: "hunter 4",
        type: CrestType.Hunter4,
        padding: 28,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 66, y: 103 },
            { type: SlotType.RED_UP, x: 66, y: 60.5 },
            { type: SlotType.RED_DOWN, x: 66, y: 144 },
            { type: SlotType.BLUE, x: 6, y: 100 },
            { type: SlotType.BLUE, x: 32, y: 127 },
            { type: SlotType.YELLOW, x: 100, y: 127 },
            { type: SlotType.YELLOW, x: 126, y: 100 },
        ], 
    },
    [CrestType.Shaman]: {
        name: "shaman",
        type: CrestType.Shaman,
        padding: 20,
        slots: [
            { type: SlotType.WHITE_UP, x: 64, y: 29 },
            { type: SlotType.WHITE_CENTER, x: 64, y: 67.5 },
            { type: SlotType.WHITE_DOWN, x: 64, y: 108 },
            { type: SlotType.BLUE, x: 24.5, y: 67.5 },
            { type: SlotType.BLUE, x: 132 - 27 , y: 67.5 },
        ], 
    },
    [CrestType.Wanderer]:{
        name: "wanderer",
        type: CrestType.Wanderer,
        padding: 26,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 66, y: 50 },
            { type: SlotType.RED_UP, x: 66, y: 9 },
            { type: SlotType.BLUE, x: 21, y: 26 },
            { type: SlotType.BLUE, x: 111, y: 26 },
            { type: SlotType.YELLOW, x: 15.5, y: 82 },
            { type: SlotType.YELLOW, x: 66, y: 111 },
            { type: SlotType.YELLOW, x: 116.5, y: 82 },
        ], 
    },
    [CrestType.Witch]: {
        name: "witch",
        type: CrestType.Witch,
        padding: 16,
        slots: [
            { type: SlotType.WHITE_CENTER, x: 70, y: 75 },
            { type: SlotType.RED_UP, x: 61, y:25 },
            { type: SlotType.RED_DOWN, x: 72, y: 122 },
            { type: SlotType.BLUE, x: 21, y: 92 },
            { type: SlotType.BLUE, x: 107, y: 52 },
            { type: SlotType.BLUE, x: 112, y: 93 },
        ], 
    },
    [CrestType.Vesti]: {
        name: "vesti",
        type: CrestType.Vesti,
        padding: 0,
        slots: [
            { type: SlotType.BLUE, x: 50, y: 65 },
            { type: SlotType.YELLOW, x: 50, y: 106 },
        ],
    },
};