import { createElement, createRatingStars } from './common.js';

const urlParams = new URLSearchParams(window.location.search);
const cardIndex = urlParams.get('cardIndex');
const loadingSpinner = document.querySelector('.loading');

const details = document.querySelector('.details-container');
const listContainer = document.querySelector('.list-items-container');
const favoritesContainer = document.querySelector('.favorites-container');
let cardDetails = [];
loadingSpinner.style.display = 'block';

fetch(`https://tap-web-1.herokuapp.com/topics/details/${cardIndex}`)
    .then((res) => res.json())
    .then((data) => {
        cardDetails = data;
        createDetailsCard(data)
        createList(data.subtopics)
        loadingSpinner.style.display = 'none';

    })
    .catch((err) => {
        loadingSpinner.style.display = 'none';
        console.error(err)
    })

function createDetailsCard(cardDetails) {
    const { category, topic, rating, description, image, name } = cardDetails;

    const textContainer = createElement('div', { class: 'text-container w-60 text-white d-flex flex-column gap-3 py-2' }, details);
    const container1 = createElement('div', {}, textContainer);
    createElement('h2', { class: 'secondary-color fw-semibold fs-6', textContent: category }, container1);
    createElement('h3', { class: 'fs-5 fw-bold', textContent: topic }, container1);
    const ratesContainer = createElement('div', { class: 'text-orange mt-0' }, container1);
    createRatingStars(rating, ratesContainer);
    createElement('p', { textContent: description }, textContainer);

    const courseContainer = createElement('div', { class: 'bg-white border-3 border-white card float-end position-absolute rounded-0', id: cardIndex }, details);
    const card = createElement('div', { class: 'overflow-hidden' }, courseContainer);

    createElement('img', { src: './assets/' + image, alt: topic, class: 'card-img-top object-fit-cover' }, card);
    const courseInfo = createElement('div', { class: 'd-flex flex-column gap-2 p-3' }, card);
    const statement = createElement('div', {}, courseInfo);
    createElement('h3', { textContent: topic, class: 'fs-6 fw-bold d-inline' }, statement)
    createElement('span', { textContent: ' by ' }, statement)
    createElement('span', { class: 'text-link text-decoration-underline fs-custom', textContent: name }, statement)
    const outlinedCard = createElement('div', { class: 'border border-1 border-black border-opacity-10 d-flex flex-column gap-2 outlined-card p-3' }, courseInfo);
    createElement('p', { textContent: 'Interested about this topic?', class: 'mb-0' }, outlinedCard);
    const addFav = createElement('button', { textContent: 'Add to Favorites', type: 'submit', class: 'add-fav align-items-center border-0 card-button d-flex fs-5 justify-content-around px-3 py-2 text-white' }, outlinedCard);
    createElement('ion-icon', { name: 'heart-outline', class: 'heart-icon heard-card' }, addFav);
    createElement('p', { textContent: 'Unlimited Credits', class: ' custom-sm-fs mb-0 opacity-50 text-black text-center' }, outlinedCard);
}

function createList(data) {
    const itemsContainer = createElement('div', { class: 'body-text-color custom-default-bg-color rounded-1 w-60 ' }, listContainer);
    createElement('h1', { class: 'fs-4 fw-bold px-4 py-3', textContent: `${cardDetails.topic} Sub Topics` }, itemsContainer);
    const listItems = createElement('ul', { class: 'p-0' }, itemsContainer);
    data.map((subTopic) => {
        const item = createElement('li', { class: 'align-items-center d-flex gap-3 item px-4 py-3' }, listItems)
        createElement('ion-icon', { name: 'checkmark-circle-outline', class: 'flex-shrink-0 fs-4 hydrated md secondary-color' }, item)
        createElement('span', { textContent: subTopic }, item)
    })
}

