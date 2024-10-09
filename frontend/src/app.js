import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  const path= window.location.pathname;
  switch(path){
    case '/':
      return Home();
    case '/login':
      return Login();
  }
}
