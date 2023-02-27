/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
        extend: {
            fontFamily: {
                sans: ["Inter"]
            }
        },
		colors: {
			"neutral-900": "#292C3E",
			"neutral-600": "#666F9C",
			"neutral-200": "#E0E2EB",
			"neutral-100": "#F0F1F5",
			"primary-800": "#2C1674",
			"primary-700": "#3D1FA2",
			"primary-200": "#DDD5FA",
			"white": "#FFFFFF"
		}
    },
	plugins: [],
}