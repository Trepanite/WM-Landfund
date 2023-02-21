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
		class="flex flex-col space-y-4 font-inherit text-lg border-4 border-white rounded-lg bg-brown/20 m-4 p-4"
		action="https://postmail.invotes.com/send"
		method="post"
		id="email_form"
	>
		<input class="rounded-lg p-1 pl-3" type="text" name="subject" placeholder="Name" required />
		<input
			class="rounded-lg p-1 pl-3"
			type="email"
			name="extra_Email"
			placeholder="Email"
			required
		/>
		<input
			class="rounded-lg p-1 pl-3"
			type="Organization"
			name="extra_Organization"
			placeholder="Organization or Business (optional)"
		/>

		<textarea class="rounded-lg p-1 pl-3" name="text" placeholder="Message" required />
		<input type="hidden" name="access_token" value="nkbfbim2b3a8zmkjcgaftjgz" />
		<!-- return urls can be fully qualified -OR-
         start with / for root relative -OR-
         start with . for url relative -->
		<input type="hidden" name="success_url" value="/Contact-Us" />
		<input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />

		<!-- set the reply-to address -->
		<!-- <input type="text" name="reply_to"
                placeholder="Your Email" /> -->

		<!-- to append extra fields, use the extra_ prefix.
        Entries will be appended to your message body. -->
		<!-- <input type="text" name="extra_phone_number"
                placeholder="Phone Number" /> -->

		<!-- to split your message into 160 chars
         for an sms gateway -->
		<!-- <input type="hidden"
                name="sms_format" value="true" /> -->
		<div class="g-recaptcha" data-sitekey="6LdPg6AkAAAAAEJsIZsl07V-u3QufHBNm86GkGA-" />

		<input
			class="buttonClass text-peach cursor-pointer"
			id="submit_form"
			type="submit"
			value="Send"
		/>
	</form>
</div>
