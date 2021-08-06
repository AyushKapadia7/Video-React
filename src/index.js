import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<div style= {{backgroundColor: "black"}}>
  <React.StrictMode>
    <App />
  </React.StrictMode></div>,
  document.getElementById('root')
)
reportWebVitals();
