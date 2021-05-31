// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
	//mode: 'jit',
	important: true,
	purge: {
		content: ['./resources/views/**/*.edge', './resources/assets/ts/**/*.ts'],
		options: {
			safelist: [/data-theme$/]
		}
	},
	theme: {
		extend: {},
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.coolGray,
			blue: colors.lightBlue,
			blueGray: colors.blueGray,
			red: colors.rose,
			violet: colors.violet,
			purple: colors.violet,
			indigo: colors.indigo,
			teal: colors.teal,
			green: colors.teal,
			pink: colors.pink,
			yellow: colors.yellow
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50vh',
			'3/4': '75vh',
			'4/5': '80vh',
			'9/10': '90vh',
			'full': '1vh'
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
