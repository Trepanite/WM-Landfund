<script>
	import { page } from '$app/stores';
	export const navButtons = ['About Us', 'Get Involved', 'Donate', 'Apply', 'Media', 'Contact Us'];
	export const currentPage = $page.url.pathname;
	export const buttonClass =
		'mb-2 py-2 min-w-fit text-center font-display text-4xl bg-burgundy rounded-tl-lg rounded-br-lg hover:text-white hover:brightness-125 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 drop-shadow-lg';
</script>

<nav class=" h-full w-2/12 fixed">
	<div class="flex flex-col items-stretch mx-1 text-peach">
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
</nav>
