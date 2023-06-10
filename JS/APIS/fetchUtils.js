function handleLoadingState(state) {
    const loadingSpinner = document.querySelector('.loading');
    loadingSpinner.style.display = state;
}

function handleErrorMsg(msg) {
    return document.querySelector('.error-msg').textContent = msg
}

export {
    handleErrorMsg,
    handleLoadingState
}
