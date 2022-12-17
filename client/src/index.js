import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import{Provider } from 'react-redux'
import {store , persistor} from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
