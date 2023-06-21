import React from "react";
import { Rating } from "../Shared";

const TopicCard = ({ image, category, name, rating, topic, imagePath }) => {
  return (
    <>
      <div className="overflow-hidden bg-white">
        <img
          src={`${imagePath}/${image}`}
          className="card-img-top object-fit-cover"
        />
      </div>
      <div className="card-body">
        <div className="card-content body-text-color">
          <h2 className="overflow-hidden mb-1 fs-custom">{category}</h2>
          <h3 className="overflow-hidden fw-bold">{topic}</h3>
        </div>
        <div>
          <div className="text-orange mb-2 mt-3">
            {<Rating rating={rating} />}
          </div>
          <div className="fs-custom text-lines-color">Author: {name}</div>
        </div>
      </div>
    </>
  );
};

export default TopicCard;
