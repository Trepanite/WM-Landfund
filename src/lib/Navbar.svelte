<script>
	import { capitalize } from '$lib/utils';
	export const navButtons = ['/', 'library', 'collabs', 'about'];
	export const buttonClass =
		'mb-2 py-2 min-w-fit text-center font-display text-4xl font-bold text-amber-400 solid-bg hover:mix-blend-multiply hover:text-black transition-all duration-300 drop-shadow-lg';
</script>

<nav class=" h-full w-2/12 fixed">
	<div class="flex flex-col items-stretch mx-1 drop-shadow-2xl">
		{#each navButtons as navButton}
			{#if navButton === '/'}
				<a class={buttonClass} href="/">Home</a>
			{:else}
				<a class={buttonClass} href={'/' + navButton}>{capitalize(navButton)}</a>
			{/if}
		{/each}
	</div>
</nav>
