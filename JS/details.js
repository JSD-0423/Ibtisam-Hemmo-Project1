import data from './courses.js';
import { createElement, createRatingStars } from './common.js';

const urlParams = new URLSearchParams(window.location.search);
const cardIndex = urlParams.get('cardIndex');
const cardDetails = data[cardIndex];
console.log('cardDetails: ', cardDetails);

const aboutContainer = document.querySelector('.topic-more');

const topicContainer = createElement('div', { class: 'topic-container' }, aboutContainer);
createElement('h2', { class: 'course-type', textContent: cardDetails.description }, topicContainer);
createElement('h3', { class: 'course-title', textContent: cardDetails.title }, topicContainer);
const ratesContainer = createElement('div', { class: 'rate-container' }, topicContainer);
createRatingStars(cardDetails.rating, ratesContainer);
createElement('p', { class: 'course-description', textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quos.Corrupti ut eius voluptatem voluptatum quibusdam incidunt dolorem optio eveniet, eos unde inventoresaepe praesentium culpa blanditiis necessitatibus explicabo molestias, impedit eaque esse odit!Asperiores.' }, topicContainer);

const courseContainer = createElement('div', { class: 'course-card-container' }, aboutContainer);
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

