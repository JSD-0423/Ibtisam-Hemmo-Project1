import React from "react";
import DetailsCard from "./DetailsCard";
import DetailsContent from "./DetailsContent";

const DetailsWrapper = ({
  category,
  description,
  name,
  id,
  rating,
  topic,
  image,
}) => {
  return (
    <div className="details-container position-relative py-3">
      <DetailsContent
        category={category}
        description={description}
        topic={topic}
        rating={rating}
      />
      <DetailsCard id={id} name={name} topic={topic} image={image} />
    </div>
  );
};

export default DetailsWrapper;
