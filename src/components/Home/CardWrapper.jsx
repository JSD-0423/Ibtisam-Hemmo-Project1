import React from "react";
import { Link } from "react-router-dom";
import TopicCard from "./TopicCard";

const CardWrapper = ({ id, data }) => {
  return (
    <div className="col">
      <Link
        to={`/details/${id}`}
        className="card custom-default-bg-color overflow-hidden border-0"
        data-index={id}
      >
        <TopicCard data={data} />
      </Link>
    </div>
  );
};

export default CardWrapper;
