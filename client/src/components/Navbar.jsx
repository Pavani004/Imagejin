import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Imagejin</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
