import React, { createContext, useState, useEffect, useMemo } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [isFavoriteShown, setIsFavoriteShown] = useState(false);
  const [favoriteTopics, setFavoriteTopics] = useState([]);

  const toggleFavoriteContainer = () => {
    setIsFavoriteShown(!isFavoriteShown);
  };

  const addOrRemoveFavorite = (topicId) => {
    if (favoriteTopics.includes(topicId)) {
      removeFavorite(topicId);
    } else {
      addFavorite(topicId);
    }
  };

  const addFavorite = (topicId) => {
    setFavoriteTopics([...favoriteTopics, topicId]);
  };

  const removeFavorite = (topicId) => {
    const updatedFavorites = favoriteTopics.filter((id) => id !== topicId);
    setFavoriteTopics(updatedFavorites);
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoriteTopics(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (favoriteTopics.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favoriteTopics));
    }
  }, [favoriteTopics]);

  const value = useMemo(
    () => ({
      isFavoriteShown,
      toggleFavoriteContainer,
      favoriteTopics,
      addOrRemoveFavorite,
    }),
    [isFavoriteShown, favoriteTopics]
  );
  if (!favoriteTopics) return null;
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
