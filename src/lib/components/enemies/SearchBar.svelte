<script lang="ts">
    let { query = $bindable() } : { query: string } = $props();
</script>

<div class="flex flex-col">
    <div class="w-full 2xl:max-w-100 h-12 flex items-center border-gray-500 rounded-xl border-2 transition-[border-color] delay-100 focus-within:border-white hover:border-white">
        <!-- Search Icon -->
        <svg width="32px" height="32px" class="ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>

        <!-- Search Bar -->
        <input bind:value={query} type="search" placeholder="Enemy" class="bg-transparent border-transparent px-1 w-full focus:ring-0 focus:ring-offset-0" spellcheck="false"/> 
    </div>
</div>

<style>
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }
</style>