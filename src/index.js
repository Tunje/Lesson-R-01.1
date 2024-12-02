import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './CartContext';
import './index.css';

ReactDOM.render(
  <CartProvider>  {/* wrap */}
    <App />
  </CartProvider>,
  document.getElementById('root')
);
