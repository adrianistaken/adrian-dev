import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Add this import

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: '/adrian-dev/',
})
