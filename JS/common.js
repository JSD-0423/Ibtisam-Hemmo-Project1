import { fetchData, createElement, createRatingStars } from "./utils.js";

const themeBtn = document.querySelector('.dark-mode');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const favoritesBtn = document.querySelector('.favorites');
const favPopUp = document.getElementById('popup-container');
const favIcon = document.getElementById('fav-icon');
const savedTheme = localStorage.getItem('theme') || 'light';
const favoritesContainer = document.querySelector('.favorites-container');
let favorites = loadFavorites();
let courses = []

favoritesBtn.addEventListener('click', () => toggleFavorites());
themeBtn.addEventListener('click', () => toggleTheme())

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
}

function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    if (theme === 'dark') {
        modeIcon.setAttribute('name', 'sunny-outline');
        modeText.textContent = 'Light Mode';
    } else {
        modeIcon.setAttribute('name', 'moon-outline');
        modeText.textContent = 'Dark Mode';
    }

    localStorage.setItem('theme', theme);
}

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

function updateFavoritesContainer() {
    fetchData('https://tap-web-1.herokuapp.com/topics/list')
        .then(data => {
            courses = data;
            updateFavoritesContainer()
        })
        .catch((err) => {
            console.error(err)
        });
    favorites = loadFavorites();
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = 'No favorites yet, Browse some courses and pick yours'
    } else {
        favoritesContainer.innerHTML = '';
        favorites.forEach((ele) => {
            const course = courses.find(course => course.id == ele);
            if (course) {
                const favCard = createElement('div', { class: 'card border-0 custom-default-bg-color custom-shadow overflow-hidden rounded-1 card-w flex-shrink-0 fav-card', id: ele }, favoritesContainer);
                createElement('img', { src: './assets/' + course.image, alt: course.topic, class: ' card-top-img fav-img' }, favCard);
                const cardInfo = createElement('div', { class: 'card-body p-1' }, favCard);
                createElement('h5', { textContent: course.topic, class: "fs-6 fw-bold overflow-hidden body-text-color" }, cardInfo);
                const rateContainer = createElement('div', { class: 'text-orange' }, cardInfo);
                createRatingStars(course.rating, rateContainer);
            }
        })
    }
}

function updateAddFavBtn(cardIndex) {
    const addFav = document.querySelector('.add-fav')
    if (favorites.includes(cardIndex)) {
        addFav.textContent = 'Remove from Favorites';
    }
}

function loadFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export {
    updateFavoritesContainer,
    updateAddFavBtn,
    loadFavorites
}