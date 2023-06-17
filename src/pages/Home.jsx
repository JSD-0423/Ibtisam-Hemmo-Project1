import React, { useContext, useEffect, useState } from "react";

import { Header, Footer, Loading, Favorites } from "../components/Shared";
import { ActionMenuSection, CardsSection } from "../components/Home";
import { TopicsContext, FavoritesContext } from "../context";

const Home = () => {
  const { topics, loading, error } = useContext(TopicsContext);
  const { isFavoriteShown } = useContext(FavoritesContext);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedSort, setSelectedSort] = useState("default");

  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };

  const handleSortChange = (selectedValue) => {
    setSelectedSort(selectedValue);
  };

  useEffect(() => {
    let filtered = [...topics];

    if (selectedFilter !== "default") {
      filtered = filtered.filter((topic) => topic.category === selectedFilter);
    }

    if (selectedSort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "topic") {
      filtered.sort((a, b) => a.topic.localeCompare(b.topic));
    }

    setFilteredTopics(filtered);
  }, [topics, selectedFilter, selectedSort]);

  return (
    <>
      <Header />
      <main className="container-fluid custom-bg-color flex-grow-1">
        <ActionMenuSection
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
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
      <Footer />
      {isFavoriteShown && <Favorites />}
    </>
  );
};
export default Home;
