import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <LandingPage />
    </React.StrictMode>

  );
}

export default App;