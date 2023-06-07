import { renderCards } from "./buildDOM.js";
import { getFromLocalStorage, saveToLocalStorage } from "./utils.js";

function fetchCategories(courses) {
    return [...new Set(courses.map(course => course.category))];
}

function applyFilter(filterSelectMenu) {
    let topics, filteredTopics;
    if (getFromLocalStorage('sortedTopics').length > 0) {
        topics = getFromLocalStorage('sortedTopics');
    } else {
        topics = getFromLocalStorage('topics');
    }
    if (filterSelectMenu.value !== 'default') {
        filteredTopics = filterTopics(topics, filterSelectMenu.value);
        saveToLocalStorage('filteredTopics', filteredTopics);
    } else {
        filteredTopics = topics;
    }
    renderCards(filteredTopics);
}

function filterTopics(topics, Option) {
    return topics.filter(topic => topic.category == Option);
}

export {
    applyFilter,
    filterTopics,
    fetchCategories
}