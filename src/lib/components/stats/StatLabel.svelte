<script lang="ts">
    let { label, text, subtext } : { label: string, text: string, subtext?: string } = $props();
</script>

<div class="p-1 sm:p-2">
    <h2 class="text-base sm:text-lg">{label}</h2>
    <div class="flex items-end">
        <p class="text-2xl sm:text-4xl font-medium">{text}</p>
        <p class="text-sm sm:text-base font-bold text-gray-400 px-1 sm:px-2">{subtext}</p>
    </div>
</div>