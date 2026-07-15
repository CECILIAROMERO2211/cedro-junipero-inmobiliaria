import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { PropertyProvider } from './context/PropertyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </HelmetProvider>
  </React.StrictMode>,
);