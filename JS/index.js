import { createElement, createRatingStars } from './common.js';

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

fetch('https://tap-web-1.herokuapp.com/topics/list')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not OK');
    }
    return res.json();
  })
  .then(data => {
    courses = data;
    createCards(data);
    loadingSpinner.style.display = 'none';

  })
  .catch((err) => {
    loadingSpinner.style.display = 'none';
    searchedTitle.textContent = 'Something went wrong. Web topics failed to load.';
    console.error(err)
  });

themeBtn.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  setTheme(newTheme);
})


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


  if (selectedFilter !== 'Default') {
    filteredTopics = courses.filter(data => data.type === selectedFilter);
  }

  if (searchValue) {
    filteredTopics = courses.filter(data => data.topic.toLowerCase().includes(searchValue));
  }

  let sortedTopics = filteredTopics;

  if (selectedSort === 'Top-Rated') {
    sortedTopics = filteredTopics.filter(topic => topic.rating >= 50);
  } else if (selectedSort === 'Least-Rated') {
    sortedTopics = filteredTopics.filter(topic => topic.rating < 50);
  }
  createCards(sortedTopics);
}

function createCards(topics) {
  courses = topics;
  cards.innerHTML = '';
  searchedTitle.textContent = `"${topics.length}" Web Topics Found`;
  topics.map((course) => {
    const card = createElement('div', { class: 'col' }, cards);
    const anchor = createElement('a', { href: `details.html?cardIndex=${course.id}`, class: 'card custom-default-bg-color overflow-hidden border-0' }, card);
    anchor.setAttribute('data-index', course.id);
    const imgContainer = createElement('div', { class: 'overflow-hidden bg-white' }, anchor)
    createElement('img', { src: `/assets/${course.image}`, class: 'card-img-top object-fit-cover' }, imgContainer);
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

