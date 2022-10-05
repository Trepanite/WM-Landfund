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
<div class="grid grid-cols-12 min-h-screen w-full">
	<Navbar />
	<div class="col-start-1 col-span-full sm:col-start-3 sm:col-span-8 m-4">
		<slot />
	</div>
	<Banner />
</div>
