import React, { useEffect, useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // Load last searched movie on mount
  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      setQuery(lastSearch);
      onSearch(lastSearch); // Optional: trigger initial search
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    localStorage.setItem('lastSearch', value); // Save on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search movies..."
        className="search-input"
      />
      <button type="submit" className="search-button">🔍</button>
    </form>
  );
}

export default SearchBar;
