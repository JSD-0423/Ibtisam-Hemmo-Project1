import { updateFavoritesContainer } from "../shared/favoritesDom.js";

let favorites = loadFavorites() || [];

function addToFavorite(cardIndex, addFav) {
    if (!favorites.includes(cardIndex)) {
        favorites.push(cardIndex);
        addFav.textContent = 'Remove From Favorites';
    } else {
        const index = favorites.indexOf(cardIndex);
        if (index !== -1) {
            favorites.splice(index, 1);
            addFav.textContent = 'Add to Favorites';
        }
    }
    updateFavoritesContainer();
    saveFavorites();
}

function deleteFromFavorite() {

}

function loadFavorites() {
    try {
        return JSON.parse(localStorage.getItem('favorites') || '[]');
    } catch (err) {
        console.log('err: ', err);
    }
}

function saveFavorites() {
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (err) {
        console.log('err: ', err);
    }
}

function updateAddFavBtn(cardIndex) {
    const addFav = document.querySelector('.add-fav')
    if (favorites.includes(cardIndex)) {
        addFav.textContent = 'Remove from Favorites';
    }
}

export {
    addToFavorite,
    deleteFromFavorite,
    updateAddFavBtn,
    loadFavorites,
    saveFavorites
}