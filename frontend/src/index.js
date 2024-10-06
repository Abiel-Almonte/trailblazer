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
  vnode = patch(vnode, App());
}

render();
