import data from './courses.js';
import { createElement, createRatingStars } from './common.js';

const urlParams = new URLSearchParams(window.location.search);
const cardIndex = urlParams.get('cardIndex');
const cardDetails = data[cardIndex];
const favorites = loadFavorites();
const favoritesContainer = document.querySelector('.favorites-container');
const deleteBtn = document.querySelector('.delete-btn');

const topicMoreContainer = document.querySelector('.topic-more');
if (topicMoreContainer) {
    const topicContainer = createElement('div', { class: 'topic-container' }, topicMoreContainer);
    createElement('h2', { class: 'course-type', textContent: cardDetails.description }, topicContainer);
    createElement('h3', { class: 'course-title', textContent: cardDetails.title }, topicContainer);
    const ratesContainer = createElement('div', { class: 'rate-container' }, topicContainer);
    createRatingStars(cardDetails.rating, ratesContainer);
    createElement('p', { class: 'course-description', textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quos.Corrupti ut eius voluptatem voluptatum quibusdam incidunt dolorem optio eveniet, eos unde inventoresaepe praesentium culpa blanditiis necessitatibus explicabo molestias, impedit eaque esse odit!Asperiores.' }, topicContainer);

    const courseContainer = createElement('div', { class: 'course-card-container', id: cardIndex }, topicMoreContainer);
    createElement('img', { src: cardDetails.image, alt: cardDetails.title }, courseContainer);
    const courseInfo = createElement('div', { class: 'course-info' }, courseContainer);
    const statement = createElement('p', {}, courseInfo);
    createElement('span', { class: 'course-title', textContent: cardDetails.title + ' by ' }, statement)
    createElement('span', { class: 'author', textContent: cardDetails.author }, statement)
    const moreContainer = createElement('div', { class: 'more-container' }, courseInfo);
    createElement('p', { textContent: 'Interested about this topic?' }, moreContainer);
    const addFav = createElement('button', { textContent: 'Add to Favorites', type: 'submit', class: 'add-fav' }, moreContainer);
    createElement('ion-icon', { name: 'heart-outline', class: 'heart-icon' }, addFav);
    createElement('p', { textContent: 'Unlimited Credits', class: 'credits' }, moreContainer);

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
        const deleteCardBtn = createElement('ion-icon', { class: 'delete-card-btn', name: 'trash-outline' }, cardInfo);
        deleteCardBtn.addEventListener('click', () => {
            const cardId = deleteCardBtn.parentNode.parentNode.id;
            console.log('cardId: ', cardId);
            const index = favorites.indexOf(cardId);
            if (index !== -1) {
                favorites.splice(index, 1);
                updateFavoritesContainer();
                saveFavorites()
            }
        })
    })
}

deleteBtn.addEventListener('click', () => {
    favorites.length = 0;
    updateFavoritesContainer();
    localStorage.setItem('favorites', JSON.stringify(favorites));

})

updateFavoritesContainer();
updateAddFavBtn();
