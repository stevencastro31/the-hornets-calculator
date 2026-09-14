<script lang="ts">
    import type { SkillToolStatInfo } from "$lib/types/SkillToolStatInfo";
    import StatLabel from "./StatLabel.svelte";

    let { info }: { info: SkillToolStatInfo } = $props();
</script>

<div class="flex items-center">
    <img src={info.iconPath} alt="skill" draggable="false" class="size-18 p-2 object-contain select-none"/>
    <StatLabel label={info.name} text={`${info.damage}`} subtext={`DMG${info.subtext}`}/>
</div>

<style>
    img {
        object-fit: contain;
        user-select: none;
    }
</style>