import { build } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import { SITE_URL } from '../src/data/seo.js'

// Produce static content using the same React components as the browser.
await build()
await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist-ssr',
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
})
const { render } = await import('../dist-ssr/entry-server.mjs')
const template = await readFile('dist/index.html', 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Missing prerender placeholder')
const content = render()
if (content.includes('opacity:0')) throw new Error('Prerendered content must be visible without JavaScript')
await writeFile('dist/index.html', template.replace('<!--app-html-->', content))
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`)
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}</loc></url>\n</urlset>\n`)
console.log(`Prerendered site and generated crawl files for ${SITE_URL}`)
