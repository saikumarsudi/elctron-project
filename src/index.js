import React from 'react';
import ReactDOM from 'react-dom';
import Bugreport from './Bugreport';
//import Enhancement from './Enhancement';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Watchdog from './Watchdog';
//import NewIdea from './NewIdea'
ReactDOM.render(
  <React.StrictMode>
    <Bugreport />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
