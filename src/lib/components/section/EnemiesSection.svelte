<script lang="ts">
    import CheckBox from "../common/CheckBox.svelte";
    import SectionHeader from "../common/SectionHeader.svelte";

    let asd = $state(false);

</script>

<SectionHeader title="Enemies"/>
<hr>

<div class="flex flex-wrap items-center h-fit w-full gap-2 py-4"> 
    <CheckBox bind:checked={asd} text="Boss"/>
    <CheckBox bind:checked={asd} text="Dream"/>
    <CheckBox bind:checked={asd} text="Mini Boss"/>
</div>

<input type="text" class="text-black">

<style>
    hr {
        filter: brightness(0.5)
    }
</style>