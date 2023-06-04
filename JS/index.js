import { createElement, createRatingStars, fetchData, debounce } from './common.js';

const cards = document.querySelector('.cards');
const themeBtn = document.querySelector('.dark-mode');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const favoritesBtn = document.querySelector('.favorites');
const favPopUp = document.getElementById('popup-container');
const favIcon = document.getElementById('fav-icon');
const searchInput = document.getElementById('search-input');
const searchedTitle = document.querySelector('.subtitle');
const filterSelectMenu = document.getElementById('filter-menu');
const sortSelectMenu = document.getElementById('sort-menu');
const loadingSpinner = document.querySelector('.loading');
const savedTheme = localStorage.getItem('theme') || 'light';
let courses = [];

setTheme(savedTheme);
loadingSpinner.style.display = 'block';

favoritesBtn.addEventListener('click', () => toggleFavorites());
searchInput.addEventListener('input', debounce(applyFiltersAndSort, 300));
filterSelectMenu.addEventListener('change', debounce(applyFiltersAndSort, 300));
sortSelectMenu.addEventListener('change', debounce(applyFiltersAndSort, 300));
themeBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  setTheme(newTheme);
})

fetchData('https://tap-web-1.herokuapp.com/topics/list')
  .then(data => {
    courses = data;
    createCards(data);
  })
  .catch(() => {
    searchedTitle.textContent = 'Something went wrong. Web topics failed to load.';
  }).finally(() => {
    loadingSpinner.style.display = 'none';
  });


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

function applyFiltersAndSort() {
  let filteredTopics = courses;
  let searchValue = searchInput.value.trim().toLowerCase();
  if (searchValue) {
    filteredTopics = filterTopicsBySearch(filteredTopics, searchValue);
  }
  let sortedTopics = filteredTopics;
  sortedTopics = sortTopics(filteredTopics, sortSelectMenu.value);
  createCards(sortedTopics);
}

function filterTopicsBySearch(topics, searchValue) {
  return topics.filter(data => data.topic.toLowerCase().includes(searchValue));
}

function sortTopics(topics, Option) {
  if (Option === 'topic-title') {
    return topics.sort((a, b) => a.topic.localeCompare(b.topic));
  } else if (Option === 'author-name') {
    return topics.sort((a, b) => a.name.localeCompare(b.name));
  }
  return topics;
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

function createCards(topics) {
  cards.innerHTML = '';
  searchedTitle.textContent = `"${topics.length}" Web Topics Found`;
  topics.map((course) => {
    const card = createElement('div', { class: 'col' }, cards);
    const anchor = createElement('a', { href: `details.html?cardIndex=${course.id}`, class: 'card custom-default-bg-color overflow-hidden border-0' }, card);
    anchor.setAttribute('data-index', course.id);
    const imgContainer = createElement('div', { class: 'overflow-hidden bg-white' }, anchor)
    createElement('img', { src: `./assets/${course.image}`, class: 'card-img-top object-fit-cover' }, imgContainer);
    const info = createElement('div', { class: 'card-body' }, anchor);
    const head = createElement('div', { class: 'card-content body-text-color' }, info);
    createElement('p', { textContent: 'Web Development Languages', class: 'overflow-hidden mb-1' }, head);
    createElement('h3', { textContent: course.topic, class: 'overflow-hidden fw-bold' }, head);
    const footer = createElement('div', {}, info);
    const rate = createElement('div', { class: 'text-orange mb-2 mt-3', }, footer);
    createRatingStars(course.rating, rate);
    createElement('div', { class: 'fs-custom text-lines-color', textContent: 'Author: ' + course.name }, footer);
  })
}

