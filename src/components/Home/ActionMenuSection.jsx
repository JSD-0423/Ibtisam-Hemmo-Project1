import React from "react";

import { SearchInput, SortFilterSelect } from "./";

const ActionMenuSection = ({
  filterOptions,
  onFilterChange,
  onSortChange,
  filterState,
  sortState,
  searchState,
  onSearchChange,
}) => {
  return (
    <section
      role="search"
      className="col-md custom-default-bg-color custom-shadow d-flex flex-md-row flex-sm-column mt-3 mb-3 overflow-hidden rounded search-bar"
    >
      <SearchInput searchState={searchState} onSearchChange={onSearchChange} />
      <div className="col-12 col-md-4 d-flex fs-6">
        <SortFilterSelect
          filterOptions={filterOptions}
          onFilterChange={onFilterChange}
          onSortChange={onSortChange}
          filterState={filterState}
          sortState={sortState}
        />
      </div>
    </section>
  );
};

export default ActionMenuSection;
