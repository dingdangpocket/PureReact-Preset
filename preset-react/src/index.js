import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "../src/http/axios"
//axios-Runtime拦截;
import App from './App';
import reportWebVitals from './reportWebVitals';
import {State} from "../src/context/state"
ReactDOM.render(
  <State>
    <App/>
  </State>
  ,
  document.getElementById('root')
);
reportWebVitals();
