import React, { useEffect, useState } from "react";
import { useDataFetching, useDebounce } from "../customHooks";
import { fetchTopics } from "../API/API.js";
import { Loading } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedSort, setSelectedSort] = useState("default");
  const [searchText, setSearchText] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  
  const debouncedSearchText = useDebounce(searchText, 500);
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

  useEffect(() => {
    handleFilterSort(topics);
  }, [selectedFilter, selectedSort, topics]);

  const handleSearchChange = (selectedValue) => {
    setSearchText(selectedValue);
  };

  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };

  const handleSortChange = (selectedValue) => {
    setSelectedSort(selectedValue);
  };

  const handleFilterSort = (topics) => {
    let altered = [...topics];

    if (selectedFilter !== "default") {
      altered = altered.filter((topic) => topic.category === selectedFilter);
    }

    if (selectedSort === "name") {
      altered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "topic") {
      altered.sort((a, b) => a.topic.localeCompare(b.topic));
    }

    setFilteredTopics(altered);
  };

  const shouldUseFilteredTopics =
    selectedFilter !== "default" || selectedSort !== "default";

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
            {error
              ? error
              : shouldUseFilteredTopics
              ? `"${filteredTopics.length}" Web Topics Found`
              : `"${topics.length}" Web Topics Found`}
          </h2>
          <CardsSection
            topics={shouldUseFilteredTopics ? filteredTopics : topics}
          />
        </>
      )}
    </main>
  );
};

export default Home;
