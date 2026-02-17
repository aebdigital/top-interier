// Fallback components script - loads without ES6 modules
console.log('Loading fallback components...');

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFallbackComponents);
} else {
    initFallbackComponents();
}

function initFallbackComponents() {
    console.log('Initializing fallback components...');
    
    // Load header and footer
    loadHeaderFallback();
    loadFooterFallback();
    
    // Initialize mobile navigation
    initMobileNavigationFallback();
    
    // Initialize scroll effects
    initScrollEffectsFallback();
    
    // Initialize map scroll fix
    initMapScrollFix();
    
    // Initialize product carousel (mobile-only)
    initProductCarousel();
    
    console.log('Fallback components initialized');
}

function loadHeaderFallback() {
    console.log('Loading header fallback...');
    
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    
    let basePath, pagesPath;
    if (isInPagesDir) {
        basePath = '../';
        pagesPath = '';
    } else {
        basePath = '';
        pagesPath = 'pages/';
    }
    
    const navigationHTML = `
        

        <!-- Transparent Navigation -->
        <nav class="navbar navbar-transparent">
            <div class="nav-container">
                <div class="nav-logo">
                    <a href="${basePath}index.html" class="logo-link">
                        <span class="logo-text">TOP INTERIER</span>
                    </a>
                </div>
                <ul class="nav-menu nav-menu-left">
                    <li><a href="${basePath}index.html" class="nav-link">Domov</a></li>
                    <li><a href="${pagesPath}sluzby.html" class="nav-link">Služby</a></li>
                    <li><a href="${pagesPath}vizualizacie.html" class="nav-link">Vizualizácie</a></li>
                    <li><a href="${pagesPath}referencie.html" class="nav-link">Referencie</a></li>
                    <li><a href="${pagesPath}kontakt.html" class="nav-link">Kontakt</a></li>
                </ul>
                <div class="nav-menu-right">
                    <div class="social-icons">
                        <a href="https://www.facebook.com/topinterierDS" class="social-icon" aria-label="Facebook" target="_blank" rel="noopener">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/top_interier_studio/" class="social-icon" aria-label="Instagram" target="_blank" rel="noopener">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="mailto:topinteriersro@gmail.com" class="social-icon" aria-label="Email">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <div class="mobile-overlay"></div>
        <div class="mobile-sidebar">
            <div class="mobile-sidebar-header">
                <div class="mobile-sidebar-logo">
                    <span class="logo-text">TOP INTERIER</span>
                </div>
                <button class="mobile-close-btn">✕</button>
            </div>
            <ul class="mobile-nav-menu">
                <li><a href="${basePath}index.html" class="mobile-nav-link">Domov</a></li>
                <li><a href="${pagesPath}sluzby.html" class="mobile-nav-link">Služby</a></li>
                <li><a href="${pagesPath}vizualizacie.html" class="mobile-nav-link">Vizualizácie</a></li>
                <li><a href="${pagesPath}referencie.html" class="mobile-nav-link">Referencie</a></li>
                <li><a href="${pagesPath}kontakt.html" class="mobile-nav-link">Kontakt</a></li>
            </ul>
        </div>
    `;
    
    const navigationContainer = document.getElementById('navigation-container');
    if (navigationContainer) {
        navigationContainer.innerHTML = navigationHTML;
        setActiveNavLink();
        
        // Ensure logo loads immediately
        setTimeout(() => {
            const logoImage = document.querySelector('.logo-image');
            if (logoImage && !logoImage.src) {
                logoImage.src = `${basePath}sources/logo2.png`;
                console.log('Logo source set to:', logoImage.src);
            }
        }, 100);
        
        console.log('Header loaded successfully');
    } else {
        console.error('Navigation container not found');
    }
}

