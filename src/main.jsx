import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </ContextProvider>
);


