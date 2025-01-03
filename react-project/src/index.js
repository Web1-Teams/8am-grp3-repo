import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CreateAccount from './pages/CreateAccount';

ReactDOM.render(
  <Router>
    <CreateAccount/>
  </Router>,
  document.getElementById('root')
);