import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginHeader from './components/LoginHeader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginHeader />
  </React.StrictMode>
);