import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/login"
})
