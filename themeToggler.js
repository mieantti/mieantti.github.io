document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const announcements = document.getElementById('announcements');
const root = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    root.classList.add('light-mode');
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Light mode';
}

themeToggle.addEventListener('click', () => {
    root.classList.toggle('light-mode');
    
    if (root.classList.contains('light-mode')) {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Light mode';
        localStorage.setItem('theme', 'light');
        announcements.textContent = 'Light mode activated';
        
        // Reset star hunter game when switching to light mode
        if (window.resetStarHunterGame) {
            window.resetStarHunterGame();
        }
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Dark mode';
        localStorage.setItem('theme', 'dark');
        announcements.textContent = 'Dark mode activated';
    }
});
