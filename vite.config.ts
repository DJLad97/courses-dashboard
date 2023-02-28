import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"$pages": path.resolve(__dirname, "./src/pages"),
			"$types": path.resolve(__dirname, "./src/types"),
			"$assets": path.resolve(__dirname, "./src/assets"),
			"$lib": path.resolve(__dirname, "./src/lib"),
			"$atoms": path.resolve(__dirname, "./src/components/atoms"),
			"$molecules": path.resolve(__dirname, "./src/components/molecules"),
			"$organisms": path.resolve(__dirname, "./src/components/organisms"),
			"$templates": path.resolve(__dirname, "./src/components/templates"),
		}
	}
})
