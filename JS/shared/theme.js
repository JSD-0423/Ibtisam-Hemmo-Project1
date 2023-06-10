const themeBtn = document.querySelector('.dark-mode');
const modeIcon = document.getElementById('mode-icon');
const modeText = document.getElementById('mode-text');
const savedTheme = localStorage.getItem('theme') || 'light';


themeBtn.addEventListener('click', () => toggleTheme())

setTheme(savedTheme)

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
}

function setTheme(theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    if (theme === 'dark') {
        modeIcon.setAttribute('name', 'sunny-outline');
        modeText.textContent = 'Light Mode';
    } else {
        modeIcon.setAttribute('name', 'moon-outline');
        modeText.textContent = 'Dark Mode';
    }

    localStorage.setItem('theme', theme);
}

export {
    setTheme,
    toggleTheme
}
