/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#565676',

					secondary: '#9CA3DB',

					accent: '#4e4e94',

					neutral: '#9CC0E7',

					'base-100': '#A8AEC1',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272',
				},
			},
		],
	},
}
