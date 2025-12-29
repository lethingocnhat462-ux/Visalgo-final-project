import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n/config';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Visalgo-final-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();