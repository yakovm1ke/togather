import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		open: 'http://localhost:5173/togather/',
	},
	base: '/togather/',
	define: {
		'process.env': {},
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, './src'),
		},
	},
})
