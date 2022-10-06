<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Aside from '$lib/Aside.svelte';
	import Banner from '$lib/Banner.svelte';
	let open = false;
</script>

<Aside bind:open />
<Header bind:sidebar={open} />
<div class="grid grid-cols-12 min-h-fit w-full">
	<Navbar />
	<div class="col-start-1 col-span-full xl:col-span-7 xl:col-start-3 m-4">
		<slot />
	</div>
	<Banner />
</div>
