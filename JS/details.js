import { createElement, createRatingStars, fetchData } from './utils.js';
import { updateAddFavBtn, updateFavoritesContainer, loadFavorites } from './common.js';
import { fetchTopic } from './details/fetchTopic.js';

const cardIndex = getIndex();
fetchTopic(cardIndex);
