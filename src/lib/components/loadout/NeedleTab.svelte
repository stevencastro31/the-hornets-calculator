<script lang="ts">
    import NeedleSlot from "../crest/NeedleSlot.svelte";
    import { NeedleType } from "$lib/enums/NeedleType";
    import { UserLoadout } from "$lib/class/UserLoadout.svelte";

    let { data } : { data: UserLoadout } = $props();
    let needles = [NeedleType.Needle, NeedleType.Sharpened, NeedleType.Shining, NeedleType.Hivesteel, NeedleType.PaleSteel];
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="w-full">
    <div class="page md:px-10 px-8">
        <img src="assets/menu/needle_heading.png" class="header" alt="header" draggable="false"/>
        <div class="flex flex-wrap flex-row place-content-center">
        {#each needles as needleType (needleType)} 
            <div class="px-4 xl:px-14 mb-4" onclick={ () => { data.SetNeedle(needleType); } }>
                <NeedleSlot needleType={needleType} isSelected={data.needle === needleType}/>
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

    .header {
        width: 20rem;
        padding-top: 3rem;
        padding-bottom: 2rem;
        user-select: none;
    }
</style>