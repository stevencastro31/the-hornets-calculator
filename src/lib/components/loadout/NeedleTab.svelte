<script lang="ts">
    // import { NeedleType } from "$lib/types/NeedleType";
    // import type { UserInfo } from "$lib/types/UserInfo";
    // import NeedleSlot from "../crest/NeedleSlot.svelte";

    // let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    // let needle_info = [NeedleType.NEEDLE, NeedleType.SHARPENED, NeedleType.SHINING, NeedleType.HIVESTEEL, NeedleType.PALE_STEEL];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<!-- <div class="w-full">
    <div class="page md:px-8 px-10">
        <img src="assets/MENU/needle_heading.png" class="header" alt="header" draggable="false"/>
        <div class="flex flex-wrap flex-row place-content-center">
        {#each needle_info as type} 
            <div class="px-8 mb-4" onclick={ () => { user_info.current_needle = type; } }>
                <NeedleSlot needle_type={type} is_selected={user_info.current_needle === type}/>
            </div>
        {/each}
        </div>
    </div>
</div> -->


<style>
    .page {
        place-items: center;
        flex-shrink: 0;
        width: 100%;
    }

    .header {
        width: 20rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
        user-select: none;
    }
</style>