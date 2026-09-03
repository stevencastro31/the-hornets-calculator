<script lang="ts">
    import { CrestType } from "$lib/types/CrestType";
    import SectionHeader from "../common/SectionHeader.svelte";
    import CrestHUD from "../hud/CrestHUD.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";
    import { ToolType } from "$lib/types/ToolType";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();
    let valid_crest_types = [CrestType.Architect, CrestType.Beast, CrestType.Cursed, CrestType.Hunter2, CrestType.Hunter3, CrestType.Hunter4, CrestType.Reaper, CrestType.Shaman, CrestType.Wanderer, CrestType.Witch];

</script>

<SectionHeader title="Statistics"/>
<hr>


{#each valid_crest_types as crest}
   <CrestHUD bind:user_info={user_info}/>
{/each}



<p class="text-3xl p-1">Pale Steel Needle</p>
<SectionHeader title="Spells"/>



