// AddCompanyPopup.js
import React from 'react';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import * as api from '../../../Api/index.js';
import './AddCompanyPopup.css'; // Import CSS file for styling (create this file in the same directory)
import AddCompanyForm from './AddCompanyForm';
import Cancel from '../../../Asset/Cancel.svg'
import Dark from '../../../Asset/Dark.svg'
import Light from '../../../Asset/Light.svg'
import { useNavigate } from 'react-router-dom';
import { ShowToast } from '../../../FormComponent/ShowToast.jsx';
import { useSearch } from '../../../Context/SearchContext.js';
const validationSchema = Yup.object().shape({
  companyName: Yup.string().required('Company Name is required'),
  location: Yup.string().required('Location is required'),
  foundedOn: Yup.date().required('Founded On Date is required'),
  city: Yup.string().required('City is required')
});

const AddCompanyPopup = () => {
  const navigate=useNavigate()
  const {setLoading } = useSearch();

   const createCompany = async(company)  => {
    try {
      setLoading(true)
      const { data } = await api.createCompany(company);
    if(data)ShowToast('Form submitted successfully!')
    } catch (error) {
      ShowToast(error.message);
    }
    finally{
      setLoading(false)
    
    }
  };
  const handleSubmit = async(values, { setSubmitting }) => {
    // Call onSubmit callback to submit the form data
    createCompany(values)
  
    // Close the popup after submission
    onClose();
    setSubmitting(false);
  };
  const onClose=()=>{
    navigate('/')
  }
  
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className='ellipse-icon'> <img src={Dark} /> </div>
        <div className='ellipse-icon'>  <img src={Light} /></div>
        <div className='close-icon' onClick={onClose}> <img src={Cancel} /> </div>
        <h2 className='addHeading'>Add Company</h2>
        <Formik
       initialValues={{
            companyName: '',
            location: '', // Initialize with an empty string
            foundedOn: '',
            city: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <AddCompanyForm isSubmitting={isSubmitting}/>
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

export default AddCompanyPopup;
