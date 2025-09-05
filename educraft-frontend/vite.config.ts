import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions';



// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	 server: {
    port: 8080,
    host: '0.0.0.0',
    proxy: proxyOptions,
    strictPort: true,
  },
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	build: {
		// outDir: '../educraft/public/educraft-frontend',
		outDir: 'dist',
		emptyOutDir: true,
		target: 'es2015',
	},
});

