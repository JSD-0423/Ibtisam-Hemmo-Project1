import React from "react";
import Rating from "../Shared/Rating";

const DetailsContent = ({ category, description, topic, rating }) => {
  return (
    <div className="text-container w-60 text-white d-flex flex-column gap-3 py-2">
      <div>
        <h2 className="secondary-color fw-semibold fs-6">{category}</h2>
        <h3 className="fs-5 fw-bold">{topic}</h3>
        <div className="text-orange mt-0">
          <Rating rating={rating} />
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default DetailsContent;
