import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartContext } from './CartContext';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count > 0 ? count - 1 : 0); // Prevent going below 0
  const resetCount = () => setCount(0);

  const storedTheme = localStorage.getItem('themeIndex');
  const [theme, setTheme] = useState(storedTheme ? parseInt(storedTheme) : 0);
  
  const themes = [
    { navbar: '#ff6f61', footer: '#ffcccb', background: '#ffe4e1', text: '#000' },
    { navbar: '#6fa8dc', footer: '#9fc5e8', background: '#d9eaf7', text: '#000' },
    { navbar: '#93c47d', footer: '#b6d7a8', background: '#d9ead3', text: '#000' },
    { navbar: '#f6b26b', footer: '#ffd966', background: '#fff2cc', text: '#000' },
    { navbar: '#8e7cc3', footer: '#b4a7d6', background: '#d9d2e9', text: '#000' },
  ];

  // Movies
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

  useEffect(() => {
    localStorage.setItem('themeIndex', theme);
  }, [theme]);

  const applyTheme = themes[theme];

  
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodoList([...todoList, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const moveTodoUp = (index) => {
    if (index > 0) {
      const updatedTodos = [...todoList];
      const temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index - 1];
      updatedTodos[index - 1] = temp;
      setTodoList(updatedTodos);
    }
  };

  const moveTodoDown = (index) => {
    if (index < todoList.length - 1) {
      const updatedTodos = [...todoList];
      const temp = updatedTodos[index];
      updatedTodos[index] = updatedTodos[index + 1];
      updatedTodos[index + 1] = temp;
      setTodoList(updatedTodos);
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedTodos);
  };

  return (
    <Router>
      <div className="container" style={{ backgroundColor: applyTheme.background, minHeight: '100vh', color: applyTheme.text }}>
        {/* Navbar */}
        <nav className="navbar" style={{ backgroundColor: applyTheme.navbar, color: '#fff' }}>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="/">Shop</a></li>
            <li className="navbar-item"><a href="/cart">Cart ({cart.length})</a></li>
            <li className="navbar-item"><a href="/contact">Contact Us</a></li>
            <li className="navbar-item"><a href="/themes">Themes</a></li>
            <li className="navbar-item"><a href="/todo">To-Do List</a></li> {/* Link to the to-do list page */}
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
                <div className="cart-summary">
                  <h3>Total: ${calculateTotal()}</h3>
                  <button className="buy-button">Buy Now</button>
                </div>
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
            </div>
          } />
          {/* themes */}
          <Route path="/themes" element={
          <div>
            <h2>Select a Theme</h2>
            <p>Choose your preferred theme:</p>
            <div>
              {themes.map((theme, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: theme.navbar,
                    color: theme.text,
                    padding: '10px',
                    margin: '5px',
                    cursor: 'pointer'
                  }}
                  onClick={() => setTheme(index)}
                >
                  Theme {index + 1}
                </div>
              ))}
            </div>
          </div>
        } />
          {/* To-Do List Page */}
          <Route path="/todo" element={
            <div>
              <h2>To-Do List</h2>
              <ul>
                {todoList.map((todo, index) => (
                  <li key={todo.id} className="todo-item">
                    <span>{todo.text}</span>
                    <button onClick={() => moveTodoUp(index)}>Move Up</button>
                    <button onClick={() => moveTodoDown(index)}>Move Down</button>
                    <button onClick={() => removeTodo(index)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div>
                <input
                  type="text"
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="New task..."
                />
                <button onClick={handleAddTodo}>Add Task</button>
              </div>
            </div>
          } />

        </Routes>

        {/* Footer */}
        <footer className="footer" style={{ backgroundColor: applyTheme.footer, color: '#000' }}>
          <button onClick={increaseCount}>Increase</button>
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={resetCount}>Reset</button>
          <p>Count: {count}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
