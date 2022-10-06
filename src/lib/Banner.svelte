<div
	class="overflow-hidden col-span-3 p-4 bg-burgundy rounded-lg h-0 xl:h-fit invisible xl:visible"
>
	<h2 class="text-center font-display text-4xl text-white">Recent Updates</h2>
	<div class="w-3/4 mx-auto flex items-center">
		<div class="flex w-full h-2 rounded-lg bg-white mb-4" />
	</div>
	<!-- svelte-ignore a11y-missing-attribute -->
	<iframe
		class="md:h-screen mr-2 w-full"
		src="https://www.juicer.io/api/feeds/west_mi_youngfarmers/iframe"
		frameborder="0"
		style="display:block;margin:0 auto;"
	/>

	<!-- {#if album}
		<img src={getImgUrl(album.art, 'medium')} alt="" />
		<div class="text-center font-display text-3xl text-amber-400">
			<p>{album.title}</p>
			<p>{album.artist}</p>
		</div>
	{:else}
		<span>Loading...</span>
	{/if} -->
</div>

<style>
	div {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	div::-webkit-scrollbar {
		display: none;
	}
</style>
