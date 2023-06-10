import { renderCards } from "./homeDom.js";
import { getTopics } from "./retrieveData.js";

function fetchFilterCategories(courses) {
    return [...new Set(courses.map(course => course.category))];
}

async function processFunctions(filterValue, sortValue, inputValue) {
    try {
        const filteredTopics = await applySearchFilter(filterValue, inputValue);
        const sortedTopics = applySortTopics(sortValue, filteredTopics);
        renderCards(sortedTopics);
    } catch (error) {
        console.log('error: ', error);
    }
}

function filterTopicsByCategory(filterValue, topics) {
    if (filterValue !== 'default') {
        return topics.filter(topic => topic.category === filterValue);
    } else {
        return topics;
    }
}

async function applySearchFilter(filterValue, inputValue) {
    try {
        const topics = await getTopics(inputValue);
        const filteredTopics = filterTopicsByCategory(filterValue, topics);
        return filteredTopics;
    } catch (error) {
        console.log('error: ', error);
        return [];
    }
}

function applySortTopics(sortValue, topics) {

    if (sortValue === 'topic-title') {
        return topics.sort((a, b) => a.topic.localeCompare(b.topic));
    } else if (sortValue === 'author-name') {
        return topics.sort((a, b) => a.name.localeCompare(b.name));
    }

    return topics;
}


export {
    fetchFilterCategories,
    processFunctions
}

