<script>
	import Nav from '$lib/Nav.svelte';
</script>

<div class="h-full min-h-screen bg-green-200">
	<Nav />
  <slot />
</div>

<style windi:preflights:global windi:safelist:global>
</style>

<!-- <style>
	.containers {
		height: 100vh;
		background-color: lavender;
	}
</style> -->
