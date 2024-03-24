// AddCompanyForm.js
import React from 'react';
import { DatePickerCustom } from '../../../FormComponent/DatePickerCustom';
import { Input } from '../../../FormComponent/Input';
import Location from '../../../FormComponent/Location';

const AddCompanyForm = () => {
  return (
    <div className='formCont'>
      <label className='addCompanyBody' htmlFor="companyName">Company Name</label>
      <Input
        maxLength={150}
        name="companyName"
        type="text"
        placeholder="Company Name"
      />
      <label className='addCompanyBody' htmlFor="location">Location</label>
      <Location name='location'/>
      <label className='addCompanyBody' htmlFor="foundedOn">Founded On</label>
      <DatePickerCustom
        maxLength={150}
        name="foundedOn"
        type="text"
        placeholder="Founded On"
      />
      <label className='addCompanyBody' htmlFor="city">City</label>
      <Input
        maxLength={150}
        name="city"
        type="text"
        placeholder="City"
      />
    </div>
  );
};

export default AddCompanyForm;
