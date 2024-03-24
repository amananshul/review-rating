// AddReviewPopup.js
import React from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import * as api from '../../../Api/index.js';
import AddReviewForm from './AddReviewForm.jsx';
import Cancel from '../../../Asset/Cancel.svg'
import Dark from '../../../Asset/Dark.svg'
import Light from '../../../Asset/Light.svg'
import { useNavigate, useParams } from 'react-router-dom';
import { ShowToast } from '../../../FormComponent/ShowToast.jsx';
import { useSearch } from '../../../Context/SearchContext.js';
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  subject: Yup.string().required('Subject is required'),
  rating: Yup.string().required('Rating is required'),
  description: Yup.string().required('Description is required')
});

const AddReviewPopup = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const { setLoading } = useSearch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoading(true)
      const response = await api.createReview(`${id}`, values);
      if(response.data)ShowToast('Form submitted successfully!')
      onClose(); 
      // Close the popup after successful submission
    } catch (error) {
      ShowToast('Error submitting review:', error);
    } finally {
      setLoading(false)
      setSubmitting(false);
    }
  };


  // Rest of the component code...
  const onClose=()=>{
    navigate(-1)
  }
  
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className='ellipse-icon'> <img src={Dark} /> </div>
        <div className='ellipse-icon'>  <img src={Light} /></div>
        <div className='close-icon' onClick={onClose}> <img src={Cancel} /> </div>
        <h2 className='addHeading'>Add Review</h2>
        <Formik
       initialValues={{
            name: '',
            subject: '', // Initialize with an empty string
            rating: '',
            description: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <AddReviewForm isSubmitting={isSubmitting}/>
              <div className="buttons">
                <button type="submit" disabled={isSubmitting}>Save</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddReviewPopup;
