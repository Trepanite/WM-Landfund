<script>
	import { getImgUrl } from '$lib/strapi';
	import { onMount } from 'svelte';
	export let album;
	onMount(async () => {
		const response = await fetch('/album');
		const data = await response.json();
		album = data.data[0].attributes;
	});
</script>

<div
	class="col-span-2 p-4 bg-gradient-to-b from-rose-700 to-transparent via-transparent h-screen border-4 border-double border-amber-400"
>
	<h2 class="text-center font-display text-4xl text-amber-400">Album of the Week</h2>
	<div class="w-3/4 mx-auto flex items-center">
		<div class="flex w-full h-px bg-amber-400 mb-4" />
	</div>
	{#if album}
		<img src={getImgUrl(album.art, 'medium')} alt="" />
		<div class="text-center font-display text-3xl text-amber-400">
			<p>{album.title}</p>
			<p>{album.artist}</p>
		</div>
	{:else}
		<span>Loading...</span>
	{/if}
</div>
