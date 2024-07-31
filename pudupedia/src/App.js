import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

function App() {
  return (
    <ApiProvider>
      <Header/>
    <LandingPage />
    </ApiProvider>
  );
}

export default App;
