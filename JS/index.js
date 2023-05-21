import data from './courses.js';
import { createElement, createRatingStars } from './common.js';

const cards = document.querySelector('.cards');
const darkModeBtn = document.querySelector('.dark-mode');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const favoritesBtn = document.querySelector('.favorites');
const favPopUp = document.getElementById('popup-container');
const favIcon = document.getElementById('fav-icon');
const searchInput = document.getElementById('search-input');
const searchedTitle = document.querySelector('.subtitle');
const filterSelectMenu = document.getElementById('filter-menu');
const sortSelectMenu = document.getElementById('sort-menu');

darkModeBtn.addEventListener('click', () => {
  var root = document.querySelector(':root');
  root.classList.toggle('dark-mode');
  if (modeIcon.getAttribute('name') === 'moon-outline') {
    modeIcon.setAttribute('name', 'sunny-outline');
    modeText.textContent = 'Light Mode';
  } else {
    modeIcon.setAttribute('name', 'moon-outline');
    modeText.textContent = 'Dark Mode';
  }
})

favoritesBtn.addEventListener('click', () => {
  if (favPopUp.style.display === 'block') {
    favPopUp.style.display = 'none';
    favIcon.setAttribute('name', 'heart-outline');
    favIcon.style.color = 'black';
  } else {
    favPopUp.style.display = 'block';
    favIcon.setAttribute('name', 'heart');
    favIcon.style.color = 'red';
  }
})

searchInput.addEventListener('input', () => {
  applyFiltersAndSort();
});

filterSelectMenu.addEventListener('change', () => {
  applyFiltersAndSort();
});

sortSelectMenu.addEventListener('change', () => {
  applyFiltersAndSort();
});

function applyFiltersAndSort() {
  let searchValue = searchInput.value.trim().toLowerCase();
  const selectedFilter = filterSelectMenu.value;
  const selectedSort = sortSelectMenu.value;

  let filteredTopics = data;

  if (selectedFilter !== 'Default') {
    filteredTopics = data.filter(topic => topic.type === selectedFilter);
  }

  if (searchValue) {
    filteredTopics = filteredTopics.filter(topic => topic.title.toLowerCase().includes(searchValue));
  }

  let sortedTopics = filteredTopics;

  if (selectedSort === 'Top-Rated') {
    sortedTopics = filteredTopics.filter(topic => topic.rating >= 50);
  } else if (selectedSort === 'Least-Rated') {
    sortedTopics = filteredTopics.filter(topic => topic.rating < 50);
  }
  createCards(sortedTopics);
}

createCards(data);

function createCards(topics) {
  cards.innerHTML = '';
  searchedTitle.textContent = `"${topics.length}" Web Topics Found`;
  topics.map((course, index) => {
    const card = createElement('div', { class: 'card' }, cards);
    card.setAttribute('data-index', index);
    const imgContainer = createElement('div', { class: 'img-container' }, card)
    createElement('img', { src: course.image }, imgContainer);
    const info = createElement('div', { class: 'info' }, card);
    const head = createElement('div', { class: 'head-title' }, info);
    createElement('p', { textContent: course.description }, head);
    createElement('h3', { textContent: course.title }, head);
    const footer = createElement('div', { class: 'footer' }, info);
    const rate = createElement('div', { class: 'icons-container', }, footer);
    createRatingStars(course.rating, rate);
    createElement('div', { class: 'author-name', textContent: 'Author: ' + course.author }, footer);

    card.addEventListener('click', () => {
      window.location.href = `details.html?cardIndex=${index}`;
    });
  })
}

