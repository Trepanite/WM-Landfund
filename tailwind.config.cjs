const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'display': ['CHICLE', 'sans'],
				'404': ['PRESSSTART2P', 'sans'],
				'nunito': ['NUNITO', 'sans']
			},
			backgroundImage: {
				'paper': "url('/paper-map.jpg')"
			},
			colors: {
				burgundy: '#7C2A3D',
				brown: '#BB9B62',
				pink: '#FF9FA3',
				peach: '#FF9866'
			},
			maxWidth: {
				'2/3': "66%"
			}
		},
		/* 		fontFamily: {
					'404': ['PRESSSTART2P', 'sans']
				} */
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
