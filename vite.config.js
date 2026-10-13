import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { renderSeoHead } from './src/data/seo.js'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss(), {
    name: 'petrofeed-seo',
    transformIndexHtml(html) {
      return html.replace('<!--seo-head-->', renderSeoHead())
    },
  }],
  base: process.env.VITE_BASE_PATH || (command === 'serve' ? '/petrofeed/' : '/'),
  server: {
    allowedHosts: true,
  },
}))
