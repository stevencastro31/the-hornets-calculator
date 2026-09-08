import type { CrestInfo } from "$lib/types/CrestInfo";
import { CrestType } from "../enums/CrestType";
import { SlotType } from "../enums/SlotType";
import { SlotDirection } from "$lib/types/SlotDirection";

// 132 or 33rem (crest width)

export const CREST_DATA: Record<CrestType, CrestInfo> = {
    [CrestType.Architect]: {
        name: "architect",
        type: CrestType.Architect,
        padding: 18,
        slots: [
            { id: 1, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 39 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Center, x: 66, y: 76.5 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 115 },
            { id: 4, type: SlotType.Defense, x: 12, y: 55 },
            { id: 5, type: SlotType.Defense, x: 32, y: 24 },
            { id: 6, type: SlotType.Explore, x: 100, y: 24 },
            { id: 7, type: SlotType.Explore, x: 120, y: 55 },
        ],
    },
    [CrestType.Beast]: {
        name: "beast",
        type: CrestType.Beast,
        padding: 24,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 73 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 34 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 111 },
            { id: 4, type: SlotType.Explore, x: 30, y: 53 },
            { id: 5, type: SlotType.Explore, x: 102, y: 53 },
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
            { id: 1,type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 95.5 },
            { id: 2,type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 53 },
            { id: 3,type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 137 },
            { id: 4,type: SlotType.Defense, x: 6, y: 92 },
            { id: 5,type: SlotType.Defense, x: 32, y: 120 },
            { id: 6,type: SlotType.Explore, x: 100, y: 120 },
            { id: 7,type: SlotType.Explore, x: 126, y: 92 },
        ], 
    },
    [CrestType.Hunter3]: {
        name: "hunter 3",
        type: CrestType.Hunter3,
        padding: 24,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 103 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 60.5 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 144 },
            { id: 4, type: SlotType.Defense, x: 6, y: 100 },
            { id: 5, type: SlotType.Defense, x: 32, y: 127 },
            { id: 6, type: SlotType.Explore, x: 100, y: 127 },
            { id: 7, type: SlotType.Explore, x: 126, y: 100 },
        ], 
    },
    [CrestType.Hunter4]: {
        name: "hunter 4",
        type: CrestType.Hunter4,
        padding: 28,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 103 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 60.5 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 144 },
            { id: 4, type: SlotType.Defense, x: 6, y: 100 },
            { id: 5, type: SlotType.Defense, x: 32, y: 127 },
            { id: 6, type: SlotType.Explore, x: 100, y: 127 },
            { id: 7, type: SlotType.Explore, x: 126, y: 100 },
        ], 
    },
    [CrestType.Reaper]: {
        name: "reaper",
        type: CrestType.Reaper,
        padding: 16,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 71.5 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 26 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 66, y: 118 },
            { id: 4, type: SlotType.Defense, x: 21.5, y: 49.5 },
            { id: 5, type: SlotType.Defense, x: 21.5, y: 95 },
            { id: 6, type: SlotType.Explore, x: 110.5 , y: 49.5 },
            { id: 7, type: SlotType.Explore, x: 110.5 , y: 95 },
        ],
    },
    [CrestType.Shaman]: {
        name: "shaman",
        type: CrestType.Shaman,
        padding: 20,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Up, x: 64, y: 29 },
            { id: 2, type: SlotType.Skill, direction: SlotDirection.Center, x: 64, y: 67.5 },
            { id: 3, type: SlotType.Skill, direction: SlotDirection.Down, x: 64, y: 108 },
            { id: 4, type: SlotType.Defense, x: 24.5, y: 67.5 },
            { id: 5, type: SlotType.Defense, x: 105 , y: 67.5 },
        ],
    },
    [CrestType.Wanderer]:{
        name: "wanderer",
        type: CrestType.Wanderer,
        padding: 26,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 66, y: 50 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 66, y: 9 },
            { id: 3, type: SlotType.Defense, x: 21, y: 26 },
            { id: 4, type: SlotType.Defense, x: 111, y: 26 },
            { id: 5, type: SlotType.Explore, x: 15.5, y: 82 },
            { id: 6, type: SlotType.Explore, x: 66, y: 111 },
            { id: 7, type: SlotType.Explore, x: 116.5, y: 82 },
        ], 
    },
    [CrestType.Witch]: {
        name: "witch",
        type: CrestType.Witch,
        padding: 0,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 55.5, y: 61.5 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 45, y: 10.75 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 56, y: 107.75 },
            { id: 4, type: SlotType.Defense, x: 5, y: 77.75 },
            { id: 5, type: SlotType.Defense, x: 91, y: 37.75 },
            { id: 6, type: SlotType.Defense, x: 96, y: 79.5 },
        ], 
    },
    [CrestType.Vesti]: {
        name: "vesti",
        type: CrestType.Vesti,
        padding: 5.5,
        slots: [
            { id: -1, type: SlotType.Defense, x: 22, y: 44 },
            { id: -2, type: SlotType.Explore, x: 22, y: 82.5 },
        ],
    },
};