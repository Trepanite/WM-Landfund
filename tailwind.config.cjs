const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'display': ['CHOMSKY', 'serif'],
				'404': ['FLEURDELEAH', 'sans']
			},
			backgroundImage: {
				'paper': "url('/paper-map.jpg')"
			}
		},
		/* 		fontFamily: {
					'404': ['PRESSSTART2P', 'sans']
				} */
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
