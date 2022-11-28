import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';

import { ThemifyContextProvider } from './context/themifyContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemifyContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemifyContextProvider>
  </React.StrictMode>
);
