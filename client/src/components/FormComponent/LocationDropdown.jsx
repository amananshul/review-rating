import React, { useState } from 'react';
import axios from 'axios';
import { ErrorMessage } from 'formik';

const LocationDropdown = ({ field, form }) => {
  const { name, value } = field;
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (e) => {
    const searchTerm = e.target.value;
    form.setFieldValue(name, searchTerm);
    setIsLoading(true);

    try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=5&appid=e051b4b2e7c15947acec196aad8a6e65        `);
      const locations = response.data;
      setSearchResults(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      setSearchResults([]);
    }

    setIsLoading(false);
  };

  const handleOptionClick = (selectedLocation) => {
    form.setFieldValue(name, selectedLocation.name);
    setSearchResults([]);
  };

  return (
    <div className="location-dropdown-container">
      <input
        className="location-dropdown-input"
        type="text"
        placeholder="Enter city name"
        {...field}
        onChange={handleInputChange}
      />
      {isLoading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <ul className="location-dropdown-list">
          {searchResults.map((location) => (
            <li key={location.id} onClick={() => handleOptionClick(location)}>
              {location.name}, {location.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationDropdown;
