<!-- Hamburger.svelte -->
<script>
	export let open = false;
</script>

<!-- defines a CSS class `.open` when `open == true` -->
<button class:open class="lg:hidden ml-4" on:click={() => (open = !open)}>
	<!-- svg with 3 lines -->
	<svg width="32" height="24" class="z-50">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="24" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		/* `currentColor` means inherit color from the text color */
		stroke: currentColor;
		stroke-width: 4;
		transition: transform 0.3s ease-in-out;
	}

	/* adjust the Z-index, so that the icon is on top of the sidebar */
	button {
		z-index: 20;
	}

	.open svg {
		transform: scale(0.7);
	}

	/* rotate the top line */
	.open #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	/* hide the middle */
	.open #middle {
		opacity: 0;
	}

	/* rotate the bottom line */
	.open #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
