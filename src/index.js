import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

//import './fonts/Work_Sans/WorkSans-VariableFont_wght.ttf';
//import './fonts/Inter/Inter-VariableFont_slntwght.ttf';
//import './fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
