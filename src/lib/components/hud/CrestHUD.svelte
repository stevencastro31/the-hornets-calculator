<script lang="ts">
    // import { HUD_UIS } from "$lib/objects/HudUI";
    // import { HUD_DATA } from "$lib/objects/HUDData";
    // import { HUDState } from "$lib/types/HUDState";
    // import MaskSlot from "./MaskSlot.svelte";
    // import type { UserInfo } from "$lib/types/UserInfo";
    // import { ToolType } from "../../enums/ToolType";
    // import { MaskType } from "$lib/types/MaskType";
    // import SpoolHUD from "./SpoolHUD.svelte";
    // import { CrestType } from "$lib/types/CrestType";

    // let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    // let type = $derived(user_info.active_crest_info.type);

    // let has_venom = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_POLLIP_POUCH));
    // let has_barbed = $derived(user_info.current_tool_loadout.has(ToolType.YELLOW_BARBED_BRACELET));
    // let has_plasmium = $derived(user_info.current_tool_loadout.has(ToolType.RED_PLASMIUM_PHIAL));
    // let has_fractured = $derived(user_info.current_tool_loadout.has(ToolType.BLUE_FRACTUED_MASK));

    // let { hud_info, hud_path }: { hud_info: any; hud_path: string } = $derived.by(() => {
    //     let info: any;
    //     let path: string = "assets/HUD/";

    //     if (user_info.crest_passive_is_active)
    //         info = HUD_DATA[type][HUDState.ACTIVE];
    //     if (info === undefined)
    //         info = HUD_DATA[type][HUDState.INACTIVE];
    //     else
    //         path += "ACTIVE/";
    //     path += HUD_UIS[type];

    //     return { hud_info: info, hud_path: path };
    // });

    // // #region  resize logic
    // let container: HTMLDivElement;
    // let hud_scale = $state(1);
    // let ready = $state(false);
    // $effect(() => {
    //     const observer = new ResizeObserver(() => {
    //         hud_scale = Math.min(1, container?.clientWidth / 540 || 1);
    //     });
    //     ready = true;
    //     observer.observe(container);
    //     return () => observer.disconnect();
    // });
    // // #endregion
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<!-- <div class="w-full md:m-4" bind:this={container} style={`height: ${hud_scale * 200}px`}>
    <div class="origin-top-left" style={`transform: scale(${hud_scale}); visibilty: ${ready ? "visible" : "hidden"}`}>
        <div class="hud relative min-w-[540px] md:h-48 h-28">
            align ment dev thing -->
            <!-- <div class="outer-circle absolute flex items-center justify-center" onclick={() => {
                user_info.crest_passive_is_active = !user_info.crest_passive_is_active;
                console.log("check!");
            }}><div class="inner-circle"></div></div> -->

            <!-- HUD -->
            <!-- <div class="absolute" style={`top: ${hud_info.top * 0.25}rem; left: ${(hud_info.left * 0.25) - 2}rem; scale: ${hud_info.scale}%;`}>
                <img src={hud_path} alt="HUD" class="object-contain select-none">
            </div> -->

            <!-- Masks -->
            <!-- <div class="absolute flex flex-row top-[24px] left-26">
                {#if has_fractured}
                    <MaskSlot type={MaskType.FRACTURED}/>
                {/if}
                {#each { length: has_fractured ? 4 : 5 }, i}
                    <MaskSlot is_barbed={has_barbed} index={i}/>
                {/each}
                {#if has_plasmium}
                    <MaskSlot type={MaskType.PLASMIUM} is_venom={has_venom}/>
                {/if}
            </div> -->

            <!-- Spool  scale 80 -->
            <!-- <div class="absolute top-[140px] left-8 scale-80 origin-top-left">
                <SpoolHUD bind:user_info={user_info}/>
            </div>
        </div>
    </div>
</div> -->

<style>
    .hud {
        min-width: 540px;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .outer-circle {
        border-radius: 50%;
        border: 2px dotted green;
        height: 4rem;
        left: 2rem;
        position: absolute;
        top: 3rem;
        visibility: visible;
        width: 4rem;
        z-index: 10;
        opacity: 0;
    }

    .inner-circle {
        border-radius: 50%;
        border: 2px dotted red;
        height: 24px;
        left: 20rem;
        top: 0;
        width: 24px;
        z-index: 12;
    }
</style>