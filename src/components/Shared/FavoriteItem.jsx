import React from "react";
import { Rating } from "./";
const FavoriteItem = ({ image, rating, topic }) => {
  return (
    <div className="card border-0 custom-default-bg-color custom-shadow overflow-hidden rounded-1 card-w flex-shrink-0 fav-card">
      <img
        src={`/Ibtisam-Hemmo-Project1/assets/images/${image}`}
        alt=""
        className="card-top-img fav-img bg-white"
      />
      <div className="card-body p-1 body-text-color">
        {topic}
        <div className="text-orange mt-0">
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
