import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';

import { ThemifyContextProvider } from './context/themifyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemifyContextProvider>
      <App />
    </ThemifyContextProvider>
  </React.StrictMode>
);
