import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// Pengganti komponen MDX ReadMe (Callout, Cards, Card, Image, Anchor).
const blockClass = { info: 'info', warn: 'warning', error: 'danger', success: 'tip', okay: 'tip' }

const Callout = (props, { slots }) =>
  h('div', { class: ['custom-block', blockClass[props.theme] || 'info'] }, slots.default?.())
Callout.props = ['theme', 'icon']

const Cards = (_, { slots }) => h('div', { class: 'rm-cards' }, slots.default?.())

const Card = (props, { slots }) =>
  h('a', { class: 'rm-card', href: props.href }, [h('strong', props.title), h('p', slots.default?.())])
Card.props = ['title', 'href', 'icon', 'kind', 'isNew']

const Image = (props) =>
  h('img', { src: props.src, alt: props.alt || '', style: { width: props.width, display: 'block', margin: props.align === 'center' ? '0 auto' : undefined } })
Image.props = ['src', 'alt', 'align', 'width']

const Anchor = (props, { slots }) => h('a', { href: props.href, target: props.target, rel: 'noopener' }, slots.default?.())
Anchor.props = ['href', 'target']

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    Object.entries({ Callout, Cards, Card, Image, Anchor }).forEach(([name, c]) => app.component(name, c))
  },
}
