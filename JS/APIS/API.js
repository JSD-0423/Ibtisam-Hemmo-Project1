import { sendRequest } from "./sendRequest.js";

const baseUrl = 'https://tap-web-1.herokuapp.com';

const fetchTopics = async (phrase = '') => {
    let url = baseUrl + '/topics/list';
    return sendRequest(url, {
        params: { phrase }
    }
    )
}

const fetchTopicDetails = async (id) => {
    let url = baseUrl + `/topics/details/${id}`;
    return sendRequest(url)
}

export {
    fetchTopics,
    fetchTopicDetails
}