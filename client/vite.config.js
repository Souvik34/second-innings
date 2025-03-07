import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/', // Set base path for deployment

    esbuild: {
      legalComments: 'none',
    },
    plugins: [react()],
    server: {
        hmr: {
          overlay: false
        }
      }
});
