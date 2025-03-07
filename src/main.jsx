import { createRoot } from 'react-dom/client';
//import ReactDOM from "react-dom/client";
import React from "react";
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";//for link

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
);
