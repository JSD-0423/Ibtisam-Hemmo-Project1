import { renderCards } from "./buildDOM.js";
import { getFromLocalStorage } from "./utils.js";

const filterMenu = document.getElementById('filter-menu');
const sortMenu = document.getElementById('sort-menu');

function applyFilterSort() {
    let topics = getFromLocalStorage('topics');
    let filteredTopics, sortedTopics;
    if (sortMenu.value !== 'default') {
        sortedTopics = sortTopics(topics, sortMenu.value);
    } else {
        sortedTopics = topics;
    }
    filteredTopics = sortedTopics
    if (filterMenu.value !== 'default') {
        filteredTopics = filterTopics(filteredTopics, filterMenu.value);
    } else {
        filteredTopics = sortedTopics;
    }
    renderCards(filteredTopics);
}

function filterTopics(topics, Option) {
    return topics.filter(topic => topic.category == Option);
}

function sortTopics(topics, Option) {
    if (Option === 'topic-title') {
        return topics.sort((a, b) => a.topic.localeCompare(b.topic));
    } else if (Option === 'author-name') {
        return topics.sort((a, b) => a.name.localeCompare(b.name));
    }
    return topics;
}

export {
    applyFilterSort,
    sortTopics,
}