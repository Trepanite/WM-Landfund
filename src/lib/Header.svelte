<script>
	import Hamburger from './Hamburger.svelte';
	export let sidebar = false;
</script>

<div class="grid grid-cols-6 pt-2">
	<Hamburger bind:open={sidebar} />
	<a href="/" class="col-start-2 col-span-4">
		<img
			src="brand-assets/text-logo.png"
			class="object-scale-down"
			alt="The West Michigan Farmers of Color Land Fund"
		/></a
	>
	<img
		src="brand-assets/corner-logo.png"
		class="object-scale-down mt-3 lg:hidden"
		alt="The West Michigan BIPOC Farmer Land Fund logo."
	/>
</div>
