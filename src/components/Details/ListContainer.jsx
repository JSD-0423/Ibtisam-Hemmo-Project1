import React from "react";
import ListItem from "./ListItem";

const ListContainer = () => {
  const items = [
    "CSS box model and layout",
    "CSS box model and layout",
    "CSS box model and layout",
    "CSS box model and layout",
    "CSS box model and layout",
  ];
  return (
    <div class="body-text-color custom-default-bg-color rounded-1 w-60 ">
      <h1 class="fs-4 fw-bold px-4 py-3">CSS Sub Topics</h1>
      <ListItem items={items} />
    </div>
  );
};

export default ListContainer;
