// SearchContext.js
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <SearchContext.Provider
      value={{ searchResult, setSearchResult ,setLoading,loading}}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
