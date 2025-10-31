


import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeadProvider } from 'react-head';
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
  <HeadProvider>
      <App />
    </HeadProvider>
    </BrowserRouter>
  </React.StrictMode>
)

