import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue', 'src/**/*.js', 'src/*.js']
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src')
    }
  },
  css: {
    preprocessorOptions: {
    }
  }
})
