import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter(), vue(), UnoCSS()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  resolve: {
    alias: {
      'real-ui-dev/': `${path.resolve(__dirname)}/../packages/ui/src/`,
      'real-ui-dev': `${path.resolve(__dirname)}/../packages/ui/src/index.ts`,
      'light-theme': `${path.resolve(__dirname)}/../packages/light-theme/dist/light-theme.css`,
    }
  }
})
