// HeaderSection.js
import React, { useState } from 'react';
import './HeaderSection.css';
import FindCompanySearch from '../Search/FindCompanySearch';
import { useNavigate } from 'react-router-dom';
import { searchCompanies, sortCompanies } from '../../Api/index'; // Import searchCompanies and sortCompanies APIs
import { useSearch } from '../../Context/SearchContext';

function HeaderSection() {
  const navigate = useNavigate();
    const { setSearchResult,setLoading } = useSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setLocalSortOption] = useState(''); // Local state for sorting option

  const handleFindCompanySearch = async () => {
    try {
      setLoading(true)
      const response = await searchCompanies(searchTerm); // Call searchCompanies API
      // Set search result using context
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error searching companies:', error);
    }finally{
      setLoading(false)
    }
  };

  const handleSortOptionChange = async (e) => {
    console.log('e',e.target.value)
    const option = e.target.value;
    setLocalSortOption(option); // Update local state for sorting option
    try {
      const response = await sortCompanies(option); // Call sortCompanies API
      setSearchResult(response.data);
    } catch (error) {
      console.error('Error sorting companies:', error);
    }
  };

  return (
    <div className="header-section">
      <div className="subsection">
        <FindCompanySearch onSearch={setSearchTerm} />
        <button className="find-company-btn" onClick={handleFindCompanySearch}>
          Find Company
        </button>
      </div>
      <div className="subsection">
        <button onClick={() => navigate('/add-company')} className="add-company-btn">
          Add Company
        </button>
      </div>
      <div className="subsectionSort">
      <label className='headingSort'>Sort</label>
      <select className="sort-dropdown" onChange={handleSortOptionChange} value={sortOption}>
          <option value="companyName"> Name</option>
          <option value="location"> Location</option>
          <option value="foundedDate"> Founded Date</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderSection;
