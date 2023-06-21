import React from "react";

import CardWrapper from "./CardWrapper";

const CardsSection = ({ topics }) => {
  return (
    <div className="cards row d-flex g-4 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-4 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
      {topics.map((topic) => (
        <CardWrapper
          id={topic.id}
          image={topic.image}
          name={topic.name}
          topic={topic.topic}
          category={topic.category}
          rating={topic.rating}
          key={topic.topic}
        />
      ))}
    </div>
  );
};

export default CardsSection;
