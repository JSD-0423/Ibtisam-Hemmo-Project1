export const createElement = (type, options, parent) => {
    const element = document.createElement(type);
    for (let option in options) {
        if (option == 'textContent') {
            element.textContent = options[option];
        }
        else {
            element.setAttribute(option, options[option]);
        }
    }
    parent.appendChild(element);
    return element;
}

export const createRatingStars = (rating, parent) => {
    const MAX_STARS = 5;
    const ratingPercentage = (rating / 100) * MAX_STARS;
    const wholeStars = Math.floor(ratingPercentage);
    const halfStars = Math.ceil(ratingPercentage - wholeStars);
    const emptyStars = MAX_STARS - wholeStars - halfStars;

    for (let i = 0; i < wholeStars; i++) {
        createElement('ion-icon', { name: 'star' }, parent);
    }
    for (let i = 0; i < halfStars; i++) {
        createElement('ion-icon', { name: 'star-half' }, parent);
    }
    for (let i = 0; i < emptyStars; i++) {
        createElement('ion-icon', { name: 'star-outline' }, parent);
    }
};
