import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tap-web-1.herokuapp.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

const fetchTopics = async (phrase = '') => {
    const url = '/topics/list';
    const searchUrl = phrase ? `${url}?phrase=${encodeURIComponent(phrase)}` : url;
    try {
        const response = await api.get(searchUrl);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch topics.');
    }
};


const fetchTopic = async (courseId) => {
    try {
        const response = await api.get(`/topics/details/${courseId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch course details.');
    }

};

export {
    fetchTopics,
    fetchTopic
}