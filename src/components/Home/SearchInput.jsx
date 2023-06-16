import React from "react";
import { FormInput } from "../Shared";

const SearchInput = () => {
  return (
    <div className="align-items-center col-12 col-md-8 d-flex py-md-0 py-sm-3 custom-border-bottom">
      <ion-icon
        class="position-absolute ms-3 body-text-color"
        name="search-outline"
        alt="Search Icon"
        aria-hidden="true"
      ></ion-icon>
      <FormInput
        type="text"
        className="body-text-color border-0 custom-default-bg-color fs-6 h-100 ps-5 w-100"
        placeholder="Search the website..."
        ariaLabel="Search input"
        inputId="search-input"
      />
    </div>
  );
};

export default SearchInput;
