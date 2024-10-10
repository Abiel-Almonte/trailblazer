import { h } from 'snabbdom'

export default function Header() {
  return h('header', { 
    class: { 'bg-white': true, 'shadow-md': true, 'py-4': true }
  }, [
    h('div', { 
      class: { 'container': true, 'mx-auto': true, 'px-4': true, 'flex': true, 'justify-between': true, 'items-center': true }
    }, [
      h('a', { 
        class: { 'text-2xl': true, 'font-bold': true, 'text-blue-600': true },
        props: {href: '/'}
      }, 'Trailblazer'),
      h('nav', [
        h('ul', { 
          class: { 'flex': true, 'space-x-4': true }
        }, [
          h('li', h('a', { 
            class: { 'text-gray-600': true, 'hover:text-blue-500': true },
            props: { href: '/' }
          }, 'Home')),
          h('li', h('a', { 
            class: { 'text-gray-600': true, 'hover:text-blue-500': true },
            props: { href: 'https://github.com/Abiel-Almonte/trailblazer' }
          }, 'About')),
          h('li', h('a', { 
            class: { 'text-gray-600': true, 'hover:text-blue-500': true },
            props: { href: '#/login' }
          }, 'Login')),
        ])
      ])
    ])
  ])
}