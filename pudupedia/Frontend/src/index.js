import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import SignAndLog from './components/LoginPage/signlog/SignLog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignAndLog/>
  </React.StrictMode>
);


reportWebVitals();
