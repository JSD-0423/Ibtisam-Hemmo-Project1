import { fetchData, saveToLocalStorage } from './utils.js';
import { handleErrorMsg } from './handleErrors.js';
import { handleLoadingState } from './handleLoadingState.js';
import { renderCards, createFilterOptions } from './buildDOM.js';
import { fetchCategories } from './filter.js';
import { updateFavoritesContainer } from './common.js';

(async () => {
  try {
    handleLoadingState('block')
    const topics = await fetchData('https://tap-web-1.herokuapp.com/topics/list');
    renderCards(topics);
    saveToLocalStorage('topics', topics)
    const categories = fetchCategories(topics);
    createFilterOptions(categories);
    updateFavoritesContainer()
    handleLoadingState('none');
  } catch (error) {
    handleErrorMsg('Something went wrong. Web topics failed to load.');
    handleLoadingState('none')
  }
})()

