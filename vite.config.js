import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dokahouse/',
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
