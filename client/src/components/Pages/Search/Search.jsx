// Search.js
import React from 'react';
import SearchIcon from '../../Asset/SearchIcon.svg';

const Search = ({ onSearch }) => {
  const handleSearch = () => {
    // Call onSearch callback to trigger search action
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div style={{ position: 'relative' }}>
  <input type="text" placeholder="Search..." className="search-input" />
        <div
      className='SearchParent'
        onClick={handleSearch}
      >
    <img src={SearchIcon} alt="Logo" className="imgSearchLogo" />
      </div>
    </div>
  );
};

export default Search;
