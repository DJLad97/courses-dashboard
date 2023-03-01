/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/courses-dashboard/",
	plugins: [react()],
	resolve: {
		alias: {
			"$pages": path.resolve(__dirname, "./src/pages"),
			"$types": path.resolve(__dirname, "./src/types"),
			"$assets": path.resolve(__dirname, "./src/assets"),
			"$lib": path.resolve(__dirname, "./src/lib"),
			"$test": path.resolve(__dirname, "./src/test"),
			"$atoms": path.resolve(__dirname, "./src/components/atoms"),
			"$molecules": path.resolve(__dirname, "./src/components/molecules"),
			"$organisms": path.resolve(__dirname, "./src/components/organisms"),
			"$templates": path.resolve(__dirname, "./src/components/templates"),
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
		// you might want to disable it, if you don't have tests that rely on CSS
		// since parsing CSS is slow
		css: true,
	},
})
