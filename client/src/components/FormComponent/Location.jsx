import { ErrorMessage, Field } from 'formik'
import React from 'react'
import LocationDropdown from './LocationDropdown'
import { TextError } from './TextError'

const Location = ({ name, ...props }) => {
  return (
   <div className="formContainerFormik">
   
   <Field {...props} name={name} component={LocationDropdown} />
   <ErrorMessage name={name} component={TextError} />
   </div>
  )
}

export default Location
