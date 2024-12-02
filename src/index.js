import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { CartProvider } from './CartContext'; // Import the CartProvider from CartContext
import './index.css'; // Optional: Import your global styles (if any)

ReactDOM.render(
  <CartProvider>  {/* Wrap your App component with CartProvider */}
    <App />
  </CartProvider>,
  document.getElementById('root')  // This is the root div where your app will be rendered
);
