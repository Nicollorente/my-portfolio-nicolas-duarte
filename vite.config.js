import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styled from 'styled-components';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@fortawesome/react-fontawesome',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons',
        'styled-components'
      ],
    },
  },
});
