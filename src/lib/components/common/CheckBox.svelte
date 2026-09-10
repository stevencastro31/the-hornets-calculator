<script lang="ts">
    let { checked = $bindable(), text }: { checked: boolean, text: string } = $props();
</script>

<label class="flex items-center align-middle px-2 py-1 rounded-2xl border-2 transition-[border-color] duration-100 border-white/50 hover:border-white has-checked:border-white">
    <input type="checkbox" class="m-2 select-none focus:ring-0 focus:ring-offset-0" bind:checked={checked}/>
    <p class="text-xl pr-2 select-none" class:font-semibold={checked}>{text}</p>
</label>