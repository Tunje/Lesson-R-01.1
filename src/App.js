import React, { useState } from 'react';

function App() 
  {
    // Sample products
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

    // State for the cart
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (movies) => 
      {
      setCart([...cart, movies]);
      };

    return (
      <div>
        <h1>Simple Shop</h1>
        <h2>Products</h2>
        <ul>
          {movies.map((movies) => 
            (
            <li key={movies.id}>
              {movies.name} - ${movies.price}{" "}
              <button onClick={() => addToCart(movies)}>Add to Cart</button>
            </li>
            ))}
        </ul>

        <h2>Cart</h2>
        {cart.length > 0 ? 
        (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  }

export default App;
