<script lang="ts">
    import { HUD_DATA } from "$lib/objects/HUDData";
    import { HUD_UIS } from "$lib/objects/HudUI";
    import { CrestType } from "$lib/enums/CrestType";
    import type { HUDInfo } from "$lib/types/HUDInfo";
    import { HUDState } from "$lib/types/HUDState";
    import MaskSlot from "./MaskSlot.svelte";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { ToolType } from "$lib/enums/ToolType";
    import { MaskType } from "$lib/enums/MaskType";
    import SpoolHUD from "./SpoolHUD.svelte";

    let { loadout }: { loadout: UserLoadout} = $props();
    let crestType: CrestType = $derived(loadout.crest);
    let isActive = $derived(loadout.crestIsActive);

    let { crestHUDInfo, crestHUDPath }: { crestHUDInfo: HUDInfo | undefined, crestHUDPath: string } = $derived.by(() => {
        let info: HUDInfo | undefined;
        let path: string = HUD_UIS[crestType];

        if (isActive) info = HUD_DATA[crestType][HUDState.ACTIVE];
        if (info === undefined)
            info = HUD_DATA[crestType][HUDState.INACTIVE];
        else
            path = path.slice(0, 11) + "active/" + path.slice(11);
        return { crestHUDInfo: info, crestHUDPath: path };
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="relative w-156 h-52">
    <!-- Crest HUD -->
     <div class="absolute h-fit w-fit left-0 top-0">
        <div class="relative w-120 h-38">
            <div class="dev outer-circle flex items-center justify-center" onclick={() => { loadout.ToggleCrest(); }} ><div class="inner-circle"></div></div>
            <div class="dev line"></div>

            <img src={crestHUDPath} alt="crest HUD" class="absolute" style={`top: ${(crestHUDInfo!.top + 4) * 0.25}rem; left: ${((crestHUDInfo!.left + 12) * 0.25) - 2}rem; scale: ${crestHUDInfo!.scale}%;`}/>
        </div>
     </div>

    <!-- Masks -->
    <div class="absolute flex flex-row left-40 top-12">
        {#if loadout.HasTool(ToolType.FractuedMask)}
            <MaskSlot type={MaskType.Fractured}/>
        {/if}
        {#each { length: loadout.HasTool(ToolType.FractuedMask) ? 6 : 7 }, i}
            <MaskSlot isBarbed={loadout.HasTool(ToolType.BarbedBracelet)} index={i}/>
        {/each}
        {#if loadout.HasTool(ToolType.PlasmiumPhial)}
            <MaskSlot type={MaskType.Plasmium} isVenom={loadout.HasTool(ToolType.PollipPouch)}/>
        {/if}
    </div>

    <!-- Spool HUD -->
    <div class="absolute left-6 top-36 scale-80">
        <SpoolHUD loadout={loadout}/>
    </div>
</div>



<style>
    .dev {
        opacity: 0;
    }

    .outer-circle {
        border-radius: 50%;
        border: 2px dotted green;
        height: 4rem;
        left: 5rem;
        position: absolute;
        top: 4rem;
        visibility: visible;
        width: 4rem;
        z-index: 10;
    }

    .inner-circle {
        border-radius: 50%;
        border: 2px dotted red;
        height: 1.5rem;
        left: 20rem;
        top: 0;
        width: 1.5rem;
        z-index: 10;
    }

    .line {
        border: 0.5px dotted black;
        left: 0rem;
        top: 6rem;
        width: 100%;
        z-index: 15;
    }

    img {
        user-select: none;
    }
</style>


