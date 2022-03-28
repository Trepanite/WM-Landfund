const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'display': ['FLEURDELEAH', 'serif'],
				'404': ['PRESSSTART2P', 'sans']
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