function loadFooterFallback() {
    console.log('Loading footer fallback...');

    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const isKontaktPage = currentPath.includes('kontakt.html');

    let basePath, pagesPath;
    if (isInPagesDir) {
        basePath = '../';
        pagesPath = '';
    } else {
        basePath = '';
        pagesPath = 'pages/';
    }

    // No additional map sections needed - only show on contact page
    const mapSection = '';

    const footerHTML = `
        <footer id="footer" class="footer">
            <!-- Footer Main Content -->
            <div class="footer-main-content">
                <div class="footer-columns">
                    <!-- Column 1: Contact Info -->
                    <div class="footer-column">
                        <h3>Kontakt</h3>
                        <div class="footer-contact-info">
                            <p><a href="tel:+421903808111">+421 903 808 111</a></p>
                            <p><a href="mailto:topinteriersro@gmail.com">topinteriersro@gmail.com</a></p>
                            <p>Mlynská 4629/2A</p>
                            <p>929 01 Dunajská Streda</p>
                        </div>
                    </div>
                    
                    <!-- Column 2: Opening Hours -->
                    <div class="footer-column">
                        <h3>Otváracie hodiny</h3>
                        <div class="footer-hours">
                            <p>Pon - Pia 09:00 - 17:00</p>
                            <p>Víkend a sviatky dohodou</p>
                        </div>
                    </div>
                    
                    <!-- Column 3: CTA -->
                    <div class="footer-column footer-cta">
                        <h3>Máte záujem o naše služby?</h3>
                        <p>Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku</p>
                        <a href="${pagesPath}kontakt.html" class="footer-cta-button">Kontaktovať nás</a>
                    </div>
                </div>
                
                <!-- Footer Bottom -->
                <div class="footer-bottom">
                    <div class="footer-links">
                        <p><a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a></p>
                        <p><a href="#" onclick="openCookieSettings(); return false;">Nastavenia cookies</a></p>
                        <p><a href="https://aebdigital.sk" target="_blank" rel="noopener">Tvorba stránky - AEB Digital</a></p>
                        <p>&copy; TOP INTERIER, spol. s r.o. 2025</p>
                    </div>
                </div>
            </div>
        </footer>
        
        <!-- Cookie Consent Popup -->
        <div id="cookie-consent" class="cookie-consent">
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <div class="cookie-icon">🍪</div>
                    <div class="cookie-message">
                        Používame cookies na zlepšenie vašej používateľskej skúsenosti a na analýzu návštevnosti. Kliknutím na "Súhlasím" súhlasíte s používaním všetkých cookies.
                    </div>
                </div>
                <div class="cookie-actions">
                    <button class="cookie-btn settings" onclick="openCookieSettings()">Nastavenia</button>
                    <button class="cookie-btn accept" onclick="acceptAllCookies()">Súhlasím</button>
                </div>
            </div>
        </div>
        
        <!-- Cookie Settings Modal -->
        <div id="cookie-settings-modal" class="cookie-settings-modal">
            <div class="cookie-settings-content">
                <div class="cookie-settings-header">
                    <h2 class="cookie-settings-title">Nastavenia cookies</h2>
                    <button class="cookie-settings-close" onclick="closeCookieSettings()">&times;</button>
                </div>
                <div class="cookie-settings-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Nevyhnutné cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="necessary-cookies" checked disabled>
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Tieto cookies sú potrebné pre základnú funkčnosť stránky a nemožno ich vypnúť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Analytické cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="analytics-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Pomáhajú nám pochopiť, ako návštevníci používajú našu stránku, aby sme ju mohli zlepšiť.
                        </p>
                    </div>
                    
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3 class="cookie-category-title">Marketingové cookies</h3>
                            <div class="cookie-toggle">
                                <input type="checkbox" id="marketing-cookies">
                                <span class="cookie-toggle-slider"></span>
                            </div>
                        </div>
                        <p class="cookie-category-description">
                            Používajú sa na personalizáciu reklám a meranie ich účinnosti.
                        </p>
                    </div>
                </div>
                <div class="cookie-settings-footer">
                    <button class="cookie-settings-btn save" onclick="saveCookieSettings()">Uložiť nastavenia</button>
                    <button class="cookie-settings-btn accept-all" onclick="acceptAllCookies()">Súhlasím so všetkými</button>
                </div>
            </div>
        </div>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
    } else {
        console.error('Footer container not found');
    }
}

function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    [...navLinks, ...mobileNavLinks].forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPage === '/' || currentPage.includes('index.html')) {
            if (href.includes('index.html')) {
                link.classList.add('active');
            }
        } else if (currentPage.includes(href.split('/').pop())) {
            link.classList.add('active');
        }
    });
}

function initMobileNavigationFallback() {
    document.addEventListener('click', function(e) {
        // Toggle mobile sidebar
        if (e.target.closest('.hamburger')) {
            const hamburger = e.target.closest('.hamburger');
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const navbar = document.querySelector('.navbar-transparent');
            
            hamburger.classList.toggle('active');
            mobileSidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            
            if (hamburger.classList.contains('active')) {
                navbar.classList.add('mobile-menu-open');
                document.body.style.overflow = 'hidden';
            } else {
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
        
        // Close mobile sidebar when clicking overlay, mobile link, or close button
        if (e.target.classList.contains('mobile-overlay') || e.target.classList.contains('mobile-nav-link') || e.target.classList.contains('mobile-close-btn')) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar) mobileSidebar.classList.remove('active');
            if (mobileOverlay) mobileOverlay.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            if (navbar) navbar.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
        }
    });
    
    // Close sidebar on window resize if screen becomes larger
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const mobileSidebar = document.querySelector('.mobile-sidebar');
            const mobileOverlay = document.querySelector('.mobile-overlay');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar-transparent');
            
            if (mobileSidebar && mobileSidebar.classList.contains('active')) {
                mobileSidebar.classList.remove('active');
                if (mobileOverlay) mobileOverlay.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                if (navbar) navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffectsFallback() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const transparentNavbar = document.querySelector('.navbar-transparent');
    
    // Set initial navbar state on page load
    updateNavbarBackgroundFallback();
    
    // Minimal scroll listener like template
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress (minimal calculation)
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = scrollPercentage + '%';
        }
        
        // Update navbar background (lightweight)
        updateNavbarBackgroundFallback();
    });
}

function updateNavbarBackgroundFallback() {
    const scrollPosition = window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');
    const logoImage = document.querySelector('.logo-image');

    if (!transparentNavbar) return;
    
    // Ensure logo image has correct src if it's empty
    if (logoImage && !logoImage.src) {
        const currentPath = window.location.pathname;
        const isInServicePage = currentPath.includes('/service-page/');
        const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
        
        let basePath;
        if (isInServicePage) {
            basePath = '../../';
        } else if (isInPagesDir) {
            basePath = '../';
        } else {
            basePath = '';
        }
        logoImage.src = `${basePath}sources/logo2.png`;
    }

    // 8vh trigger point for all pages
    const triggerPoint = window.innerHeight * 0.08;

    // Determine logo path based on current location
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/service-page/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;

    let basePath;
    if (isInServicePage) {
        basePath = '../../';
    } else if (isInPagesDir) {
        basePath = '../';
    } else {
        basePath = '';
    }

    if (scrollPosition > triggerPoint) {
        transparentNavbar.classList.add('scrolled');
        if (logoImage) {
            logoImage.src = `${basePath}sources/logo2.png`;
        }
    } else {
        transparentNavbar.classList.remove('scrolled');
        if (logoImage) {
            logoImage.src = `${basePath}sources/logo2.png`;
        }
    }
}

// Mobile-only product tabs carousel
function initProductCarousel() {
    // Only initialize on mobile
    if (window.innerWidth > 768) return;
    
    const container = document.querySelector('.product-tabs-container');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    
    if (!container || !leftArrow || !rightArrow) return;
    
    let currentIndex = 0;
    const totalTabs = 6;
    
    // Tab data for redirects
    const tabData = [
        { tab: 'dvere', text: 'Dvere' },
        { tab: 'zarubne', text: 'Zárubne' },
        { tab: 'drevo-schody', text: 'Drevené schody' },
        { tab: 'nabytok', text: 'Nábytok na mieru' },
        { tab: 'celoskla', text: 'Celosklá' },
        { tab: 'obklady', text: 'Obklady' }
    ];
    
    function updateCarousel() {
        const translateX = -(currentIndex * 16.666); // Move by 1/6 of container width
        container.style.transform = `translateX(${translateX}%)`;
        
        // Update active tab
        const tabs = document.querySelectorAll('.product-tab-hero');
        tabs.forEach((tab, index) => {
            tab.classList.toggle('active', index === currentIndex);
        });
    }
    
    function redirectToTab(index) {
        const currentPath = window.location.pathname;
        const isInPagesDir = currentPath.includes('/pages/');
        const basePath = isInPagesDir ? '' : 'pages/';
        
        window.location.href = `${basePath}produkty-sluzby.html?tab=${tabData[index].tab}`;
    }
    
    leftArrow.addEventListener('click', () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : totalTabs - 1;
        redirectToTab(newIndex);
    });
    
    rightArrow.addEventListener('click', () => {
        const newIndex = currentIndex < totalTabs - 1 ? currentIndex + 1 : 0;
        redirectToTab(newIndex);
    });
    
    // Initialize
    updateCarousel();
}

// Fix Google Maps scroll interference
function initMapScrollFix() {
    const mapContainers = document.querySelectorAll('.location-map-container');
    
    mapContainers.forEach(container => {
        container.addEventListener('click', function() {
            this.classList.add('active');
        });
        
        // Deactivate when clicking outside
        document.addEventListener('click', function(e) {
            if (!container.contains(e.target)) {
                container.classList.remove('active');
            }
        });
    });
}

// Cookie Consent Functions
function showCookieConsent() {
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
        document.getElementById('cookie-consent').classList.add('show');
    }
}

function acceptAllCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-cookies', 'true');
    localStorage.setItem('marketing-cookies', 'true');
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

let cookieScrollPosition = 0;

function openCookieSettings() {
    // Load current settings
    const analyticsEnabled = localStorage.getItem('analytics-cookies') === 'true';
    const marketingEnabled = localStorage.getItem('marketing-cookies') === 'true';

    document.getElementById('analytics-cookies').checked = analyticsEnabled;
    document.getElementById('marketing-cookies').checked = marketingEnabled;

    document.getElementById('cookie-settings-modal').classList.add('show');
    // Save scroll position and prevent scrolling
    cookieScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.top = `-${cookieScrollPosition}px`;
    document.body.classList.add('no-scroll');
}

function closeCookieSettings() {
    document.getElementById('cookie-settings-modal').classList.remove('show');
    // Restore scrolling and scroll position
    document.body.classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, cookieScrollPosition);
}

function saveCookieSettings() {
    const analyticsEnabled = document.getElementById('analytics-cookies').checked;
    const marketingEnabled = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('analytics-cookies', analyticsEnabled.toString());
    localStorage.setItem('marketing-cookies', marketingEnabled.toString());
    
    document.getElementById('cookie-consent').classList.remove('show');
    closeCookieSettings();
}

// Close modal when clicking on backdrop
document.addEventListener('click', function(e) {
    if (e.target.id === 'cookie-settings-modal') {
        closeCookieSettings();
    }
});

// Show cookie consent on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(showCookieConsent, 1000); // Show after 1 second
});

// Lightbox functionality embedded in fallback
let currentImages = [];
let currentIndex = 0;
let isLightboxOpen = false;

function initLightboxFallback() {
    createLightboxHTMLFallback();
    bindLightboxEventsFallback();
}

function createLightboxHTMLFallback() {
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

function bindLightboxEventsFallback() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.lightbox-close');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    const backdrop = modal.querySelector('.lightbox-backdrop');
    
    // Close events
    if (closeBtn) closeBtn.addEventListener('click', closeLightboxFallback);
    if (backdrop) backdrop.addEventListener('click', closeLightboxFallback);
    
    // Navigation events
    if (prevBtn) prevBtn.addEventListener('click', showPreviousFallback);
    if (nextBtn) nextBtn.addEventListener('click', showNextFallback);
    
    // Keyboard events
    document.addEventListener('keydown', handleKeydownFallback);
}

function openLightboxFallback(images, startIndex = 0) {
    currentImages = images;
    currentIndex = startIndex;
    isLightboxOpen = true;
    
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    const image = modal.querySelector('.lightbox-image');
    const prevBtn = modal.querySelector('.lightbox-prev');
    const nextBtn = modal.querySelector('.lightbox-next');
    
    // Show/hide navigation buttons
    if (prevBtn) prevBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentImages.length > 1 ? 'flex' : 'none';
    
    // Load image
    loadImageFallback(currentImages[currentIndex]);
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => {
        modal.style.opacity = '1';
        const backdrop = modal.querySelector('.lightbox-backdrop');
        if (backdrop) backdrop.style.opacity = '1';
        if (image) {
            image.style.transform = 'scale(1)';
            image.style.opacity = '1';
        }
    }, 10);
}

function closeLightboxFallback() {
    if (!isLightboxOpen) return;
    
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    const image = modal.querySelector('.lightbox-image');
    const backdrop = modal.querySelector('.lightbox-backdrop');
    
    // Animate out
    modal.style.opacity = '0';
    if (backdrop) backdrop.style.opacity = '0';
    if (image) {
        image.style.transform = 'scale(0.9)';
        image.style.opacity = '0';
    }
    
    setTimeout(() => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        isLightboxOpen = false;
    }, 300);
}

function showPreviousFallback() {
    if (currentImages.length <= 1) return;
    currentIndex = currentIndex > 0 ? currentIndex - 1 : currentImages.length - 1;
    updateLightboxImageFallback();
}

function showNextFallback() {
    if (currentImages.length <= 1) return;
    currentIndex = currentIndex < currentImages.length - 1 ? currentIndex + 1 : 0;
    updateLightboxImageFallback();
}

function updateLightboxImageFallback() {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    const image = modal.querySelector('.lightbox-image');
    
    // Fade out current image
    if (image) {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.95)';
    }
    
    setTimeout(() => {
        
        // Load new image
        loadImageFallback(currentImages[currentIndex]);
        
        // Fade in new image
        setTimeout(() => {
            if (image) {
                image.style.opacity = '1';
                image.style.transform = 'scale(1)';
            }
        }, 50);
    }, 150);
}

function loadImageFallback(src) {
    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;
    
    const image = modal.querySelector('.lightbox-image');
    if (!image) return;
    
    // Create new image to preload
    const newImg = new Image();
    newImg.onload = () => {
        image.src = newImg.src;
        image.alt = `Obrázok ${currentIndex + 1}`;
    };
    newImg.src = src;
}

function handleKeydownFallback(e) {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
        case 'Escape':
            closeLightboxFallback();
            break;
        case 'ArrowLeft':
            showPreviousFallback();
            break;
        case 'ArrowRight':
            showNextFallback();
            break;
    }
}

function initGalleryLightboxFallback(images, containerSelector = '.project-gallery-content') {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    // Add click handlers to all gallery items
    const galleryItems = container.querySelectorAll('.project-gallery-item img');
    galleryItems.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            openLightboxFallback(images, index);
        });
    });
}

// Make functions globally available
window.initLightbox = initLightboxFallback;
window.openLightbox = openLightboxFallback;
window.closeLightbox = closeLightboxFallback;
window.initGalleryLightbox = initGalleryLightboxFallback;

// Minimal fallback - no complex animations that could conflict
console.log('Fallback: Using minimal approach like template');