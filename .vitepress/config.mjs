import { readFileSync } from 'node:fs'
import { defineConfig } from 'vitepress'

// Sidebar dibangun dari _order.yaml milik ReadMe agar urutannya sama.
const list = (path) => readFileSync(path, 'utf8').match(/^- (.+)$/gm).map((l) => l.slice(2).trim())

const sections = list('docs/_order.yaml')
  .filter((section) => section !== 'Getting Started')
  .map((section) => ({
    text: section,
    collapsed: false,
    items: list(`docs/${section}/_order.yaml`).map((slug) => {
      const md = readFileSync(`docs/${section}/${slug}.md`, 'utf8')
      return { text: md.match(/^title:\s*(.+)$/m)[1], link: `/docs/${slug}` }
    }),
  }))

const brand = 'AMDALNET Helpdesk'

export default defineConfig({
  lang: 'id-ID',
  title: brand,
  description: 'Dokumentasi Fitur Chat Aduan AMDALNET',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md', 'reference/**'],
  // Samakan URL dengan ReadMe (/docs/<slug>), halaman Overview jadi beranda.
  rewrites: {
    'docs/Getting Started/getting-started.md': 'index.md',
    'docs/:section/:page': 'docs/:page',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Space+Mono:wght@700&display=swap' }],
  ],
  // Nama section untuk breadcrumb di atas judul halaman.
  transformPageData(pageData) {
    const [, section] = pageData.filePath.split('/')
    if (section && section !== 'Getting Started') pageData.frontmatter.section = section
  },
  themeConfig: {
    logo: '/logo.png',
    nav: [{ text: 'Guides', link: '/', activeMatch: '^/(docs/)?' }],
    sidebar: [{ text: brand, items: sections }],
    search: { provider: 'local' },
    outline: { label: 'Di halaman ini' },
    lastUpdated: { text: 'Diperbarui' },
    docFooter: { prev: 'Sebelumnya', next: 'Berikutnya' },
  },
})
