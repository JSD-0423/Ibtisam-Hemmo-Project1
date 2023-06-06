import { createElement, createRatingStars, fetchData, debounce } from './utils.js';
import { updateFavoritesContainer } from './common.js';

const cards = document.querySelector('.cards');
const searchInput = document.getElementById('search-input');
const searchedTitle = document.querySelector('.subtitle');
const filterSelectMenu = document.getElementById('filter-menu');
const sortSelectMenu = document.getElementById('sort-menu');
const loadingSpinner = document.querySelector('.loading');
let courses = [];

searchInput.addEventListener('input', debounce(applyFiltersAndSort, 300));
filterSelectMenu.addEventListener('change', debounce(applyFiltersAndSort, 300));
sortSelectMenu.addEventListener('change', debounce(applyFiltersAndSort, 300));

fetchData('https://tap-web-1.herokuapp.com/topics/list')
  .then(data => {
    courses = data;
    createCards(data);
    updateFavoritesContainer();
  })
  .catch(() => {
    searchedTitle.textContent = 'Something went wrong. Web topics failed to load.';
  }).finally(() => {
    loadingSpinner.style.display = 'none';
  });

function applyFiltersAndSort() {
  let filteredTopics = courses;
  let searchValue = searchInput.value.trim().toLowerCase();
  if (searchValue) {
    filteredTopics = filterTopicsBySearch(filteredTopics, searchValue);
  }
  let sortedTopics = filteredTopics;
  sortedTopics = sortTopics(filteredTopics, sortSelectMenu.value);
  sortedTopics = filterTopics(sortedTopics, filterSelectMenu.value);
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

function filterTopics(topics, Option) {

  return topics;
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
    createElement('p', { textContent: course.category ?? 'Web Development Languages', class: 'overflow-hidden mb-1' }, head);
    createElement('h3', { textContent: course.topic, class: 'overflow-hidden fw-bold' }, head);
    const footer = createElement('div', {}, info);
    const rate = createElement('div', { class: 'text-orange mb-2 mt-3', }, footer);
    createRatingStars(course.rating, rate);
    createElement('div', { class: 'fs-custom text-lines-color', textContent: 'Author: ' + course.name }, footer);
  })
}
