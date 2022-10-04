<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Banner from '$lib/Banner.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Header />
<div class="grid grid-cols-12 min-h-full w-full">
	<Navbar />
	<div class="col-start-3 col-span-8 m-4">
		<slot />
	</div>
	<Banner />
</div>
<Footer />
