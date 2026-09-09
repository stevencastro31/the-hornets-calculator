import type { CrestInfo } from "$lib/types/CrestInfo";
import { CrestType } from "../enums/CrestType";
import { SlotType } from "../enums/SlotType";
import { SlotDirection } from "$lib/types/SlotDirection";

// stores setting that determines how a crest is constructed visually
export const CREST_DATA: Record<CrestType, CrestInfo> = {
    [CrestType.Architect]: {
        name: "architect",
        type: CrestType.Architect,
        padding: 2,
        slots: [
            { id: 1, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 24.75 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Center, x: 50, y: 62.25 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 100.75 },
            { id: 4, type: SlotType.Defense, x: -4, y: 40.75 },
            { id: 5, type: SlotType.Defense, x: 16, y: 9.75 },
            { id: 6, type: SlotType.Explore, x: 84, y: 9.75 },
            { id: 7, type: SlotType.Explore, x: 104, y: 40.75 },
        ],
    },
    [CrestType.Beast]: {
        name: "beast",
        type: CrestType.Beast,
        padding: 8,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 58.75 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 19.75 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 96.75 },
            { id: 4, type: SlotType.Explore, x: 14, y: 38.75 },
            { id: 5, type: SlotType.Explore, x: 86, y: 38.75 },
        ], 
    },
    [CrestType.Cursed]: {
        name: "cursed",
        type: CrestType.Cursed,
        padding: 8,
        slots: [], 
    },
    [CrestType.Hunter2]: {
        name: "hunter 2",
        type: CrestType.Hunter2,
        padding: 16,
        slots: [
            { id: 1,type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 81.25 },
            { id: 2,type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 38.75 },
            { id: 3,type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 122.75 },
            { id: 4,type: SlotType.Defense, x: -10, y: 77.75 },
            { id: 5,type: SlotType.Defense, x: 16, y: 105.75 },
            { id: 6,type: SlotType.Explore, x: 84, y: 105.75 },
            { id: 7,type: SlotType.Explore, x: 110, y: 77.75 },
        ], 
    },
    [CrestType.Hunter3]: {
        name: "hunter 3",
        type: CrestType.Hunter3,
        padding: 8,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 88.75 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 46.25 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 129.75 },
            { id: 4, type: SlotType.Defense, x: -10, y: 85.75 },
            { id: 5, type: SlotType.Defense, x: 16, y: 112.75 },
            { id: 6, type: SlotType.Explore, x: 84, y: 112.75 },
            { id: 7, type: SlotType.Explore, x: 110, y: 85.75 },
        ], 
    },
    [CrestType.Hunter4]: {
        name: "hunter 4",
        type: CrestType.Hunter4,
        padding: 12,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 88.75 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 46.25 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 129.75 },
            { id: 4, type: SlotType.Defense, x: -10, y: 85.75 },
            { id: 5, type: SlotType.Defense, x: 16, y: 112.75 },
            { id: 6, type: SlotType.Explore, x: 84, y: 112.75 },
            { id: 7, type: SlotType.Explore, x: 110, y: 85.75 },
        ], 
    },
    [CrestType.Reaper]: {
        name: "reaper",
        type: CrestType.Reaper,
        padding: 0,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 57.25 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: 11.75 },
            { id: 3, type: SlotType.Attack, direction: SlotDirection.Down, x: 50, y: 103.75 },
            { id: 4, type: SlotType.Defense, x: 5.5, y: 35.25 },
            { id: 5, type: SlotType.Defense, x: 5.5, y: 80.75 },
            { id: 6, type: SlotType.Explore, x: 94.5 , y: 35.25 },
            { id: 7, type: SlotType.Explore, x: 94.5 , y: 80.75 },
        ],
    },
    [CrestType.Shaman]: {
        name: "shaman",
        type: CrestType.Shaman,
        padding: 4,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Up, x: 48, y: 14.75 },
            { id: 2, type: SlotType.Skill, direction: SlotDirection.Center, x: 48, y: 53.25 },
            { id: 3, type: SlotType.Skill, direction: SlotDirection.Down, x: 48, y: 93.75 },
            { id: 4, type: SlotType.Defense, x: 8.5, y: 53.5 },
            { id: 5, type: SlotType.Defense, x: 89 , y: 53.5 },
        ],
    },
    [CrestType.Wanderer]:{
        name: "wanderer",
        type: CrestType.Wanderer,
        padding: 10,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 50, y: 35.75 },
            { id: 2, type: SlotType.Attack, direction: SlotDirection.Up, x: 50, y: -5.25 },
            { id: 3, type: SlotType.Defense, x: 5, y: 11.75 },
            { id: 4, type: SlotType.Defense, x: 95, y: 11.75 },
            { id: 5, type: SlotType.Explore, x: -0.5, y: 67.75 },
            { id: 6, type: SlotType.Explore, x: 50, y: 96.75 },
            { id: 7, type: SlotType.Explore, x: 100.5, y: 67.75 },
        ], 
    },
    [CrestType.Witch]: {
        name: "witch",
        type: CrestType.Witch,
        padding: 0,
        slots: [
            { id: 1, type: SlotType.Skill, direction: SlotDirection.Center, x: 55, y: 60.5 },
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