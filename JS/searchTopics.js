import { fetchData, saveToLocalStorage } from './utils.js';
import { handleErrorMsg } from './handleErrors.js';
import { handleLoadingState } from './handleLoadingState.js';
import { renderCards } from './buildDOM.js';

export const searchTopics = async (searchInput) => {
    try {
        handleLoadingState('block')
        const topics = await fetchData(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInput}`);
        renderCards(topics);
        saveToLocalStorage('topics', topics)
        handleLoadingState('none');
    } catch (error) {
        handleErrorMsg('Something went wrong. Web topics failed to load.');
        handleLoadingState('none')
    }
}

