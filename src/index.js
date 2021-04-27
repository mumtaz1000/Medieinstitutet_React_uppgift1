import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <HashRouter basename='/'>
    <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
