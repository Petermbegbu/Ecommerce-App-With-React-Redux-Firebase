import React from "react";
import "./FormInput.css";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group">
    {label ? <label>{label}</label> : null}
    <input className="form-control" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
