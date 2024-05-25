import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Specify the alias for src/main.jsx
      '@/src/main.jsx': '/path/to/src/main.jsx', // Replace '/path/to/src/main.jsx' with the actual path to your main.jsx file
    },
  },
});
