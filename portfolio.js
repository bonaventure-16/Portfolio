const themeButton = document.getElementById('lumen');
const themeStorageKey = 'cloudnet-theme';

const savedTheme = localStorage.getItem(themeStorageKey);
const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : document.documentElement.getAttribute('data-bs-theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', initialTheme);
themeButton.textContent = initialTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

themeButton.addEventListener('click', function () {
    const html = document.documentElement;
    const nextTheme = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', nextTheme);
    localStorage.setItem(themeStorageKey, nextTheme);
    themeButton.textContent = nextTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
});