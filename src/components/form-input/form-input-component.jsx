import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherParams }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherParams} />

    {label ? (
      <label
        className={`${
          otherParams.value.lenght ? "shrink" : " "
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
