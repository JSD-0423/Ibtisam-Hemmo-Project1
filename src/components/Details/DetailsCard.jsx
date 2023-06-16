import React from "react";

const DetailsCard = () => {
  return (
    <div
      className="bg-white border-3 border-white card float-end position-absolute rounded-0"
      id="2"
    >
      <div className="overflow-hidden">
        <img
          src="../../assets/images/css.webp"
          alt="CSS"
          className="card-img-top object-fit-cover"
        />
        <div className="d-flex flex-column gap-2 p-3">
          <div>
            <h3 className="fs-6 fw-bold d-inline">CSS</h3>
            <span> by </span>
            <span className="text-link text-decoration-underline fs-custom">
              David Lee
            </span>
          </div>
          <div className="border border-1 border-black border-opacity-10 d-flex flex-column gap-2 outlined-card p-3">
            <p className="mb-0">Interested about this topic?</p>
            <button
              type="submit"
              className="add-fav align-items-center border-0 card-button d-flex fs-6 justify-content-around px-3 py-2 text-white"
            >
              Add to Favorites
              <ion-icon
                name="heart-outline"
                className="heart-icon heard-card md hydrated"
                role="img"
              ></ion-icon>
            </button>
            <p className=" custom-sm-fs mb-0 opacity-50 text-black text-center">
              Unlimited Credits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
