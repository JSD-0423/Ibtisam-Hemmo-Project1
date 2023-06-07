// import { applyFilter } from "./filter.js";
import { searchTopics } from "./searchTopics.js";
import { applyFilterSort } from "./sort.js";
import { attachEventListener, createElement, createRatingStars } from "./utils.js";

const cards = document.querySelector('.cards');
const searchedTitle = document.querySelector('.subtitle');
const filterSelectMenu = document.getElementById('filter-menu');
const sortSelectMenu = document.getElementById('sort-menu');
const searchInput = document.getElementById('search-input');

attachEventListener(filterSelectMenu, 'change', () => applyFilterSort(), 300);
attachEventListener(sortSelectMenu, 'change', () => applyFilterSort(), 300);
attachEventListener(searchInput, 'input', () => searchTopics(searchInput.value.trim().toUpperCase()), 300);

export function renderCards(topics) {
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
        createElement('p', { textContent: course.category ?? 'Web Development Languages', class: 'overflow-hidden mb-1' }, head);
        createElement('h3', { textContent: course.topic, class: 'overflow-hidden fw-bold' }, head);
        const footer = createElement('div', {}, info);
        const rate = createElement('div', { class: 'text-orange mb-2 mt-3', }, footer);
        createRatingStars(course.rating, rate);
        createElement('div', { class: 'fs-custom text-lines-color', textContent: 'Author: ' + course.name }, footer);
    })
}

export function createFilterOptions(categories) {
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filterSelectMenu.appendChild(option);
    });
}