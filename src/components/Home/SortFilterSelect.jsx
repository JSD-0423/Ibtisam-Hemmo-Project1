import React, { useContext, useEffect, useState } from "react";
import { TopicsContext } from "../../context";
import SelectMenu from "../Shared/SelectMenu";

const SortFilterSelect = () => {
  const {
    topics,
    selectedFilter,
    selectedSort,
    handleFilterChange,
    handleSortChange,
  } = useContext(TopicsContext);
  const [filterOptions, setFilterOptions] = useState([]);

  useEffect(() => {
    const categories = [...new Set(topics.map((topic) => topic.category))];
    const options = categories.map((category) => ({
      value: category,
      label: category,
    }));
    setFilterOptions([{ value: "default", label: "Default" }, ...options]);
  }, [topics]);

  const handleFilterChangeInternal = (e) => {
    const selectedValue = e.target.value;
    handleFilterChange(selectedValue);
  };

  const handleSortChangeInternal = (e) => {
    const selectedValue = e.target.value;
    handleSortChange(selectedValue);
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
        value={selectedSort}
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
        value={selectedFilter}
        onChange={handleFilterChangeInternal}
      />
    </>
  );
};

export default SortFilterSelect;
