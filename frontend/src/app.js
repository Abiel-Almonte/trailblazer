import Home from './pages/Home';

export default function App() {
  const path= window.location.pathname;
  switch(path){
    case '/':
      return Home();
  }
}
