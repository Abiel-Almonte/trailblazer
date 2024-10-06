import { h } from 'snabbdom/h';

export default function App() {
  return h('div', { class: { 'container': true, 'mx-auto': true, 'p-4': true } }, [
    h('h1', { class: { 'text-2xl': true, 'font-bold': true } }, 'My Game App')
  ]);
}
