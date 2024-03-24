import { ErrorMessage, Field } from "formik";
import React from "react";
import "./Input.css";
import { TextError } from "./TextError.jsx";
const Input = (props) => {
  const { disabled, name, placeholder, type } = props;
  return (
    <div className="formContainerFormik">
      <Field
        {...props}
        style={{ ...props.style, minWidth: "120px" }}
        id={name}
        className={`input-shorttext`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { Input };