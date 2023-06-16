import React, { useState, useEffect, useMemo, createContext } from "react";
import { fetchTopics, fetchTopic } from "../API/API.js";

export const TopicsContext = createContext();

const TopicsContainer = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTopics();
        setTopics(response);
      } catch (error) {
        setError("Something went wrong. Web topics failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchTopicById = async (id) => {
    setLoading(true);

    try {
      const response = await fetchTopic(id);
      setTopic(response);
      return topic;
    } catch (error) {
      setError("Failed to fetch topic details.");
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(
    () => ({ topics, loading, error, fetchTopicById, topic }),
    [topics, loading, error, fetchTopicById, topic]
  );

  return (
    <TopicsContext.Provider value={value}>{children}</TopicsContext.Provider>
  );
};

export default TopicsContainer;
