import { updateFavoritesContainer } from "../common.js";
import { handleErrorMsg } from "../handleErrors.js";
import { handleLoadingState } from "../handleLoadingState.js";
import { fetchData } from "../utils.js";
import { renderList, renderCard } from "./buildDetailsDOM.js";

export async function fetchTopic(id) {
    try {
        handleLoadingState('block')
        const topic = await fetchData(id);
        renderCard(topic);
        renderList(topic.subtopics);
        updateFavoritesContainer();
        handleLoadingState('none')
    } catch (e) {
        handleErrorMsg('Something went wrong. Web topics failed to load.');
        handleLoadingState('none')
        console.log('e: ', e);
    }
}

