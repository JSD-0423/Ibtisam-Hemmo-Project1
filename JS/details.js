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
    const textContainer = createElement('div', { class: 'text-container shared-width' }, details);
    const container1 = createElement('div', {}, textContainer);
    createElement('h2', { class: 'colored-title', textContent: cardDetails.description }, container1);
    createElement('h3', { class: 'course-title', textContent: cardDetails.title }, container1);
    const ratesContainer = createElement('div', { class: 'icons-container' }, container1);
    createRatingStars(cardDetails.rating, ratesContainer);
    createElement('p', { class: 'semi-bold', textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quos.Corrupti ut eius voluptatem voluptatum quibusdam incidunt dolorem optio eveniet, eos unde inventoresaepe praesentium culpa blanditiis necessitatibus explicabo molestias, impedit eaque esse odit!Asperiores.' }, textContainer);

    const courseContainer = createElement('div', { class: 'card', id: cardIndex }, details);
    const card = createElement('div', {}, courseContainer);

    createElement('img', { src: cardDetails.image, alt: cardDetails.title }, card);
    const courseInfo = createElement('div', { class: 'card-outside-details' }, card);
    const statement = createElement('div', {}, courseInfo);
    createElement('h3', { textContent: cardDetails.title }, statement)
    createElement('span', { textContent: ' by ' }, statement)
    createElement('span', { class: 'text-link', textContent: cardDetails.author }, statement)
    const outlinedCard = createElement('div', { class: 'outlined-card' }, courseInfo);
    createElement('p', { textContent: 'Interested about this topic?' }, outlinedCard);
    const addFav = createElement('button', { textContent: 'Add to Favorites', type: 'submit', class: 'card-button add-fav' }, outlinedCard);
    createElement('ion-icon', { name: 'heart-outline', class: 'heart-icon heard-card' }, addFav);
    createElement('p', { textContent: 'Unlimited Credits', class: 'credits' }, outlinedCard);

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
    favoritesContainer.innerHTML = ''
    favorites.map(ele => {
        const favCard = createElement('div', { class: 'fav-card', id: ele }, favoritesContainer);
        createElement('img', { src: data[ele].image, alt: data[ele].title, class: 'fav-img' }, favCard);
        const cardInfo = createElement('div', { class: 'card-info' }, favCard);
        createElement('h5', { textContent: data[ele].title }, cardInfo);
        const rateContainer = createElement('div', { class: 'rates-container' }, cardInfo);
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

// deleteBtn.addEventListener('click', () => {
//     favorites.length = 0;
//     updateFavoritesContainer();
//     localStorage.setItem('favorites', JSON.stringify(favorites));

// })

updateFavoritesContainer();
updateAddFavBtn();
