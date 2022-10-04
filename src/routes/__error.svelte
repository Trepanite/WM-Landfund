<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */ export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<div class="flex flex-col justify-center items-center text-4xl m-5 p-5">
	<h2 class="font-404 text-center">{title}</h2>
	<a href="/" class="buttonClass text-peach m-4 px-4">Click here to go home.</a>
</div>
