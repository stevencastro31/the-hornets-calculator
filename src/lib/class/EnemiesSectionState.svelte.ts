import { EnemyType } from "$lib/enums/EnemyType";
import { ENEMY_DATA } from "$lib/objects/EnemyData";
import type { EnemyInfo } from "$lib/types/EnemyInfo";
import type { UserLoadout } from "./UserLoadout.svelte";
import { SortByType } from "$lib/enums/SortByType";
import SortToggleButton from "$lib/components/enemies/SortToggleButton.svelte";

export class EnemiesSectionState {
    loadout: UserLoadout;

    query: string = $state("");
    enemyInfo: EnemyInfo[] = $derived(this.FilterAndSortEnemies());
    resultCount: number = $derived(this.enemyInfo.length);
    
    filterBoss: boolean = $state(false);
    filterMiniBoss: boolean = $state(false);
    filterMemory: boolean = $state(false);
    
    blackThreadHealth: boolean = $state(false);
    private healthIndex: number = $derived(this.blackThreadHealth ? 1 : 0);
    sortMode: SortByType = $state(SortByType.NameDesc);

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

        switch (this.sortMode) {
            case SortByType.NameAsc: return searchPool.sort((b, a) => a.name.localeCompare(b.name));
            case SortByType.HealthAsc: return searchPool.sort((b, a) => a.hitpoints[this.healthIndex] - b.hitpoints[this.healthIndex]);
            case SortByType.HealthDesc: return searchPool.sort((a, b) => a.hitpoints[this.healthIndex] - b.hitpoints[this.healthIndex]);
            default: return searchPool.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
}