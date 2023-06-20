import React from "react";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { TopicsContext } from "../../context/TopicsContainer";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
  const { originalTopics } = useContext(TopicsContext);
  const { favoriteTopics } = useContext(FavoritesContext);

  const favoriteTopicsData = favoriteTopics.map((topicId) =>
    originalTopics.find((topic) => topic.id === topicId)
  );

  return (
    <section
      id="popup-container"
      className="body-text-color bottom-0 container-fluid custom-default-bg-color position-fixed py-3 w-100 shadow-lg"
      role="complementary"
      aria-labelledby="popup-favorites"
    >
      <h2 className="fs-5 fw-bold">My Favorite Topics</h2>
      <div className="d-flex favorites-container gap-3 mt-3 overflow-auto">
        {favoriteTopicsData.length === 0 ? (
          <p>
            No favorite topics found yet. Browse some courses and pick yours
          </p>
        ) : (
          favoriteTopicsData.map((topic) => (
            <FavoriteItem
              key={topic?.id}
              image={topic?.image}
              rating={topic?.rating}
              topic={topic?.topic}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Favorites;
