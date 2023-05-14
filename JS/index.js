import data from './courses.js';
import { createElement, createRatingStars } from './common.js';

const coursesContainer = document.querySelector('.courses-container');
const courses = document.querySelector('.courses');
const darkModeBtn = document.querySelector('.dark-mode');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const favoritesBtn = document.querySelector('.favorites');
const favPopUp = document.getElementById('popup-container');
const favIcon = document.getElementById('fav-icon');
const searchInput = document.getElementById('search-input');
const searchedTitle = document.querySelector('.searched-title');

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
  let searchValue = searchInput.value.toLowerCase();
  const searchedTopics = data.filter(topic => topic.title.toLowerCase().includes(searchValue));
  createCards(searchedTopics);
});

createCards(data);

function createCards(topics) {
  courses.innerHTML = '';
  searchedTitle.textContent = `"${topics.length}" Web Topics Found`;
  topics.map((course, index) => {
    const card = createElement('div', { class: 'course' }, courses);
    card.setAttribute('data-index', index);
    createElement('img', { src: course.image }, card);
    const info = createElement('div', { class: 'info' }, card);
    const head = createElement('div', { class: 'head-title' }, info);
    createElement('p', { textContent: course.description }, head);
    createElement('h5', { textContent: course.title }, head);
    const footer = createElement('div', { class: 'footer' }, info);
    const rate = createElement('div', { class: 'rate-container', }, footer);
    createRatingStars(course.rating, rate);
    createElement('div', { class: 'author-name', textContent: 'Author: ' + course.author }, footer);

    card.addEventListener('click', () => {
      window.location.href = `details.html?cardIndex=${index}`;
    });
  })
}

