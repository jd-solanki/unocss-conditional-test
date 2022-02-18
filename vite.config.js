import presetUno from '@unocss/preset-uno'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
    presetUno()
    ],
    // safelist: ['text-red', 'text-green']
})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
