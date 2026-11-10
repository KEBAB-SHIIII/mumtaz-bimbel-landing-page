import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mumtaz-bimbel-landing-page/',
  server: {
    port: 5173,
    open: false
  }
});
