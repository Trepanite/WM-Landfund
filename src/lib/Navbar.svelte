<script>
	import { page } from '$app/stores';
	export const navButtons = [
		'Donate',
		'Get Involved',
		'Apply',
		'Who We Are',
		'Media',
		'Contact Us'
	];
	export const currentPage = $page.url.pathname;
</script>

<nav class=" h-0 lg:h-full w-2/12 fixed inset-y-20 left-0 invisible lg:visible">
	<div class="flex flex-col items-stretch mx-1 text-peach">
		<a href="/" class="mb-2"
			><img
				src="brand-assets/corner-logo.png"
				class="object-scale-down mb-14"
				alt="The West Michigan BIPOC Farmer Land Fund logo."
			/></a
		>
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
