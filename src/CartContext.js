import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
  };

  const removeFromCart = (movieId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== movieId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
