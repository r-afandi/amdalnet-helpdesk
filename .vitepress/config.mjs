import { readFileSync } from 'node:fs'
import { defineConfig } from 'vitepress'

// Sidebar dibangun dari _order.yaml milik ReadMe agar urutannya sama.
const list = (path) => readFileSync(path, 'utf8').match(/^- (.+)$/gm).map((l) => l.slice(2).trim())

const sidebar = list('docs/_order.yaml')
  .filter((section) => section !== 'Getting Started')
  .map((section) => ({
    text: section,
    items: list(`docs/${section}/_order.yaml`).map((slug) => {
      const md = readFileSync(`docs/${section}/${slug}.md`, 'utf8')
      return { text: md.match(/^title:\s*(.+)$/m)[1], link: `/docs/${slug}` }
    }),
  }))

export default defineConfig({
  lang: 'id-ID',
  title: 'AMDALNET Helpdesk',
  description: 'Dokumentasi Fitur Chat Aduan AMDALNET',
  cleanUrls: true,
  srcExclude: ['README.md', 'reference/**'],
  // Samakan URL dengan ReadMe (/docs/<slug>), halaman Overview jadi beranda.
  rewrites: {
    'docs/Getting Started/getting-started.md': 'index.md',
    'docs/:section/:page': 'docs/:page',
  },
  themeConfig: {
    sidebar,
    search: { provider: 'local' },
    outline: { label: 'Di halaman ini' },
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
  },
})
