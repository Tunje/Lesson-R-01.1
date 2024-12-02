import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
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

  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };

  return (
    <Router> {/* Wrap the entire app in Router */}
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
                        backgroundImage: `url(/images/${movie.name.replace(/\s+/g, '-').replace(/[^\w\s-]/g, '')}.jpg)`,
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
                          backgroundImage: `url(/images/${item.name.replace(/\s+/g, '-').replace(/[^\w\s-]/g, '')}.jpg)`,
                        }}
                      >
                        <div className="movie-overlay">
                          <h3>{item.name}</h3>
                          <p>Price: ${item.price}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Your cart is empty.</p>
              )}
            </>
          } />
          
          {/* Contact Us Page */}
          <Route path="/contact" element={<h2>Contact Us</h2>} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
