import React, { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const [value, setValue] = useState(false);
  const { label, errorMessage, ...inputProps } = props;

  const handleSubmit = () => {
    setValue(true);
    console.log("asd");
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        required
        {...inputProps}
        onBlur={handleSubmit}
        focused={value.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
