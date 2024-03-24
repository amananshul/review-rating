import React from 'react';
import FindCompanyIcon from '../../Asset/FindCompanyIcon.svg';
import { useDebounce } from 'use-debounce';
import { useSearch } from '../../Context/SearchContext';

const FindCompanySearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [debouncedSearchTerm] = useDebounce(searchTerm, 500); // Debounce search term by 500ms
    const { setSearchResult } = useSearch();


    const handleInputChange = (event) => {
        if(event.target.value!==""){
            setSearchTerm(event.target.value);
           
        }
        else {
            setSearchResult(null)
            setSearchTerm('')
        }
    };

    React.useEffect(() => {
        onSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm, onSearch]);

    return (
        <div style={{ position: 'relative' }}>
            <div className='selectHead'>
                <label className='headingSort'>Select City</label>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search-input" 
                    value={searchTerm} 
                    onChange={handleInputChange} 
                />
            </div>
            <div className='SearchParent searchCompany'>
                <img src={FindCompanyIcon} alt="Find Company" className="imgSearchLogo" height={22} width={22} />
            </div>
        </div>
    );
};

export default FindCompanySearch;
