import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000' // Proxy to backend API (adjust to your backend URL)
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true // Enable source maps for easier debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for easier import paths
    }
  }
})
