import React from "react";
import { SearchInput, SortFilterSelect } from "./";

const ActionMenuSection = () => {
  return (
    <section
      role="search"
      className="col-md custom-default-bg-color custom-shadow d-flex flex-md-row flex-sm-column mt-3 mb-3 overflow-hidden rounded search-bar"
    >
      <SearchInput />
      <div className="col-12 col-md-4 d-flex fs-6">
        <SortFilterSelect />
      </div>
    </section>
  );
};

export default ActionMenuSection;
