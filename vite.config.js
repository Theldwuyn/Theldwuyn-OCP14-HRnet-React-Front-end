import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['verbose'],
    watch: false,
    coverage: {
      reporter: ['text', 'json'],
      exclude: [
        ...configDefaults.exclude,
        './src/main.jsx',
        '__test__/**',
        './src/data',
        './src/app/**',
        './src/router',
      ],
    },
    exclude: [
      ...configDefaults.exclude,
      './src/data',
      './src/main.jsx',
      '**/node_modules/**',
      './coverage/**',
      './src/app/**',
      './src/router',
    ],
  },
});
