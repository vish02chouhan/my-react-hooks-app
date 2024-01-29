import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="App-header">
      <h1>My E-Commerce App</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>
      {user && <p>Welcome, {user.name}!</p>}
    </header>
  );
};

export default Header;
