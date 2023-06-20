import React from "react";
import SelectMenu from "../Shared/SelectMenu";

const SortFilterSelect = ({
  filterOptions,
  onFilterChange,
  onSortChange,
  filterState,
  sortState,
}) => {
  const handleFilterChangeInternal = (e) => {
    const selectedValue = e.target.value;
    onFilterChange(selectedValue);
  };

  const handleSortChangeInternal = (e) => {
    const selectedValue = e.target.value;
    onSortChange(selectedValue);
  };

  return (
    <>
      <SelectMenu
        wrapperClassName="col-6 col-md-* custom-border-start d-flex flex-column h-auto justify-content-center px-2 py-2 sort"
        labelFor="sort-menu"
        labelClassName="ms-2 custom-sm-fs body-text-color"
        labelText="Sort by:"
        selectTitle="sort"
        selectId="sort-menu"
        selectClassName="custom-select border-none bg-transparent body-text-color"
        options={[
          { value: "default", label: "Default" },
          { value: "topic", label: "Topic Title" },
          { value: "name", label: "Author Name" },
        ]}
        value={sortState}
        onChange={handleSortChangeInternal}
      />
      <SelectMenu
        wrapperClassName="col-6 col-md-* col-md-2 custom-border-start d-flex filter flex-column h-auto justify-content-center px-2 py-2 w-50"
        labelFor="filter-menu"
        labelClassName="ms-1 custom-sm-fs body-text-color"
        labelText="Filter by:"
        selectTitle="filter"
        selectId="filter-menu"
        selectClassName="custom-select border-none bg-transparent body-text-color"
        options={filterOptions}
        value={filterState}
        onChange={handleFilterChangeInternal}
      />
    </>
  );
};

export default SortFilterSelect;
