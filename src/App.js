import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import { CartContext } from './CartContext'; // Import the CartContext to access cart data globally
import './App.css'; // Make sure the CSS is imported

function App() {
  const movies = [
    { id: 1, name: "Raiders of the Lost Lust", price: 15 },
    { id: 2, name: "Fast and Furiously Yours", price: 20 },
    { id: 3, name: "The Big Bang Saga", price: 12 },
    { id: 4, name: "Jurassic Pork", price: 18 },
    { id: 5, name: "Titanic: Going Down", price: 25 },
    { id: 6, name: "The Lord of the Rings: The Fellowship of the Bing", price: 14 },
    { id: 7, name: "Spider-Man: Webs of Desire", price: 19 },
    { id: 8, name: "The Dark Knight Rises Again", price: 17 },
    { id: 9, name: "Toy Story: Playtime for Adults", price: 22 },
    { id: 10, name: "Missionary: Impossible", price: 16 },
    { id: 11, name: "The Wizard of Ahhhs", price: 13 },
    { id: 12, name: "Harry Potter and the Chamber of Secret Pleasures", price: 28 },
    { id: 13, name: "Star Wars: The Rise of Skyhumpers", price: 21 },
    { id: 14, name: "The Fast and the Frisky", price: 10 },
    { id: 15, name: "Guardians of the Galaxy: Volume 69", price: 30 },
    { id: 16, name: "How to Train Your Draggin’", price: 11 },
    { id: 17, name: "Pirates of the Carib-be-in Bed", price: 24 },
    { id: 18, name: "Beauty and the Beast Within", price: 13 },
    { id: 19, name: "Frozen Assets: Let It Go Again", price: 26 },
    { id: 20, name: "The Devil Wears Nada", price: 29 },
  ];

  const { cart, addToCart, removeFromCart } = useContext(CartContext); // Access cart state and actions from context

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Router>
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><a href="/">Shop</a></li>
            <li className="navbar-item"><a href="/cart">Cart ({cart.length})</a></li>
            <li className="navbar-item"><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <h1>Vid feed!</h1>
              <h2>Films:</h2>
              <div className="movie-container">
                {movies.map((movie) => (
                  <div className="movie-item" key={movie.id}>
                    <div
                      className="movie-image"
                      style={{
                        backgroundImage: `url(/images/${movie.name.replace(/\s+/g, '-').replace(/[^\w\s-]/g, '')}.jpg)`
                      }}
                    >
                      <div className="movie-overlay">
                        <h3>{movie.name}</h3>
                        <button onClick={() => addToCart(movie)}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          } />
          
          {/* Cart Page */}
          <Route path="/cart" element={
            <>
              <h2>Cart</h2>
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index} className="movie-item">
                      <div
                        className="movie-image"
                        style={{
                          backgroundImage: `url(/images/${item.name.replace(/\s+/g, '-').replace(/[^\w\s-]/g, '')}.jpg)`
                        }}
                      >
                        <div className="movie-overlay">
                          <h3>{item.name}</h3>
                          <p>Price: ${item.price}</p>
                          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty.</p>
              )}

              {cart.length > 0 && (
                <>
                  <div className="cart-summary">
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className="buy-button">Buy Now</button>
                  </div>
                </>
              )}
            </>
          } />
          
          {/* Contact Us Page */}
          <Route path="/contact" element={
            <div>
              <h2>Contact Us</h2>
              <p>If you have any questions or need assistance, please reach out to us using the information below:</p>
              <ul>
                <li>Email: <a href="mailto:support@vidfeed.com">support@vidfeed.com</a></li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Movie Lane, Hollywood, CA 90210</li>
              </ul>
              <h3>Contact Form</h3>
              <form>
                <label>
                  Name:
                  <input type="text" placeholder="Your Name" />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" placeholder="Your Email" />
                </label>
                <br />
                <label>
                  Message:
                  <textarea placeholder="Your Message"></textarea>
                </label>
                <br />
                <button type="submit">Send Message</button>
              </form>
            </div>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
