<script lang="ts">    
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";
    import { LoadoutTabMenuState } from "$lib/class/LoadoutTabMenuState.svelte";
    import { CrestMenuState } from "$lib/class/CrestMenuState.svelte";
    import { SlotType } from "$lib/enums/SlotType";
    import SlotUI from "../crest/SlotUI.svelte";
    import type { SkillType } from "$lib/enums/SkillType";

    let { data } : { data: UserLoadout } = $props();

    let loadoutTabMenuState: LoadoutTabMenuState = $derived(data.loadoutTabMenuState);
    let crestMenuState: CrestMenuState = $derived(data.crestMenuState);
    let skillInfo = $derived(loadoutTabMenuState.skillInfo);

    function HandleSkillClick(e: any, skillType: SkillType) {
        if (loadoutTabMenuState.selectedSkill === skillType)
            loadoutTabMenuState.EquipSkill();
        else
            loadoutTabMenuState.SelectSkill(skillType);
        e.stopPropagation();
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full">
    <div class="page md:px-8">
        <img src="assets/menu/silk_skill_heading.png" class="header" alt="header" draggable="false"/>

        <div class="tools-container" style={`pointer-events: ${crestMenuState.activeSlot?.type === SlotType.Skill ? "auto" : "none"};`}>
        {#each skillInfo as info}
            <div class="w-20 h-22 m-3 my-2" onclick={ (e) => { HandleSkillClick(e, info.skillType )}}>
                <div class="origin-top-left scale-60">
                    <SlotUI 
                        slotType={SlotType.Skill} 
                        slotDirection={info.direction} 
                        skillType={info.skillType} 
                        isSelected={loadoutTabMenuState.selectedSkill === info.skillType} 
                        isGlow={data.HasSkill(info.skillType)}
                        />
                </div>
            </div>
        {/each}
        </div>
    </div>
</div>

<style>
    .page {
        place-items: center;
        flex-shrink: 0;
        width: 100%;
    }

    .tools-container {
        display: flex; 
        flex-wrap: wrap; 
        width: 95%; 
        place-content: center;
    }

    .header {
        width: 18rem;
        padding-top: 3rem;
        user-select: none;
    }

    img {
        user-select: none;
    }
</style>