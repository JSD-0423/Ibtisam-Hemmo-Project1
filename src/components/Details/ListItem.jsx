import React from "react";

const ListItem = ({ subTopics }) => {
  return (
    <ul className="p-0">
      {subTopics.map((item) => (
        <li
          className="align-items-center d-flex gap-3 item px-4 py-3"
          key={item}
        >
          <ion-icon
            name="checkmark-circle-outline"
            class="flex-shrink-0 fs-4 hydrated md secondary-color"
            role="img"
          ></ion-icon>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
