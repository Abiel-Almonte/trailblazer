import Home from './pages/Home';
import Login from './pages/Login';


export default function App(path) {
  switch(path) {
    case '/':
      return Home();
    case '/login':
      return Login();
  }
}