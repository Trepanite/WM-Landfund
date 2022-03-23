<script lang="ts">
	let visitcount = 0;
	const messages = [
		'You are the 442,434th to enter. Will you be the first to leave?',
		'Please, leave your instruments at the door before entering the library. There have been too many incidents of late.',
		'Well met!',
		'to our sequestered keep...',
		'oh, do ignore the wailing. Just the oubliette, nothing to be concerned of. Remember to pay your late fees!'
	];
	export function welcome() {
		return messages[Math.floor(Math.random() * messages.length)];
	}
</script>

<div class="grid grid-cols-6 items-center">
	<a
		href="/"
		class="col-span-4 col-start-2 justify-self-center font-display text-9xl my-6 text-amber-400 [text-shadow:0px_0px_50px_black]"
		>Dungeon Synth Library</a
	>
	<blockquote
		class="text-right col-start-6 solid-bg font-serif text-lg p-2 text-amber-400"
		on:click={() => visitcount++}
	>
		Welcome, traveler... {welcome()}
	</blockquote>
</div>
