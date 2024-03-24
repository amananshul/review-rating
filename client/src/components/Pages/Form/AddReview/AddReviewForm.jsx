// AddCompanyForm.js
import React from 'react';
import { Input } from '../../../FormComponent/Input';
import { TextArea } from '../../../FormComponent/TextArea';
import StarRatingField from '../../../FormComponent/StarRatingField';

const AddReviewForm = () => {
  return (
    <div className='formCont'>
      <label className='addCompanyBody' htmlFor="name">Full Name</label>
      <Input
        maxLength={150}
        name="name" placeholder="Name"
      />
      <label className='addCompanyBody' htmlFor="location">Subject</label>
      <Input type="text" name="subject" placeholder="Subject" />
      <label className='addCompanyBody' htmlFor="foundedOn">Enter Your Review</label>
      <TextArea
        maxLength={500}
        name="description" placeholder="Description" 
      />
      <label className='ratingHeading' htmlFor="rating">Rating</label>
      <StarRatingField
        maxLength={150}
        name="rating"
    
      />
    </div>
  );
};

export default AddReviewForm;
