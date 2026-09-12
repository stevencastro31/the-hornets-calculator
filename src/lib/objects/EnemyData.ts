import data from "./enemy.json";
import { EnemyType } from "$lib/enums/EnemyType";
import type { EnemyInfo } from "$lib/types/EnemyInfo";

export const ENEMY_DATA: EnemyInfo[] = data.map((item) => {
    let type: EnemyType;
    if (item.type === "UNIT") type = EnemyType.Unit;
    else if (item.type === "BOSS") type = EnemyType.Boss;
    else type = EnemyType.MiniBoss;

    // special cases (small)
    let memories = ["Skarrsinger Karmelita", "Crust King Khann", "Nyleth"];
    if (memories.includes(item.name))
        type = EnemyType.Memory;

    if(item.hp[0] < 1)
        item.hp[0] = item.hp[1];

    const modifiers = Array.isArray(item.modifiers) ? item.modifiers.map((modifier) => Number(modifier)) : [];
    return {
        id: item.id,
        name: item.name,
        modifiers,
        hitpoints: item.hp,
        art: item.art ?? "",    // there is one unit with art asset
        icon: item.icon,
        type: type,
    };
});
    
    
    
    