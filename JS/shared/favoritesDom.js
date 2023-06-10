import { createElement, createRatingStars } from "../DOM/DOM_Helpers.js";
import { getTopics } from "../home/retrieveData.js";
import { loadFavorites } from "./favorites.js";

const favoritesBtn = document.querySelector('.favorites');
const favPopUp = document.getElementById('popup-container');
const favIcon = document.getElementById('fav-icon');
const favoritesContainer = document.querySelector('.favorites-container');

favoritesBtn.addEventListener('click', () => toggleFavorites());


function toggleFavorites() {
    if (favPopUp.style.display === 'block') {
        favPopUp.style.display = 'none';
        favIcon.setAttribute('name', 'heart-outline');
        favIcon.style.color = 'black';
    } else {
        favPopUp.style.display = 'block';
        favIcon.setAttribute('name', 'heart');
        favIcon.style.color = 'red';
    }
}

async function updateFavoritesContainer() {
    try {
        const courses = await getTopics();
        const favorites = loadFavorites();
        const matchedCourses = updateFavorites(favorites, courses);
        renderFavorites(matchedCourses);
    } catch (err) {
        console.log('err: ', err);
    }
}

function renderFavorites(favorites) {
    favoritesContainer.innerHTML = ''
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = 'No favorites yet, Browse some courses and pick yours'
    } else {
        favorites.forEach(course => {
            const favCard = createElement('div', { class: 'card border-0 custom-default-bg-color custom-shadow overflow-hidden rounded-1 card-w flex-shrink-0 fav-card', id: course }, favoritesContainer);
            createElement('img', { src: './assets/' + course.image, alt: course.topic, class: ' card-top-img fav-img' }, favCard);
            const cardInfo = createElement('div', { class: 'card-body p-1' }, favCard);
            createElement('h5', { textContent: course.topic, class: "fs-6 fw-bold overflow-hidden body-text-color" }, cardInfo);
            const rateContainer = createElement('div', { class: 'text-orange' }, cardInfo);
            createRatingStars(course.rating, rateContainer);
        })
    }
}

function updateFavorites(favorites, courses) {
    let matchedCourses = [];
    if (favorites.length > 0) {
        favorites.forEach(fav => {
            const course = courses.find(course => course.id == fav);
            if (course) {
                matchedCourses.push(course);
            }
        })
    }
    return matchedCourses;
}

export {
    updateFavoritesContainer
}