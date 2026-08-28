<script lang="ts">
    import { LoadoutTabType } from "$lib/types/LoadoutTabType";
    import SectionHeader from "../common/SectionHeader.svelte";
    import CrestBoard from "../loadout/CrestBoard.svelte";
    import ToolTab from "../loadout/ToolTab.svelte";
    import CrestTab from "../loadout/CrestTab.svelte";
    import SkillTab from "../loadout/SkillTab.svelte";
    import NeedleTab from "../loadout/NeedleTab.svelte";
    import LoadoutTabs from "../loadout/LoadoutTabs.svelte";

    let tab_items = [
        {label: "Tools", value: LoadoutTabType.TOOLS, component: ToolTab}, 
        {label: "Crests", value: LoadoutTabType.CRESTS, component: CrestTab}, 
        {label: "Skills", value: LoadoutTabType.SKILLS, component: SkillTab},
        {label: "Needles", value: LoadoutTabType.NEEDLES, component: NeedleTab},
    ];
</script>

<SectionHeader title="Loadout"/>
<hr>

<CrestBoard/>

<LoadoutTabs items={tab_items} activeTabValue={0}/>



