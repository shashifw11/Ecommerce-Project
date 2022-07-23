import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { SearchContextProvider } from './context/search';
import {CartContextProvider} from "./context/CartContext" ; 
import {AuthContextProvider} from "./context/Auth" ;  
import {PaymentContextProvider} from "./context/paymentContext" ; 
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: 'top center', //bottom center
  timeout: 4000,
  offset: '100px',
  transition: 'scale',
 
}

//https://reactjsexample.com/a-simple-react-alert-component/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
  <React.StrictMode>
    <SearchContextProvider>
    <CartContextProvider>
      <AuthContextProvider>
        <PaymentContextProvider>
       <BrowserRouter>
       <AlertProvider template={AlertTemplate} {...options}>
         <App />
         </AlertProvider>
         </BrowserRouter>
       </PaymentContextProvider>
       </AuthContextProvider>
       </CartContextProvider>
    </SearchContextProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
