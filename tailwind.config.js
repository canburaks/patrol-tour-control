// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	//mode: 'jit',
	important: true,
	purge: {
		content: ['./resources/views/**/*.edge', './resources/assets/ts/**/*.ts'],
		options: {
			safelist: [/data-theme$/],
		},
	},
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.coolGray,
			blue: colors.lightBlue,
			blueGray: colors.blueGray,
			red: colors.rose,
			violet: colors.violet,
			indigo: colors.indigo,
			teal: colors.teal,
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
}
