<script lang="ts" context="module">
	import * as strapi from '$lib/strapi';
	export async function load({ fetch, params }) {
		const res = await strapi.get(`articles/${params.id}`);
		if (res.status === 404) {
			// We can create a custom error and return it.
			// SvelteKit will automatically show us an error page that we'll learn to customise later on.
			const error = new Error(`The post with ID ${params.id} was not found`);
			return { status: 404, error };
		} else {
			const data = await res.json();
			return { props: { article: data.data } };
		}
	}
</script>

<script lang="ts">
	import { marked } from 'marked';
	import { getImgUrl } from '$lib/strapi';
	export let article;
	let {
		id,
		attributes: { Title, publishedAt, content, splash }
	} = article;
	content = marked(content);
</script>

<div class=" mx-4 flex flex-col relative items-center solid-bg min-h-fit overflow-hidden">
	<img class="absolute w-full" src={getImgUrl(splash, 'largest')} alt="" />
	<div
		class="[margin-top:35vh] prose prose-xl font-serif text-black prose-stone z-50 mx-auto p-6 mt- max-w-screen-lg bg-paper mb-6"
	>
		<h1 class="text-center font-display text-8xl">{Title}</h1>
		<p class="text-right">{new Date(publishedAt).toLocaleDateString()}</p>
		<div
			class=" first-line:uppercase first-line:tracking-widest
	first-letter:text-7xl
	first-letter:mr-3 first-letter:float-left"
		>
			{@html content}
		</div>
	</div>
	<button class="solid-bg m-4 p-1 font-display text-xl text-amber-400 z-50"
		>Comments section here</button
	>
</div>
