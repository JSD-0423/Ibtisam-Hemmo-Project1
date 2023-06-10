import { handleErrorMsg, handleLoadingState } from '../APIS/fetchUtils.js';
import { createFilterOptions, listenEvents, renderCards } from './homeDom.js';
import { getTopics } from './retrieveData.js';
import { fetchFilterCategories } from './topicUtils.js';

const renderTopics = async (phrase = '') => {
  try {
    handleLoadingState('block');
    const topics = await getTopics(phrase);
    renderCards(topics);
    const categories = fetchFilterCategories(topics);
    createFilterOptions(categories);
    listenEvents();
    handleLoadingState('none');

  } catch (err) {
    console.log('err: ', err);
    handleErrorMsg('Something went wrong. Web topics failed to load.');
    handleLoadingState('none')
  }
}

renderTopics();

export {
  renderTopics
}
