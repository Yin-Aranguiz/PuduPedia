import logo from './logo.svg';
import './App.css';
import Cards from './Theme/Cards';
import { ApiProvider } from './Theme/Api';

function App() {
  return (
    <ApiProvider>
      <Cards/>
    </ApiProvider>
  );
}

export default App;
