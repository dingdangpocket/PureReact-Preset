import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
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
