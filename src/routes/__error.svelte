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

<div class="flex justify-center items-center text-4xl m-5 p-5 font-404">
	<h1>{title}</h1>
</div>
