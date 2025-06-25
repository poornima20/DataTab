import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // for routing

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/DataTab">
    <App />
  </BrowserRouter>
);
