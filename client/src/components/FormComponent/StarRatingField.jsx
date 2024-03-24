// StarRatingField.jsx
import React from 'react';
import { useField } from 'formik';
import StarRating from './StarRating';

const StarRatingField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <StarRating
        {...field}
        {...props}
        onChange={(value) => {
          const changeEvent = {
            target: {
              name: field.name,
              value: value,
            },
          };
          field.onChange(changeEvent);
        }}
      />
      {meta.touched && meta.error ? <div className="form-error">{meta.error}</div> : null}
    </div>
  );
};

export default StarRatingField;
