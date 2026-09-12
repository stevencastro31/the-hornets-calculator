import type { EnemyType } from "$lib/enums/EnemyType";

export type EnemyInfo = {
    name: string,
    type: EnemyType,
    hitpoints: number[],
    modifiers: number[],
    icon: string,
    art: string,
};