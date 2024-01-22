/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*.html'],
	theme: {
		extend: {
			colors: {
				dark: '#0A0908',
				light: '#F2F4F3',
				primary: '#5E503F',
				secondary: '#A9927D',
				tertiary: '#22333B'
			},

			fontFamily: {
				inter: ['Inter']
			}
		}
	},
	plugins: []
}
