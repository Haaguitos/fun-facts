/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Caveat', 'system-ui', '-apple-system', 'sans-serif']
			}
		}
	},
	plugins: []
};
