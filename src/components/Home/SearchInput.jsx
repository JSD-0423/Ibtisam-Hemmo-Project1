import React, { useContext, useState } from "react";

import { TopicsContext } from "../../context";
import { debounce } from "../../utils/debounce";
import { FormInput } from "../Shared";

const SearchInput = () => {
  const { fetchData } = useContext(TopicsContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = debounce((value) => {
    fetchData(value);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

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
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
