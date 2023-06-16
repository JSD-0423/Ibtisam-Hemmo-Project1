import React from "react";

const Rating = ({ rating }) => {
  const createRatingStars = (rating) => {
    const MAX_STARS = 5;
    const ratingPercentage = (rating / 100) * MAX_STARS;
    const wholeStars = Math.floor(ratingPercentage);
    const halfStars = Math.ceil(ratingPercentage - wholeStars);
    const emptyStars = MAX_STARS - wholeStars - halfStars;

    const stars = [];

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<ion-icon class="md hydrated" name="star"></ion-icon>);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<ion-icon class="md hydrated" name="star-half"></ion-icon>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<ion-icon class="md hydrated" name="star-outline"></ion-icon>);
    }

    return stars;
  };
  return <>{createRatingStars(rating)}</>;
};

export default Rating;
