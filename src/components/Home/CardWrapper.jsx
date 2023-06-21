import React from "react";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";

const CardWrapper = ({
  id,
  topic,
  image,
  category,
  name,
  rating,
  imagePath,
}) => {
  return (
    <div className="col">
      <Link
        to={`/details/${id}`}
        className="card custom-default-bg-color overflow-hidden border-0"
        data-index={id}
      >
        <TopicCard
          topic={topic}
          image={image}
          category={category}
          name={name}
          rating={rating}
          imagePath={imagePath}
        />
      </Link>
    </div>
  );
};

export default CardWrapper;
