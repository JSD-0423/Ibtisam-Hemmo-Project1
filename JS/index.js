import data from './courses.js';

const coursesContainer = document.querySelector('.courses-container');
const courses = document.querySelector('.courses');
const darkModeBtn = document.querySelector('.dark-mode');

darkModeBtn.addEventListener('click', () => {
  var root = document.querySelector(':root');
  root.classList.toggle('dark-mode');
})

const createElement = (type, options, parent) => {
  const element = document.createElement(type);
  for (let option in options) {
    if (option == 'textContent') {
      element.textContent = options[option];
    }
    else {
      element.setAttribute(option, options[option]);
    }
  }
  parent.appendChild(element);
  return element;
}

const createRatingStars = (rating, parent) => {
  const MAX_STARS = 5;
  const ratingPercentage = (rating / 100) * MAX_STARS;
  const wholeStars = Math.floor(ratingPercentage);
  const halfStars = Math.ceil(ratingPercentage - wholeStars);
  const emptyStars = MAX_STARS - wholeStars - halfStars;

  for (let i = 0; i < wholeStars; i++) {
    createElement('ion-icon', { name: 'star' }, parent);
  }
  for (let i = 0; i < halfStars; i++) {
    createElement('ion-icon', { name: 'star-half' }, parent);
  }
  for (let i = 0; i < emptyStars; i++) {
    createElement('ion-icon', { name: 'star-outline' }, parent);
  }
};


createElement('h2', { textContent: `"${data.length}" Web Topics Found`, class: 'title' }, coursesContainer)

data.map(course => {
  const card = createElement('div', { class: 'course' }, courses);
  createElement('img', { src: course.image }, card);
  const info = createElement('div', { class: 'info' }, card);
  const head = createElement('div', { class: 'head-title' }, info);
  createElement('p', { textContent: course.description }, head);
  createElement('h5', { textContent: course.title }, head);
  const footer = createElement('div', { class: 'footer' }, info);
  const rate = createElement('div', { class: 'rate-container', }, footer);
  createRatingStars(course.rating, rate);
  createElement('div', { class: 'author-name', textContent: 'Author: ' + course.author }, footer);
})

