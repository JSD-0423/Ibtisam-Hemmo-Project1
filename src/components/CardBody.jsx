import React from "react";

const CardBody = ({topic, category}) => {
  return (
    <>
      <p class="overflow-hidden mb-1">{category}</p>
      <h3 class="overflow-hidden fw-bold">{topic}</h3>
    </>
  );
};

export default CardBody;
