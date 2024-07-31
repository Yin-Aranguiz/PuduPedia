import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar copy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
  </React.StrictMode>
);

reportWebVitals();
