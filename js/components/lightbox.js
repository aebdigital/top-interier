// Lightbox Component - Modern image lightbox with smooth animations
function initLightbox() {
    createLightboxHTML();
    bindLightboxEvents();
}

let currentImages = [];
let currentIndex = 0;
let isOpen = false;

function createLightboxHTML() {
    // Remove existing lightbox if present
    const existingLightbox = document.getElementById('lightbox-modal');
    if (existingLightbox) {
        existingLightbox.remove();
    }

    const lightboxHTML = `
        <div id="lightbox-modal" class="lightbox-modal">
            <div class="lightbox-backdrop"></div>
            <div class="lightbox-container">
                <button class="lightbox-close" aria-label="Zavrieť lightbox">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <button class="lightbox-nav lightbox-prev" aria-label="Predchádzajúci obrázok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                </button>
                
                <button class="lightbox-nav lightbox-next" aria-label="Nasledujúci obrázok">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                </button>
                
                <div class="lightbox-content">
                    <img class="lightbox-image" src="" alt="" />
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
}

function bindLightboxEvents() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = modal.querySelector('.lightbox-close');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    const backdrop = modal.querySelector('.lightbox-backdrop');
    
    // Close events
    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    
    // Navigation events
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeydown);
    
    // Prevent scrolling when lightbox is open
    modal.addEventListener('wheel', (e) => {
        if (isOpen) e.preventDefault();
    }, { passive: false });
}

function openLightbox(images, startIndex = 0) {
    currentImages = images;
    currentIndex = startIndex;
    isOpen = true;
    
    const modal = document.getElementById('lightbox-modal');
    const image = modal.querySelector('.lightbox-image');
    
    // Show/hide navigation buttons
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    prevBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    
    // Load image
    loadImage(currentImages[currentIndex]);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate in
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.querySelector('.lightbox-backdrop').style.opacity = '1';
        image.style.transform = 'scale(1)';
        image.style.opacity = '1';
    });
}

function closeLightbox() {
    if (!isOpen) return;
    
    const modal = document.getElementById('lightbox-modal');
    const image = modal.querySelector('.lightbox-image');
    
    // Animate out
    modal.style.opacity = '0';
    modal.querySelector('.lightbox-backdrop').style.opacity = '0';
    image.style.transform = 'scale(0.9)';
    image.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        isOpen = false;
    }, 300);
}

function showPrevious() {
    if (currentImages.length <= 1) return;
    currentIndex = currentIndex > 0 ? currentIndex - 1 : currentImages.length - 1;
    updateLightboxImage();
}

function showNext() {
    if (currentImages.length <= 1) return;
    currentIndex = currentIndex < currentImages.length - 1 ? currentIndex + 1 : 0;
    updateLightboxImage();
}

function updateLightboxImage() {
    const modal = document.getElementById('lightbox-modal');
    const image = modal.querySelector('.lightbox-image');
    
    // Fade out current image
    image.style.opacity = '0';
    image.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        
        // Load new image
        loadImage(currentImages[currentIndex]);
        
        // Fade in new image
        setTimeout(() => {
            image.style.opacity = '1';
            image.style.transform = 'scale(1)';
        }, 50);
    }, 150);
}

function loadImage(src) {
    const modal = document.getElementById('lightbox-modal');
    const image = modal.querySelector('.lightbox-image');
    
    // Create new image to preload
    const newImg = new Image();
    newImg.onload = () => {
        image.src = newImg.src;
        image.alt = `Obrázok ${currentIndex + 1}`;
    };
    newImg.src = src;
}

function handleKeydown(e) {
    if (!isOpen) return;
    
    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrevious();
            break;
        case 'ArrowRight':
            showNext();
            break;
    }
}

// Function to initialize lightbox for gallery items
function initGalleryLightbox(images, containerSelector = '.project-gallery-content') {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    // Add click handlers to all gallery items
    const galleryItems = container.querySelectorAll('.project-gallery-item img');
    galleryItems.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            // For hero image (index 0), start from first thumbnail
            // For thumbnails, adjust index since hero is separate
            const lightboxIndex = img.closest('.project-gallery-grid') ? 0 : index;
            openLightbox(images, lightboxIndex);
        });
    });
}

// Make functions globally available for fallback and direct use
if (typeof window !== 'undefined') {
    window.initLightbox = initLightbox;
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    window.initGalleryLightbox = initGalleryLightbox;
}