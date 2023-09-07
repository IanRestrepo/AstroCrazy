/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: ['text-4xl', 'text-2xl', 'text-xl', 'text-lg', 'font-bold', 'font-mplus', 'mb-2', 'mb-1'],
	theme: {
		extend: {},
	},
	plugins: [],
}
