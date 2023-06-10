import { fetchTopicDetails } from "../APIS/API.js";
import { handleErrorMsg, handleLoadingState } from "../APIS/fetchUtils.js";
import { renderCard, renderList } from "./buildDetailsDOM.js";

function getIndex() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cardIndex');
}

const index = getIndex();

const getTopicDetails = async () => {
    try {
        handleLoadingState('block');
        const topicDetails = await fetchTopicDetails(index);
        renderCard(index, topicDetails);
        renderList(topicDetails?.topic, topicDetails?.subtopics);
        handleLoadingState('none');
    } catch (err) {
        console.log('err: ', err);
        handleErrorMsg('Something went wrong. Web topics failed to load.')
        handleLoadingState('none');

    }
}

getTopicDetails();
