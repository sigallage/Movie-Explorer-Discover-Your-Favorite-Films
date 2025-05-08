import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">🎬 Movie Explorer</Link>
      </h1>
      <nav className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>Favorites</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
