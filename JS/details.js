import data from './courses.js';
import { createElement, createRatingStars } from './common.js';

const urlParams = new URLSearchParams(window.location.search);
const cardIndex = urlParams.get('cardIndex');
const cardDetails = data[cardIndex];
const favorites = loadFavorites();
const favoritesContainer = document.querySelector('.favorites-container');
// const deleteBtn = document.querySelector('.delete-btn');

const details = document.querySelector('.details-container');
if (details) {
    const textContainer = createElement('div', { class: 'text-container w-60 text-white d-flex flex-column gap-3 py-2' }, details);
    const container1 = createElement('div', {}, textContainer);
    createElement('h2', { class: 'secondary-color fw-semibold fs-6', textContent: cardDetails.description }, container1);
    createElement('h3', { class: 'fs-5 fw-bold', textContent: cardDetails.title }, container1);
    const ratesContainer = createElement('div', { class: 'text-orange mt-0' }, container1);
    createRatingStars(cardDetails.rating, ratesContainer);
    createElement('p', { textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quos.Corrupti ut eius voluptatem voluptatum quibusdam incidunt dolorem optio eveniet, eos unde inventoresaepe praesentium culpa blanditiis necessitatibus explicabo molestias, impedit eaque esse odit!Asperiores.' }, textContainer);

    const courseContainer = createElement('div', { class: 'bg-white border-3 border-white card float-end position-absolute rounded-0', id: cardIndex }, details);
    const card = createElement('div', { class: 'overflow-hidden' }, courseContainer);

    createElement('img', { src: cardDetails.image, alt: cardDetails.title, class: 'card-img-top object-fit-cover' }, card);
    const courseInfo = createElement('div', { class: 'd-flex flex-column gap-2 p-3' }, card);
    const statement = createElement('div', {}, courseInfo);
    createElement('h3', { textContent: cardDetails.title, class: 'fs-6 fw-bold d-inline' }, statement)
    createElement('span', { textContent: ' by ' }, statement)
    createElement('span', { class: 'text-link text-decoration-underline fs-custom', textContent: cardDetails.author }, statement)
    const outlinedCard = createElement('div', { class: 'border border-1 border-black border-opacity-10 d-flex flex-column gap-2 outlined-card p-3' }, courseInfo);
    createElement('p', { textContent: 'Interested about this topic?', class: 'mb-0' }, outlinedCard);
    const addFav = createElement('button', { textContent: 'Add to Favorites', type: 'submit', class: 'add-fav align-items-center border-0 card-button d-flex fs-5 justify-content-around px-3 py-2 text-white' }, outlinedCard);
    createElement('ion-icon', { name: 'heart-outline', class: 'heart-icon heard-card' }, addFav);
    createElement('p', { textContent: 'Unlimited Credits', class: ' fs-custom mb-0 opacity-50 text-black text-center' }, outlinedCard);

    addFav.addEventListener('click', () => {
        if (!favorites.includes(cardIndex)) {
            favorites.push(cardIndex);
            updateFavoritesContainer();
            updateAddFavBtn()
        }
        saveFavorites();
    });
}

function loadFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateAddFavBtn() {
    const addFav = document.querySelector('.add-fav')
    if (favorites.includes(cardIndex)) {
        addFav.textContent = 'Added to Favorites';
        addFav.disabled = true;
    }
}

function updateFavoritesContainer() {
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = 'No favorites yet, browse some courses and pick yours'
    } else {
        favoritesContainer.innerHTML = ''
        favorites.map(ele => {
            const favCard = createElement('div', { class: 'card border-0 custom-default-bg-color custom-shadow overflow-hidden rounded-1 card-w flex-shrink-0 fav-card', id: ele }, favoritesContainer);
            createElement('img', { src: data[ele].image, alt: data[ele].title, class: ' card-top-img fav-img' }, favCard);
            const cardInfo = createElement('div', { class: 'card-body p-1' }, favCard);
            createElement('h5', { textContent: data[ele].title, class: "fs-6 fw-bold overflow-hidden" }, cardInfo);
            const rateContainer = createElement('div', { class: 'text-orange' }, cardInfo);
            createRatingStars(data[ele].rating, rateContainer);
            // const deleteCardBtn = createElement('ion-icon', { class: 'delete-card-btn', name: 'trash-outline' }, cardInfo);
            // deleteCardBtn.addEventListener('click', () => {
            //     const cardId = deleteCardBtn.parentNode.parentNode.id;
            //     console.log('cardId: ', cardId);
            //     const index = favorites.indexOf(cardId);
            //     if (index !== -1) {
            //         favorites.splice(index, 1);
            //         updateFavoritesContainer();
            //         saveFavorites()
            //     }
            // })
        })
    }
}

// deleteBtn.addEventListener('click', () => {
//     favorites.length = 0;
//     updateFavoritesContainer();
//     localStorage.setItem('favorites', JSON.stringify(favorites));

// })

updateFavoritesContainer();
updateAddFavBtn();
