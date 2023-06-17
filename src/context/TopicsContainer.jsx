import React, { useState, useEffect, useMemo, createContext } from "react";
import { fetchTopics, fetchTopic } from "../API/API.js";

export const TopicsContext = createContext();

export const TopicsContainer = ({ children }) => {
  const [originalTopics, setOriginalTopics] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (phrase = "") => {
    setLoading(true);

    try {
      const response = await fetchTopics(phrase);
      if (phrase) {
        setTopics(response);
      } else {
        setTopics(response);
        setOriginalTopics(response);
      }
    } catch (error) {
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

  const value = useMemo(
    () => ({
      topics,
      loading,
      error,
      fetchTopicById,
      fetchData,
      originalTopics,
    }),
    [topics, loading, error, fetchTopicById, originalTopics]
  );

  return (
    <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>
  );
};
