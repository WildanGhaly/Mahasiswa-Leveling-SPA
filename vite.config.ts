import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: false,
    proxy: {
      '/set-cookie': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
}})
