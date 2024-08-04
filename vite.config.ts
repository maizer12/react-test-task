import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		plugins: [react()],
		server: {
			proxy: {
				'/api': {
					target: 'https://live.devnimble.com',
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api\/v1/, '/api/v1'),
				},
			},
		},
	});
};
