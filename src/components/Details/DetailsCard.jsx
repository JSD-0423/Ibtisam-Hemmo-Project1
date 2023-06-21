import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import TextIconButton from "../Shared/TextIconButton";

const DetailsCard = ({ image, name, id, topic }) => {
  const { addOrRemoveFavorite, favoriteTopics } = useContext(FavoritesContext);
  const isFavorite = favoriteTopics.includes(id);
  return (
    <div
      className="bg-white border-3 border-white card float-end position-absolute rounded-0"
      id={id}
    >
      <div className="overflow-hidden">
        <img
          src={`/assets/images/${image}`}
          alt={topic}
          className="card-img-top object-fit-cover"
        />
        <div className="d-flex flex-column gap-2 p-3">
          <div>
            <h3 className="fs-6 fw-bold d-inline">{topic}</h3>
            <span> by </span>
            <span className="text-link text-decoration-underline fs-custom">
              {name}
            </span>
          </div>
          <div className="border border-1 border-black border-opacity-10 d-flex flex-column gap-2 outlined-card p-3">
            <p className="mb-0">Interested about this topic?</p>
            <TextIconButton
              buttonClassName="add-fav align-items-center border-0 card-button d-flex flex-row-reverse fs-6 justify-content-around px-3 py-2 text-white rounded-0"
              iconClassName="heart-icon heard-card md hydrated"
              iconId="heart-icon"
              iconName={isFavorite ? "trash-outline" : "heart-outline"}
              buttonSpanText={
                isFavorite ? "Remove from Favorites" : "Add to Favorites"
              }
              buttonSpanId="mode-text"
              spanClassName=""
              buttonFunction={() => addOrRemoveFavorite(id)}
            />
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
