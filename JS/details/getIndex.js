function getIndex() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('cardIndex');
}