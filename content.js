function removeShorts() {
    // Remove Shorts from homepage
    document.querySelectorAll('ytd-rich-section-renderer, ytd-reel-shelf-renderer').forEach(el => {
        el.style.display = 'none';
    });

    // Remove Shorts from sidebar
    document.querySelectorAll('ytd-guide-entry-renderer').forEach(el => {
        if (el.innerText.includes('Shorts')) {
            el.style.display = 'none';
        }
    });

    // Remove individual Shorts video tiles
    document.querySelectorAll('ytd-grid-video-renderer, ytd-rich-grid-media').forEach(video => {
        let badge = video.querySelector('ytd-thumbnail-overlay-time-status-renderer');
        if (badge && badge.innerText.includes('Shorts')) {
            video.style.display = 'none';
        }
    });
}

// Use MutationObserver to monitor page changes
const observer = new MutationObserver(removeShorts);
observer.observe(document.body, { childList: true, subtree: true });

// Run the function initially
removeShorts();
