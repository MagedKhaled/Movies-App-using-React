import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//<<<<<<< HEAD
//=======
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
//>>>>>>> 8cbb860073dfde0ba3cb7ec899ea6269819fbf0d

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
