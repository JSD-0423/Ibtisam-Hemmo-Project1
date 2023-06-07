const createElement = (type, options, parent) => {
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

const createRatingStars = (rating, parent) => {
    const MAX_STARS = 5;
    const ratingPercentage = (rating / 5) * MAX_STARS;
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

async function fetchData(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Network response was not OK');
    }
    return await res.json();
}

function debounce(callback, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(callback, delay);
    };
}

function saveToLocalStorage(key, element) {
    localStorage.setItem(key, JSON.stringify(element));
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key) || '[]');
}

function attachEventListener(element, event, cb, time) {
    element.addEventListener(event, debounce(()=>cb(element), time));
}

export {
    createElement,
    createRatingStars,
    fetchData,
    debounce,
    saveToLocalStorage,
    getFromLocalStorage,
    attachEventListener
}
