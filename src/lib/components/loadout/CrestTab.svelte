<script lang="ts">
    import { CREST_DATA } from "$lib/objects/CrestData";
    import { CrestType } from "$lib/types/CrestType";
    import type { UserInfo } from "$lib/types/UserInfo";
    import CrestSlot from "../crest/CrestSlot.svelte";

    let { user_info = $bindable() } : { user_info : UserInfo } = $props();
    let valid_crest_types = [CrestType.Architect, CrestType.Beast, CrestType.Cursed, CrestType.Hunter2, CrestType.Hunter3, CrestType.Hunter4, CrestType.Shaman, CrestType.Wanderer, CrestType.Witch];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="py-12 flex flex-wrap flex-row place-content-center">
    {#each valid_crest_types as key}
        <div onclick={(e) => { 
                    user_info.active_crest_info = CREST_DATA[key];
                    user_info.selected_slot_id = 0;
                    user_info.selected_slot_index = -1;
                    e.stopPropagation() 
                }}>
            <CrestSlot crest_type={key} is_selected={user_info.active_crest_info.type === key}/>
        </div>
    {/each}
</div>