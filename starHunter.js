// Flashlight effect handlers

let flashlightActive = false;
let lastMouseX = 0;
let lastMouseY = 0;
let foundStars = new Set();

function calculateMaxStarTop() {
    const footer = document.querySelector('footer');    
    const footerHeight = footer ? footer.offsetHeight : 0;
    const viewportHeight = window.innerHeight;
    
    return ((viewportHeight - footerHeight) / viewportHeight) * 100;
}

function createStar(maxTop) {
    const star = document.createElement('span');
    star.className = 'hidden-star';
    star.textContent = '★';
    star.dataset.found = 'false';
    
    const top = Math.random() * maxTop;
    const left = Math.random() * 90 + 5; // 5% to 95%
    
    star.style.top = top + '%';
    star.style.left = left + '%';
    
    return star;
}

function generateHiddenStars() {
    const container = document.querySelector('.hidden-stars');
    if (!container) return;
    
    const maxTop = calculateMaxStarTop();
    const starCount = 5;
    
    for (let i = 0; i < starCount; i++) {
        const star = createStar(maxTop);
        star.dataset.id = i;
        container.appendChild(star);
    }
}

function isDarkModeActive() {
    return !document.documentElement.classList.contains('light-mode');
}

function setFlashlightPosition(x, y) {
    document.body.style.setProperty('--mouse-x', x + 'px');
    document.body.style.setProperty('--mouse-y', y + 'px');
}

function updateStarTracker() {
    const starTracker = document.getElementById('star-tracker');
    if (starTracker) {
        starTracker.textContent = `Stars found: ${foundStars.size}/5`;
        updateStarTrackerStyle(starTracker);
    }
}

function updateStarTrackerStyle(starTracker) {
    if (foundStars.size === 5) {
        starTracker.style.fontWeight = 'bold';
    } else {
        starTracker.style.fontWeight = 'normal';
    }
}

function toggleFlashlight() {
    flashlightActive = !flashlightActive;
    
    if (flashlightActive) {
        // Set initial position to current mouse position when activating
        setFlashlightPosition(lastMouseX, lastMouseY);
        
        // Update character visibility at current position
        updateHiddenCharactersVisibility(lastMouseX, lastMouseY);
        updateStarTracker();
    } else {
        // Reset found stars and hide all characters when flashlight is turned off
        foundStars.clear();
        hideAllCharacters();
        updateStarTracker();
    }
    
    document.body.classList.toggle('flashlight-mode', flashlightActive);
}

function resetStarHunterGame() {
    if (flashlightActive) {
        flashlightActive = false;
        document.body.classList.remove('flashlight-mode');
    }
    foundStars.clear();
    hideAllCharacters();
    updateStarTracker();
}

// Expose reset function globally for theme toggler
window.resetStarHunterGame = resetStarHunterGame;

function handleFKeyPress() {
    // Only allow flashlight in dark mode
    if (!isDarkModeActive()) {
        return;
    }
    
    toggleFlashlight();
}

function hideAllCharacters() {
    const hiddenChars = document.querySelectorAll('.hidden-star');
    hiddenChars.forEach(char => {
        char.style.opacity = '0';
        char.dataset.found = 'false';
    });
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(
        Math.pow(x1 - x2, 2) + 
        Math.pow(y1 - y2, 2)
    );
}

function getStarCenter(star) {
    const rect = star.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

function markStarAsFound(star) {
    star.dataset.found = 'true';
    foundStars.add(star.dataset.id);
    updateStarTracker();
}

function updateStarVisibility(star, mouseX, mouseY, flashlightRadius) {
    const { x: starX, y: starY } = getStarCenter(star);
    const distance = calculateDistance(starX, starY, mouseX, mouseY);
    
    if (distance < flashlightRadius) {
        star.style.opacity = '1';
        
        if (star.dataset.found !== 'true') {
            markStarAsFound(star);
        }
    } else {
        if (star.dataset.found !== 'true') {
            star.style.opacity = '0';
        }
    }
}

function updateHiddenCharactersVisibility(mouseX, mouseY) {
    const flashlightRadius = 100; // Half of the 200px flashlight size
    const hiddenChars = document.querySelectorAll('.hidden-star');
    
    hiddenChars.forEach(char => {
        updateStarVisibility(char, mouseX, mouseY, flashlightRadius);
    });
}

function updateFlashlightPosition(event) {
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
    
    if (flashlightActive) {
        setFlashlightPosition(event.clientX, event.clientY);
        updateHiddenCharactersVisibility(event.clientX, event.clientY);
    }
}

function initFlashlight() {
    generateHiddenStars();
    
    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'f') {
            handleFKeyPress();
        }
    });
    
    document.addEventListener('mousemove', updateFlashlightPosition);
}

// Initialize flashlight when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlashlight);
} else {
    initFlashlight();
}
