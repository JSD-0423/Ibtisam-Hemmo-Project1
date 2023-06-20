import React, { createContext, useState, useEffect, useMemo } from "react";

export const FavoritesContext = createContext();

const getStoredFavorites = () => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error("Error while retrieving favorites from localStorage:", error);
    return [];
  }
};

export const FavoritesProvider = ({ children }) => {
  const [isFavoriteShown, setIsFavoriteShown] = useState(false);
  const [favoriteTopics, setFavoriteTopics] = useState(getStoredFavorites());

  const toggleFavoriteContainer = () => {
    setIsFavoriteShown((prevIsFavoriteShown) => !prevIsFavoriteShown);
  };

  const addOrRemoveFavorite = (topicId) => {
    if (favoriteTopics.includes(topicId)) {
      removeFavorite(topicId);
    } else {
      addFavorite(topicId);
    }
  };

  const addFavorite = (topicId) => {
    setFavoriteTopics((prevFavoriteTopics) => [...prevFavoriteTopics, topicId]);
  };

  const removeFavorite = (topicId) => {
    setFavoriteTopics((prevFavoriteTopics) =>
      prevFavoriteTopics.filter((id) => id !== topicId)
    );
  };

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favoriteTopics));
    } catch (error) {
      console.error("Error while storing favorites in localStorage:", error);
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

  if (!favoriteTopics) {
    return null;
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
