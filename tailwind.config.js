/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					primary: '#050815', // dark blue
					secondary: '#f8f9fa', // whiteish grey colour
					tertiary: '#405DE6', // lighter blue
					darkGreyOne: '#121212',
					darkGreyTwo: '#333333',
					darkGreyThree: '#666666',

					highlightBg: colors.gray[900],
					highlightText: colors.red[400]
				},
				light: {
					primary: '#f8f9fa',
					secondary: '#050815',
					tertiary: '#405DE6',

					whiteOne: '#fafcff',
					greyOne: '#eeeeee',
					greyTwo: '#dddddd',
					greyThree: '#cccccc',
					darkGreyOne: '#121212',
					darkGreyTwo: '#333333',
					darkGreyThree: '#666666',

					highlightBg: colors.gray[900],
					highlightText: colors.red[400]
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
