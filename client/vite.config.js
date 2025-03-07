import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/', // Set base path for deployment


    plugins: [react()],
    server: {
        hmr: {
          overlay: false
        }
      }
});
