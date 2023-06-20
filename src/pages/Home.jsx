import React, { useEffect, useState } from "react";
import { useDataFetching, useDebounce } from "../customHooks";
import { fetchTopics } from "../API/API.js";
import { Loading } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedSort, setSelectedSort] = useState("default");
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);
  const [filterOptions, setFilterOptions] = useState([]);

  const {
    data: topics,
    loading,
    error,
  } = useDataFetching(fetchTopics, debouncedSearchText);

  useEffect(() => {
    const categories = [...new Set(topics.map((topic) => topic.category))];
    const options = categories.map((category) => ({
      value: category,
      label: category,
    }));
    setFilterOptions([{ value: "default", label: "Default" }, ...options]);
  }, [topics]);

  const handleSearchChange = (selectedValue) => {
    setSearchText(selectedValue);
  };
  
  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };

  const handleSortChange = (selectedValue) => {
    setSelectedSort(selectedValue);
  };

  let filteredTopics = [...topics];

  if (selectedFilter !== "default") {
    filteredTopics = filteredTopics.filter(
      (topic) => topic.category === selectedFilter
    );
  }

  if (selectedSort === "name") {
    filteredTopics.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSort === "topic") {
    filteredTopics.sort((a, b) => a.topic.localeCompare(b.topic));
  }
  return (
    <main className="container-fluid custom-bg-color flex-grow-1">
      <ActionMenuSection
        filterOptions={filterOptions}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        filterState={selectedFilter}
        sortState={selectedSort}
        searchState={searchText}
        onSearchChange={handleSearchChange}
      />
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="subtitle fs-5 mb-4 fw-bold error-msg body-text-color">
            {error ? error : `"${filteredTopics.length}" Web Topics Found`}
          </h2>
          <CardsSection topics={filteredTopics} />
        </>
      )}
    </main>
  );
};

export default Home;
