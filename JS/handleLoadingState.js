export function handleLoadingState(state) {
    const loadingSpinner = document.querySelector('.loading');
    loadingSpinner.style.display = state;
}