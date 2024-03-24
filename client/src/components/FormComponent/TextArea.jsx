import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
const TextArea = (props) => {
  const { name, placeholder, formikStyle } = props;
  return (
    <div className="formikComponentContainer" style={{ width: formikStyle }}>
      <Field
        as="textarea"
        style={{height: "80px"}}
        {...props}
        className="input-longtext"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { TextArea };