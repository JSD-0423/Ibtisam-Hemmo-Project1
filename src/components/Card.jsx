import React from "react";

const Card = () => {
  return (
    <div class="col">
      <a
        href="details.html?cardIndex=2"
        class="card custom-default-bg-color overflow-hidden border-0"
        data-index="2"
      >
        <div class="overflow-hidden bg-white">
          <img src="assets/css.webp" class="card-img-top object-fit-cover" />
        </div>
        <div class="card-body">
          <div class="card-content body-text-color">
            <p class="overflow-hidden mb-1">Web Development Languages</p>
            <h3 class="overflow-hidden fw-bold">CSS</h3>
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
            <div class="fs-custom text-lines-color">Author: David Lee</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
