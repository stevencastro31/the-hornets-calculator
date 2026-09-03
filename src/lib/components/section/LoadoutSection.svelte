<script lang="ts">
    import { LoadoutTabType } from "$lib/types/LoadoutTabType";
    import SectionHeader from "../common/SectionHeader.svelte";
    import ToolTab from "../loadout/ToolTab.svelte";
    import CrestTab from "../loadout/CrestTab.svelte";
    import SkillTab from "../loadout/SkillTab.svelte";
    import NeedleTab from "../loadout/NeedleTab.svelte";
    import LoadoutTabs from "../loadout/LoadoutTabs.svelte";

    import CrestBoard from "../crest/CrestBoard.svelte";
    import type { UserInfo } from "$lib/types/UserInfo";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();

    let tab_items = [
        {label: "Tools", value: LoadoutTabType.TOOLS, component: ToolTab}, 
        {label: "Crests", value: LoadoutTabType.CRESTS, component: CrestTab}, 
        {label: "Skills", value: LoadoutTabType.SKILLS, component: SkillTab},
        {label: "Needles", value: LoadoutTabType.NEEDLES, component: NeedleTab},
    ];
</script>

<div>
    <SectionHeader title="Loadout"/>
    <hr>
    <CrestBoard bind:user_info={user_info}/>
    <LoadoutTabs items={tab_items} activeTabValue={1} bind:user_info={user_info}/>
</div> 



