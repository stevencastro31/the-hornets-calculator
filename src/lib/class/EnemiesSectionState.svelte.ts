import { EnemyType } from "$lib/enums/EnemyType";
import { ENEMY_DATA } from "$lib/objects/EnemyData";
import type { EnemyInfo } from "$lib/types/EnemyInfo";
import type { UserLoadout } from "./UserLoadout.svelte";

export class EnemiesSectionState {
    loadout: UserLoadout;

    query: string = $state("");
    enemyInfo: EnemyInfo[] = $derived(this.FilterAndSortEnemies());
    resultCount: number = $derived(this.enemyInfo.length);
    
    filterBoss: boolean = $state(false);
    filterMiniBoss: boolean = $state(false);
    filterMemory: boolean = $state(false);
    
    blackThreadHealth: boolean = $state(false);
    sortByName: boolean = $state(true);
    sortBYHealth: boolean = $state(false);

    constructor(loadout: UserLoadout) { 
        this.loadout = loadout;
    }

    FilterAndSortEnemies() {
        // filter parameters
        let lowercaseQuery = this.query.toLowerCase();
        let bosses: EnemyInfo[] = [];
        let minibosses: EnemyInfo[] = [];
        let memories: EnemyInfo[] = [];

        if (this.filterBoss && !this.filterMemory)
            bosses = ENEMY_DATA.filter(info => info.type === EnemyType.Boss);
        if (this.filterMiniBoss)
            minibosses = ENEMY_DATA.filter(info => info.type === EnemyType.MiniBoss);
        if (this.filterMemory || this.filterBoss)
            memories = ENEMY_DATA.filter(info => info.type === EnemyType.Memory);

        let searchPool: EnemyInfo[] = [...bosses, ...minibosses, ...memories];
        if (searchPool.length < 1) 
            searchPool = ENEMY_DATA;

        if (this.blackThreadHealth)
            searchPool = searchPool.filter(info => info.hitpoints[1] > 0)
        searchPool = searchPool.filter(info => info.name.toLowerCase().includes(lowercaseQuery))

        // sort parameters
        return searchPool.sort((a, b) => a.name.localeCompare(b.name));
    }
}