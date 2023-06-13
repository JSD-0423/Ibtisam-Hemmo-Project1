import React from "react";
import Card from "./Card";

const CardWrapper = ({ id, data }) => {
  return (
    <div class="col">
      <a
        href={`details.html?cardIndex=${id}`}
        class="card custom-default-bg-color overflow-hidden border-0"
        data-index={id}
      >
        <Card data={data} />
      </a>
    </div>
  );
};

export default CardWrapper;
