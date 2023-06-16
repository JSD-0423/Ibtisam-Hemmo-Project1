import React from "react";

const ListItem = ({ items }) => {
  return (
    <ul class="p-0">
      {items.map((item) => (
        <li class="align-items-center d-flex gap-3 item px-4 py-3">
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
