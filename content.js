function removeShorts() {
    // Remove Shorts from homepage
    document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer').forEach(el => {
        el.style.display = 'none';
    });

    // Remove Shorts from sidebar 
    document.querySelectorAll('ytd-guide-entry-renderer').forEach(el => {
        let title = el.querySelector('#endpoint'); // Ensure we check the right element
        if (title && title.innerText.trim() === 'Shorts') {
            el.style.display = 'none';
        }
    });

    // Remove individual Shorts videos
    document.querySelectorAll('ytd-grid-video-renderer, ytd-rich-grid-media').forEach(video => {
        let badge = video.querySelector('ytd-thumbnail-overlay-time-status-renderer');
        if (badge && badge.innerText.includes('Shorts')) {
            video.style.display = 'none';
        }
    });
}

// Ensure Shorts get removed even if YouTube updates dynamically
const observer = new MutationObserver(removeShorts);
observer.observe(document.body, { childList: true, subtree: true });

// Run initially
removeShorts();
