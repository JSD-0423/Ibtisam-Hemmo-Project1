import React, { useState, useEffect, useMemo, createContext } from "react";
import { fetchTopics, fetchTopic } from "../API/API.js";

export const TopicsContext = createContext();

export const TopicsContainer = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("default");
  const [selectedSort, setSelectedSort] = useState("default");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (phrase = "") => {
    setLoading(true);

    try {
      const response = await fetchTopics(phrase);
      if (phrase) {
        setFilteredTopics(response);
      } else {
        setTopics(response);
        setFilteredTopics(response);
      }
    } catch (error) {
      console.log('error: ', error);
      setError("Failed to fetch topics.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchTopicById = async (id) => {
    setLoading(true);

    try {
      const response = await fetchTopic(id);
      return response;
    } catch (error) {
      setError("Failed to fetch topic details.");
    } finally {
      setLoading(false);
    }
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
  
  const handleFilterChange = (selectedValue) => {
    setSelectedFilter(selectedValue);
  };

  const handleSortChange = (selectedValue) => {
    setSelectedSort(selectedValue);
  };

  const value = useMemo(
    () => ({
      topics,
      loading,
      error,
      fetchTopicById,
      fetchData,
      filteredTopics,
      handleFilterChange,
      handleSortChange,
    }),
    [topics, loading, error, fetchTopicById, filteredTopics]
  );

  return (
    <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>
  );
};
