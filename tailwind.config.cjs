/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			'blue': '#1fb6ff',
			'purple': '#7e5bef',
			'pink': '#ff49db',
			'orange': '#ff7849',
			'green': '#13ce66',
			'yellow': '#ffc82c',
			'gray-dark': '#273444',
			'gray': '#8492a6',
			'gray-light': '#d3dce6',
			'black': '#000000',
			'white': '#ffffff',
		},
	},
	extend: {
		spacing: {
			'128': '32rem',
			'144': '36rem',
		},
		borderRadius: {
			'4xl': '2rem',
		},
		fontFamily: {
			display: 'Oswald, ui-serif'
		},
	},
	plugins: [],
}
