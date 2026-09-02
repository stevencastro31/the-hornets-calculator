<script lang="ts">
    import type { UserInfo } from "$lib/types/UserInfo";

    let { user_info = $bindable() } : { user_info: UserInfo } = $props();
</script>

<div>
    Needles
</div>