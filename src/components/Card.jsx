import React from "react";

const Card = ({ data }) => {
  const { img, category, topic, author } = data;
  return (
    <>
      <div class="overflow-hidden bg-white">
        <img src={`../assets/${img}`} class="card-img-top object-fit-cover" />
      </div>
      <div class="card-body">
        <div class="card-content body-text-color">
          <p class="overflow-hidden mb-1">{category}</p>
          <h3 class="overflow-hidden fw-bold">{topic}</h3>
        </div>
        <div>
          <div class="text-orange mb-2 mt-3">
            <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
            <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
            <ion-icon name="star" role="img" class="md hydrated"></ion-icon>
            <ion-icon
              name="star-half"
              role="img"
              class="md hydrated"
            ></ion-icon>
            <ion-icon
              name="star-outline"
              role="img"
              class="md hydrated"
            ></ion-icon>
          </div>
          <div class="fs-custom text-lines-color">Author: {author}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
