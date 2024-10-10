import {init, classModule, propsModule, styleModule, eventListenersModule} from "snabbdom";

import './styles/main.css';
import App from './app';

const patch = init([
  classModule,
  propsModule,
  styleModule,
  eventListenersModule
]);

let vnode = document.getElementById('app');
function render() {
  const path = window.location.hash.slice(1) || '/';
  vnode = patch(vnode, App(path));
}

render();

window.addEventListener('hashchange', render);

export function navigate(path) {
  window.location.hash = path;
}