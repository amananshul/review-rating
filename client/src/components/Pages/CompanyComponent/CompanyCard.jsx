import React from 'react';
import './CompanyCard.css'
import { useNavigate } from 'react-router-dom';
const CompanyCard = ({ company, fromDetailsPage }) => {
  const navigate = useNavigate();
  const handleDetailsClick = (companyId) => {
    // Navigate to the details page with the company ID in the route
    navigate(`/details/${companyId}`);
  };
  const AddReview = (id) => {
    // Navigate to the details page with the company ID in the route
     navigate(`/add-review/${id}`)
  }
  const calculateAverageRating = () => {
    if (company.reviews.length === 0) return 0;

    const totalRating = company.reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / company.reviews.length;
  };
  return (
    <div className="card" style={{ boxShadow: fromDetailsPage?"": '0px 0px 25px 0px #0000001a'}}>
      <div className="card-image">
        <img className='imgCard' src={'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier'} height={100} width={103} />
      </div>
      <div className="card-details">
        <div className='cardBoady'>
          <div className='locCompBody'>
            <div className="company-name">{company.companyName}</div>
            <p className="location">Location: {company.location}</p>
          </div>
          <div className="starRating">
             <div className='ratingParent'>
             <div className='ratingChild'>
              <span className='reviewLength'>{ Math.round(calculateAverageRating()).toFixed(1)}</span>
               <div>
               {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < Math.round(calculateAverageRating()) ? 'filled' : 'notFilled'}`}>★</span>
            ))}
               </div>
              </div>
            <span className='reviewLength'>{company.reviews.length} Reviews</span>
             </div>
          </div>
        </div>
        <div className='cardBoady'>
          <p className="founded-on">Founded on {new Date(company.foundedOn).toLocaleDateString()}</p>
          {fromDetailsPage ? <button className="find-company-btn" onClick={() => AddReview(company._id)}>Add Review</button>
            :
            <button className="detailed-review-button" onClick={() => handleDetailsClick(company._id)}>Detail Review</button>
          }
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
