import React from "react";

const FormInput = ({ type, className, placeholder, ariaLabel, inputId }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={ariaLabel}
      id={inputId}
    />
  );
};

export default FormInput;
