import { processFunctions } from "./topicUtils.js";
import { attachEventListener, createElement, createRatingStars } from "../DOM/DOM_Helpers.js";
import { updateFavoritesContainer } from "../shared/favoritesDom.js";

const searchedTitle = document.querySelector('.subtitle');
const filterSelectMenu = document.getElementById('filter-menu');
const sortSelectMenu = document.getElementById('sort-menu');
const searchInput = document.getElementById('search-input');

export function listenEvents() {
    if (filterSelectMenu, sortSelectMenu, searchInput) {
        attachEventListener(filterSelectMenu, 'change', () => processFunctions(filterSelectMenu.value, sortSelectMenu.value, searchInput.value.trim().toUpperCase()), 300);
        attachEventListener(sortSelectMenu, 'change', () => processFunctions(filterSelectMenu.value, sortSelectMenu.value, searchInput.value.trim().toUpperCase()), 300);
        attachEventListener(searchInput, 'input', () => processFunctions(filterSelectMenu.value, sortSelectMenu.value, searchInput.value.trim().toUpperCase()), 300);
    }
}

export function renderCards(topics) {
    const cards = document.querySelector('.cards');
    if (cards) {
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
    updateFavoritesContainer();

}

export function createFilterOptions(categories) {
    if (filterSelectMenu) {
        filterSelectMenu.innerHTML = '';
        createElement('option', { value: 'default', textContent: 'Default' }, filterSelectMenu);
        categories.forEach(category => {
            createElement('option', { value: category, textContent: category }, filterSelectMenu);
        });
    }
}
