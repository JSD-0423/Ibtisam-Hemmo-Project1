import React from "react";

const FormInput = ({
  type,
  className,
  placeholder,
  ariaLabel,
  inputId,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      aria-label={ariaLabel}
      id={inputId}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
