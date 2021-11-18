<script context="module">
export const load = async ({fetch}) => {
	const res = await fetch("/api/home")
	const data = await res.json()
	console.log(data)

	return {
		props: {
			data
		}
	}
}
</script>

<script>
	import { onMount } from "svelte";

	export let data;

	onMount(()=> {
		console.log('aduhai')
	})
</script>

<svelte:head>
	<title>Welcome</title>
</svelte:head>

<h1 class="text-red-600">{data.x}</h1>
