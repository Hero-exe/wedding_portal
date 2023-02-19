import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'wedding_portal' : './',
  plugins: [
    vue(),
    svgLoader({ defaultImport: 'component' })
  ],
})
