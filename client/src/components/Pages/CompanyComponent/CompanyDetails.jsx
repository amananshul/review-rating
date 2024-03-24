// CompanyDetails.jsx (or relevant component)

import React, { useState, useEffect } from 'react';
import './CompanyDetails.css'
import * as api from '../../Api/index.js';
import { useParams } from 'react-router-dom';
import CompanyCard from './CompanyCard.jsx';
import ReviewsDetails from './ReviewsDetails.jsx';
import { useSearch } from '../../Context/SearchContext.js';
import { Loader } from '../../FormComponent/Loader.jsx';

const CompanyDetails = () => {
    const { id } = useParams(); // Accessx   route parameters using useParams hook
    const [CompanyDetails, setCompanyDetails] = useState(null);
    const { setLoading,loading } = useSearch();

    useEffect(() => {
        const fetchCompanyDetails = async () => {
            try {
                setLoading(true)
                const response = await api.fetchCompanyDetails(id); // Fetch company details using ID from URL params
                setCompanyDetails(response.data);
            } catch (error) {
                console.error('Error fetching company details:', error);
            }finally{
                setLoading(false)
            }
        };

        fetchCompanyDetails();
    }, [id]);
    if(loading)return <Loader/>
    return (
        <div className="company-details">
            {CompanyDetails ? (
                <div className='detailsContainer'>
                    <div className='firstCont'>
                        <CompanyCard
                            company={CompanyDetails}
                            fromDetailsPage={true} // Pass fromDetailsPage prop
                        // Pass callback function for Add Review button
                        />
                    </div>
                    <div className='resultLength'>Result Found: {CompanyDetails?.reviews?.length}</div>
                    {CompanyDetails.reviews.map((item)=>{
                        return <ReviewsDetails key={item._id} data={item}/>
                    })}
                </div>
            ) : (
                <p>No Data Found</p>
            )}
        </div>
    );
};

export default CompanyDetails;
