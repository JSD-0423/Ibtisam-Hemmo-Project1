import React from "react";

const SelectMenu = ({
  wrapperClassName,
  labelFor,
  labelClassName,
  labelText,
  selectTitle,
  selectId,
  selectClassName,
  options,
  value,
  onChange,
}) => {
  return (
    <>
      <div className={wrapperClassName}>
        <label htmlFor={labelFor} className={labelClassName}>
          {labelText}
        </label>
        <select
          title={selectTitle}
          id={selectId}
          className={selectClassName}
          value={value}
          onChange={onChange}
        >
          {options.map(({ value, label }, key) => (
            <option value={value} key={key}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectMenu;
