<script>
	import Divide from '$lib/Divide.svelte';
</script>

<div class="sm:flex sm:justify-between mb-4">
	<div>
		<h1>Donate</h1>
		<Divide />
		<p class="mr-8">
			Any donation large or small is appreciated. Amplify your impact by calling in your networks to
			donate too! <a href="https://www.miffs.org/" title="miffs.org"
				>Michigan Food and Farming Systems</a
			>
			and
			<a href="http://youngfarmers.org" title="youngfarmers.org"
				>The National Young Farmers Coalition</a
			> have been supportive as our fiscal sponsors for the GoFundMe, making all donations tax deductible.
		</p>
	</div>
	<iframe
		class="border-4 border-white rounded-lg "
		title=""
		src="https://www.gofundme.com/f/dtuz62-west-michigan-farmers-of-color-land-fund/widget/large"
		frameborder="5"
		height="460"
	/>
</div>
<!-- <div class="sm:flex sm:justify-between">
	<div class=" border-4 border-white rounded-lg bg-brown/20 m-4 p-4">
		<div class="flex justify-between">
			<h1>Seed Level</h1>
			<h1>$200+</h1>
		</div>
		<p>
			Recommended for businesses that are local, BIPOC-owned, environmentally or justice focused.
		</p>
	</div>
</div> -->
<img class="border-4 border-white rounded-lg" src="/wm_donation_flier.png" alt="" />
