import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async'; // 1. Importa esto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> {/* 2. Envuelve todo tu App aquí */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);