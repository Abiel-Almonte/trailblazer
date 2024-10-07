import { h } from 'snabbdom'

export default function Footer() {
  return h('footer', { 
    class: { 'bg-gray-100': true, 'py-4': true, 'mt-auto': true }
  }, [
    h('div', { 
      class: { 'container': true, 'mx-auto': true, 'px-4': true, 'text-center': true, 'text-gray-500': true }
    }, [
      h('p', 'Ⓒ 2024 Trailblazer. All rights reserved.'),
    ])
  ])
}