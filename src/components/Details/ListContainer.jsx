import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({ subTopics }) => {
  return (
    <div className="body-text-color custom-default-bg-color rounded-1 w-60 ">
      <h1 className="fs-4 fw-bold px-4 py-3">CSS Sub Topics</h1>
      <ListItem subTopics={subTopics} />
    </div>
  );
};

export default ListContainer;
