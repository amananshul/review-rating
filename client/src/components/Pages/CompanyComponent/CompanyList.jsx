import React, { useState, useEffect } from 'react';
import * as api from '../../Api/index.js';
import CompanyCard from './CompanyCard.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearch } from '../../Context/SearchContext.js';
import HeaderSection from '../Header/HeaderSection.jsx';
import { Loader } from '../../FormComponent/Loader.jsx';

const CompanyList = () => {
    const location = useLocation();
    const [companies, setCompanies] = useState([])
    const { searchResult, setLoading,loading } = useSearch();
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await api.fetchCompanies();
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (location.pathname.toLowerCase().includes("/") && !searchResult)
            fetchData();
        else if (!searchResult) // Reset companies when search term is empty
            setCompanies([]);
    }, [location.pathname, searchResult]);

    return (
        <>
            <HeaderSection />
          {loading ? <Loader/>:
          <div className="company-list">
                {searchResult ? (
                    searchResult.map((company) => (
                        <CompanyCard
                            key={company._id}
                            company={company}
                            fromDetailsPage={false} // Pass fromDetailsPage prop
                        />
                    ))
                ) : (
                    companies.map((company) => (
                        <CompanyCard
                            key={company._id}
                            company={company}
                            fromDetailsPage={false} // Pass fromDetailsPage prop
                        />
                    ))
                )}
            </div>
          }
           
        </>
    );
};

export default CompanyList;
