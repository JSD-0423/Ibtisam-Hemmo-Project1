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
  console.log('searchValue: ', searchValue);
  const selectedFilter = filterSelectMenu.value;
  console.log('selectedFilter: ', selectedFilter);
  const selectedSort = sortSelectMenu.value;
  console.log('selectedSort: ', selectedSort);

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
    const card = createElement('div', { class: 'col' }, cards);
    const anchor = createElement('a', { href: `details.html?cardIndex=${index}`, class: 'card custom-default-bg-color overflow-hidden border-0' }, card);
    anchor.setAttribute('data-index', index);
    const imgContainer = createElement('div', { class: 'overflow-hidden bg-white' }, anchor)
    createElement('img', { src: course.image, class: 'card-img-top object-fit-cover' }, imgContainer);
    const info = createElement('div', { class: 'card-body' }, anchor);
    const head = createElement('div', { class: 'card-content body-text-color' }, info);
    createElement('p', { textContent: course.description, class:'overflow-hidden mb-1' }, head);
    createElement('h3', { textContent: course.title, class:'overflow-hidden fw-bold' }, head);
    const footer = createElement('div', {}, info);
    const rate = createElement('div', { class: 'text-orange mb-2 mt-3', }, footer);
    createRatingStars(course.rating, rate);
    createElement('div', { class: 'fs-custom text-lines-color', textContent: 'Author: ' + course.author }, footer);
  })
}

