<script lang="ts">
    import { HUD_UIS } from "$lib/objects/HudUI";
    import { HUD_DATA } from "$lib/objects/HUDData";
    import { HUDState } from "$lib/types/HUDState";
    import MaskSlot from "./MaskSlot.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";
    import { ToolType } from "$lib/types/ToolType";
    import { MaskType } from "$lib/types/MaskType";
    import type { HUDInfo } from "$lib/types/HUDInfo";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    let type = $derived(user_info.active_crest_info.type);

    let has_venom = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_POLLIP_POUCH));
    let has_barbed = $derived(user_info.current_tool_loadout.has(ToolType.YELLOW_BARBED_BRACELET));
    let has_plasmium = $derived(user_info.current_tool_loadout.has(ToolType.RED_PLASMIUM_PHIAL));

    let { hud_info, hud_path }: { hud_info: any; hud_path: string } = $derived.by(() => {
        let info: any;
        let path: string = "assets/HUD/";

        if (user_info.crest_passive_is_active)
            info = HUD_DATA[type][HUDState.ACTIVE];
        if (info === undefined)
            info = HUD_DATA[type][HUDState.INACTIVE];
        else
            path += "ACTIVE/";
        path += HUD_UIS[type];

        return { hud_info: info, hud_path: path };
    });
</script>

{#if hud_info !== undefined}
    <div class="relative md:pl-8">
        <div class="container relative">
            <!-- align ment dev thing -->
            <div class="dot absolute flex items-center justify-center"><div class="dot2"></div></div>

            <!-- HUD -->
            <div class="absolute left-4.5 top-8.25 scale-70" style={`scale: ${hud_info.scale}%; top: ${hud_info.top * 0.25}rem; left: ${(hud_info.left * 0.25) - 2}rem;`}>
                <img src={hud_path} alt="HUD" class="object-contain">
            </div>

            <!-- <div class="absolute flex flex-row top-[48px] left-24.5">
                {#each { length: 5 }, i}
                    <MaskSlot is_barbed={has_barbed} index={i}/>
                {/each}
                {#if has_plasmium}
                    <MaskSlot type={MaskType.PLASMIUM} is_venom={has_venom}/>
                {/if}
            </div> -->
        </div>
    </div>
{/if}

<style>
    .container {
        min-width: 360;
        /* max-width: 360px; */
        min-height: 160px;
        max-height: 160px;
        /* background-color: gray; */
        margin-top: 0.5rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .dot {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        z-index: 10;
        border: 2px dotted green;
        left: 2rem;
        top: 3rem;
        position: absolute;
        visibility: visible;
    }

    .dot2 {
        height: 24px; /* 20 */
        width: 24px;
        border-radius: 50%;
        border: 2px dotted red;
        left: 20rem;
        top: 0;
        z-index: 12;
    }
</style>