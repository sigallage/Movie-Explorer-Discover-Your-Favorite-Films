import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{
      background: 'none',
      border: '1px solid var(--accent-color)',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      color: 'var(--text-color)',
      cursor: 'pointer',
      marginLeft: '1rem'
    }}>
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
