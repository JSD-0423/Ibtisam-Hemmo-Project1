import React, { useContext, useState, useEffect } from "react";
import { TopicsContext } from "../../context";
import SelectMenu from "../Shared/SelectMenu";

const SortFilterSelect = ({ onFilterChange, onSortChange }) => {
  const { topics } = useContext(TopicsContext);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedSort, setSelectedSort] = useState("default");

  const handleFilterChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedFilter(selectedValue);
    onFilterChange(selectedValue);
  };

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    onSortChange(selectedValue);
  };

  useEffect(() => {
    const categories = [...new Set(topics.map((topic) => topic.category))];
    const options = categories.map((category) => ({
      value: category,
      label: category,
    }));
    setFilterOptions([{ value: "default", label: "Default" }, ...options]);
    setLoading(false);
  }, [topics]);

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
        onChange={handleSortChange}
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
        onChange={handleFilterChange}
      />
    </>
  );
};

export default SortFilterSelect;
