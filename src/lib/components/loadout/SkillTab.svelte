<script lang="ts">
    import type { UserInfo } from "$lib/types/UserInfo";
    import { SlotType } from "$lib/types/SlotType";
    import { SlotDirection } from "$lib/types/SlotDirection";
    import { SkillType } from "$lib/types/SkillType";
    import ToolSlot from "../crest/ToolSlot.svelte";
    import { onDestroy, onMount } from "svelte";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    let selected_skill = $state(-1);

    let id = $derived(user_info.selected_slot_id);
    let index = $derived(user_info.selected_slot_index);
    let active_slot = $derived(user_info.active_crest_info.slots[index]);

    const SKILLS = [SkillType.SILK_SPEAR, SkillType.THREAD_STORM, SkillType.CROSS_STITCH, SkillType.SHARP_DART, SkillType.RUNE_RAGE, SkillType.PALE_NAILS];
    let skill_info: { skill: SkillType; direction: SlotDirection }[] = $state(SKILLS.map(skill => ({ skill: skill, direction: SlotDirection.CENTER  })));

    let previous_loadout_page_type: SlotType;
    onMount(() => { 
        previous_loadout_page_type = user_info.current_loadout_page_type; 
        user_info.current_loadout_page_type = SlotType.WHITE; 
    });
    onDestroy(() => { user_info.current_loadout_page_type = previous_loadout_page_type; })

    function SetSkillSlot(skill: SkillType) {
        if (id === 0) return;   // ignore if there is no selected crest slot

        // ignore if skill is already equipped
        if (user_info.current_skill_loadout.has(skill)) return;

        // remove old tool from set
        let old_skill: SkillType | undefined = user_info.active_crest_info.slots[index].skill;
        if (old_skill && user_info.current_skill_loadout.has(old_skill)) {
            user_info.current_skill_loadout.delete(old_skill);

            // will break if you reorder the ToolType enum, changes the appearance of the tool tab item to show the direction in which the tool is equipped on the crest board
            if (active_slot?.type === SlotType.WHITE) { skill_info[old_skill].direction = SlotDirection.CENTER }
        }
        
        // equip tool to current loadout
        selected_skill = skill;   // select tool
        user_info.active_crest_info.slots[index].skill = skill;

        user_info.current_skill_loadout.add(skill);

        // will break if you reorder the ToolType enum, revert the appearance of the tool tab item that show the direction in which the tool is equipped on the crest board
        if (active_slot?.type === SlotType.WHITE) { skill_info[skill].direction = active_slot.direction || SlotDirection.UP  }
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full" onclick={ () => selected_skill = -1}>
    <div class="page md:px-8">
        <img src="assets/MENU/silk_skill_heading.png" class="header" alt="header" draggable="false"/>
        <div class={`tools ${active_slot?.type === SlotType.WHITE ? "" : "pointer-events-none"}`}>
        {#each skill_info as skill_info}
            <div class="w-20 h-22 m-3 my-2" onclick={ () => SetSkillSlot(skill_info.skill) }>
                <div class="origin-top-left scale-60">
                    <ToolSlot slot_type={SlotType.WHITE} slot_direction={skill_info.direction} skill={skill_info.skill} is_selected={selected_skill === skill_info.skill} is_glow={user_info.current_skill_loadout.has(skill_info.skill)}/>
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

    .tools {
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

    .arrows {
        user-select: none;
        width: 3rem;
        height: 3rem;
    }

    .arrow-container {
        place-content: center;
    }
</style>