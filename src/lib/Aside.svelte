<script>
	export let open = false;
	import { page } from '$app/stores';
	export const navButtons = ['Donate', 'Get Involved', 'Apply', 'Media', 'Contact Us'];
	export const currentPage = $page.url.pathname;
</script>

<aside
	on:click={() => (open = !open)}
	class="absolute w-full h-full bg-black/50 shadow-lg"
	class:open
>
	<div class="flex flex-col items-stretch justify-center h-2/3 md:h-full mx-1 mt-5 text-peach">
		<a class="buttonClass" href="/">Home</a>
		{#each navButtons as navButton}
			{#if navButton.replace(/ /g, '-') === $page.url.pathname.replace(/\//g, '')}
				<a class="buttonClass text-white brightness-125" href={'/' + navButton.replace(/ /g, '-')}
					>{navButton}
				</a>
			{:else}
				<a class="buttonClass" href={'/' + navButton.replace(/ /g, '-')}>{navButton}</a>
			{/if}
		{/each}
	</div>
</aside>

<style>
	aside {
		/* offscreen by default */
		left: -100%;
		transition: left 0.3s ease-in-out;
	}

	.open {
		/* slide on screen */
		left: 0;
		touch-action: none;
	}
</style>
