import { fetchTopics } from "../APIS/API.js";
import { handleErrorMsg, handleLoadingState } from "../APIS/fetchUtils.js";

export const getTopics = async (phrase = '') => {
    try {
        const topics = await fetchTopics(phrase);
        return topics;
    } catch (err) {
        console.log('err: ', err);
        handleErrorMsg('Something went wrong. Web topics failed to load.');
        handleLoadingState('none')
    }
}
