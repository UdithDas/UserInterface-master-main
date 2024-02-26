import React from 'react';
import './SearchBar.css'; // Import the corresponding CSS file

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-input" />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
