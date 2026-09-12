<script lang="ts">
    import type { EnemyInfo } from "$lib/types/EnemyInfo";
    let { info }: { info: EnemyInfo } = $props(); 
</script>

<div>
    <p>{info.name}</p>
    <p>{info.art}</p>
</div>
