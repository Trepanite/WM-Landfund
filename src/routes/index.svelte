<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/blog');
		const data = await res.json();
		return { props: { articles: data.data, meta: data.meta } };
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { getImgUrl } from '$lib/strapi';
	import { stop_propagation } from 'svelte/internal';
	export let articles;
</script>

<div class="flex flex-col items-stretch px-3">
	{#each articles as { id, attributes: article }}
		<div
			class=" hover:bg-opacity-30 hover:text-amber-400 mb-4 cursor-pointer flex border-4 border-amber-400 bg-rose-700 border-double p-3 drop-shadow-xl transition-all duration-300"
			on:click={() => goto(`/blog/${id}`)}
		>
			<img
				class="aspect-square object-cover max-h-96"
				src={getImgUrl(article.splash, 'medium')}
				alt={article.splash.data.attributes.alt}
			/>
			<div class="m-10 font-serif">
				<h4 class="font-display text-6xl ">{article.Title}</h4>
				<p class="text-xl">
					{new Date(article.publishedAt).toLocaleDateString()}
				</p>
				<p class="mt-2 text-xl">{article.blurb}</p>
			</div>
		</div>
	{/each}
</div>
