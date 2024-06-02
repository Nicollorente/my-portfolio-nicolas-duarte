import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Hamburger from 'hamburger-react';

export default defineConfig({
  plugins: [react(),],
  build: {
    rollupOptions: {
      external: ['hamburger-react']
    }
  }
  
});
