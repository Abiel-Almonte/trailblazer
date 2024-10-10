import {h} from 'snabbdom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App(path) {
  switch(path) {
    case '/':
      return Home();
    case '/login':
      return Login();
    case '/signup':
      return Signup();
    default:
      return h('div','Not Found')
  }
}