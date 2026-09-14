<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Hornet's Calculator</title>
	<meta name="description" content="Calculate Hornet's damage in Hollow Knight: Silksong using different tools, skills, crests, and effects."/>
    <meta name="keywords" content="silksong calculator, hollow knight silksong, hornet damage calculator, silksong damage, hornet loadout, damage analysis"/>
</svelte:head>
{@render children()}