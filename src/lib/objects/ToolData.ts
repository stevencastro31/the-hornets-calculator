import { ToolType } from "$lib/enums/ToolType"
import type { ToolInfo } from "$lib/types/ItemInfo"

export const TOOL_DATA: Record<ToolType, ToolInfo> = {
    [ToolType.DruidsEye]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.DruidsEyes]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.MagmaBell]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.WardingBell]: {
        damage: [9, 14, 20, 25, 31],
        hits: 1,
        name: "Warding Bell"
    },
    [ToolType.PollipPouch]: {
        damage: [1, 2, 2, 3, 3],
        hits: 3,
        name: "Pollip Pouch"
    },
    [ToolType.FractuedMask]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.Multibinder]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.Weavelight]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.SawtoothCirclet]: {
        damage: [9, 14, 19, 23, 28],
        hits: 2,
        name: "Sawtooth Circlet"
    },
    [ToolType.InjectorBand]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.SpoolExtender]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ReserveBind]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ClawMirror]: {
        damage: [21, 28, 34, 41, 47],
        hits: 3,
        name: "Claw Mirror"
    },
    [ToolType.ClawMirrors]: {
        damage: [31, 40, 49, 58, 67],
        hits: 3,
        name: "Claw Mirrors"
    },
    [ToolType.MemoryCrystal]: {
        damage: [10, 16, 22, 28, 34],
        hits: 1,
        name: "Memory Crystal"
    },
    [ToolType.SnitchPick]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.VoltFilament]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.QuickSling]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.WreathOfPurity]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.Longclaw]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.WispfireLantern]: {
        damage: [5, 8, 11, 14, 17],
        hits: 1,
        name: "Wispfire Lantern"
    },
    [ToolType.EggOfFlealia]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.PinBadge]: {
        damage: [],
        hits: 0,
        name: ""
    },

    [ToolType.StraightPin]: {
        damage: [5,	8,	11,	14,	17],
        hits: 1,
        name: "Straight Pin"
    },
    [ToolType.ThreefoldPin]: {
        damage: [7, 11, 16, 19, 25],
        hits: 3,
        name: "Threefold Pin"
    },
    [ToolType.StringShard]: {
        damage: [10, 15, 20, 30, 35],
        hits: 1,
        name: "Sting Shard"
    },
    [ToolType.Tacks]: {
        damage: [16, 24, 32, 48, 56],
        hits: 8,
        name: "Tacks"
    },
    [ToolType.Longpin]: {
        damage: [5, 8, 11, 14, 17],
        hits: 1,
        name: "Longpin"
    },
    [ToolType.Curveclaw]: {
        damage: [3,	5, 7, 8, 10],
        hits: 1,
        name: "Curveclaw"
    },
    [ToolType.Curvesickle]: {
        damage: [5, 8, 11, 14, 17],
        hits: 1,
        name: "Curvesickle"
    },
    [ToolType.ThrowingRing]: {
        damage: [4, 6, 9, 11, 14],
        hits: 1,
        name: "Throwing Ring"
    },
    [ToolType.Pimpilo]: {
        damage: [15, 24, 33, 42, 51],
        hits: 1,
        name: "Pimpilo"
    },
    [ToolType.Conchcutter]: {
        damage: [12, 18, 24, 36, 42],
        hits: 6,
        name: "Conchcutter"
    },
    [ToolType.SilkshotOriginal]: {
        damage: [10, 16, 22, 28, 34],
        hits: 1,
        name: "Silkshot (Original)"
    },
    [ToolType.SilkshotTwelve]: {
        damage: [5, 8, 12, 14, 18],
        hits: 3,
        name: "Silkshot (Twelfth Architect)"
    },
    [ToolType.SilkshotForge]: {
        damage: [6, 10, 13, 17, 20],
        hits: 1,
        name: "Silkshot (Forge Daughter)"
    },
    [ToolType.DelversDrill]: {
        damage: [24, 36, 54, 66, 84],
        hits: 6,
        name: "Delver's Drill"
    },
    [ToolType.CogworkWheel]: {
        damage: [14, 21, 28, 42, 49],
        hits: 7,
        name: "Cogwork Wheel"
    },
    [ToolType.Cogfly]: {
        damage: [15, 25, 35, 40, 50],
        hits: 5,
        name: "Cogfly"
    },
    [ToolType.RosaryCannon]: {
        damage: [2, 2, 2, 2, 2],    // max damage (damage is random)
        hits: 1,
        name: "Rosary Cannon"
    },
    [ToolType.VoltVesselSpear]: {
        damage: [23, 38, 53, 63, 77],
        hits: 7,
        name: "Volt Vessel (Spear)"
    },
    [ToolType.VoltVesselBola]: {
        damage: [17, 25, 33, 37, 45],
        hits: 5,
        name: "Volt Vessel (Bola)"
    },
    [ToolType.Flintslate]: {
        damage: [3, 6, 9, 9, 12],
        hits: 3,
        name: "Flintslate"
    },
    [ToolType.SnareSetter]: {
        damage: [25, 40, 55, 70, 85],
        hits: 1,
        name: "Snare Setter"
    },
    [ToolType.FleaBrew]: {
        damage: [3, 3, 3, 3, 3],    // when empty
        hits: 1,
        name: "Flea Brew"
    },
    [ToolType.PlasmiumPhial]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.NeedlePhial]: {
        damage: [7, 11, 15, 20, 24],
        hits: 1,
        name: "Needle Phial"
    },

    [ToolType.Compass]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ShardPendant]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.MagneticBrooch]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.WeightedBelt]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.BarbedBracelet]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.DeadBugsPurse]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ShellSatchel]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.MagnetiteDice]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ScuttleBrace]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.AscendantsGrip]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.SpiderStrings]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.SilkspeedAnklets]: {
        damage: [],
        hits: 0,
        name: ""
    },
    [ToolType.ThiefsMark]: {
        damage: [],
        hits: 0,
        name: ""
    }
}