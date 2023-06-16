import React from "react";
import SelectMenu from "../Shared/SelectMenu";

const SortFilterSelect = () => {
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
        options={
          [{ value: "default", label: "Default" },
          { value: "front-end", label: "Front End" },
          { value: "back-end", label: "Back End" }]
        }
      />
      <SelectMenu
        wrapperClassName="col-6 col-md-* col-md-2 custom-border-start d-flex filter flex-column h-auto justify-content-center px-2 py-2 w-50"
        labelFor="filter-menu"
        labelClassName="ms-1 custom-sm-fs body-text-color"
        labelText="Filter by:"
        selectTitle="filter"
        selectId="filter-menu"
        selectClassName="custom-select border-none bg-transparent body-text-color"
        options={
          [{ value: "default", label: "Default" },
          { value: "topic-title", label: "Topic Title" },
          { value: "author-name", label: "Author Name" }]
        }
      />
    </>
  );
};

export default SortFilterSelect;
