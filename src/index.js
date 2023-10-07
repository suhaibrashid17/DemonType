import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react';
import  {Provider}  from 'react-redux';
import { persistStore } from 'redux-persist';
import {store} from "./app/store";
const persistedStore=persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
       <App />
    </PersistGate>
  </Provider>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
