<script>
	import Divide from '$lib/Divide.svelte';
</script>

<div>
	<h1>Contact Us</h1>
	<Divide />
	<p>Please submit any inquiry you have via the form below.</p>
	<p>
		If you would like to join the chapter and regularly support the land fund, please include what
		skills or strengths you would like to bring to this work, and the amount of time you could
		regularly commit.
	</p>
	<form
		class="flex flex-col space-y-2 font-inherit"
		action="http://postmail.invotes.com/send"
		method="post"
		id="email_form"
	>
		<input type="text" name="Name" placeholder="Name" />
		<input type="email" name="Email" placeholder="Email" />
		<input
			type="Organization"
			name="Organization"
			placeholder="Organization or Business (optional)"
		/>

		<textarea name="text" placeholder="Message" />
		<input type="hidden" name="access_token" value="abc123" />

		<input type="hidden" name="success_url" value="." />
		<input type="hidden" name="error_url" value=".?err=1" />

		<input class="buttonClass text-peach" id="submit_form" type="submit" value="Send" />
	</form>
</div>
