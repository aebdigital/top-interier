// Header Component - Navigation functionality

export function initHeader() {
    loadNavigation();
    initMobileNavigation();
    initScrollEffects();
    initNavigationListeners();
}

// Make functions globally available for fallback - after function declarations

function loadNavigation() {
    // Determine current location and set appropriate paths
    const currentPath = window.location.pathname;
    const isInServicePage = currentPath.includes('/service-page/');
    const isInPagesDir = currentPath.includes('/pages/') && !isInServicePage;
    
    // Set navigation paths based on current location
    let basePath, pagesPath;
    
    if (isInServicePage) {
        // We're in /pages/service-page/
        basePath = '../../';  // To reach root for index.html
        pagesPath = '../';    // To reach /pages/ directory
    } else if (isInPagesDir) {
        // We're in /pages/
        basePath = '../';     // To reach root for index.html
        pagesPath = '';       // Other pages are in same directory (just filename.html)
    } else {
        // We're in root directory
        basePath = '';        // index.html is in same directory
        pagesPath = 'pages/'; // Other pages are in pages/ subdirectory
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
                    <span class="logo-text">TOP INTERIÉR</span>
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

function initMobileNavigation() {
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
            
            mobileSidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            navbar.classList.remove('mobile-menu-open');
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
                mobileOverlay.classList.remove('active');
                hamburger.classList.remove('active');
                navbar.classList.remove('mobile-menu-open');
                document.body.style.overflow = '';
            }
        }
    });
}

function initScrollEffects() {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    const transparentNavbar = document.querySelector('.navbar-transparent');
    
    // Set initial navbar state on page load
    updateNavbarBackground();
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar background
        updateNavbarBackground();
    });
}

function updateNavbarBackground() {
    const scrollPosition = window.scrollY;
    const transparentNavbar = document.querySelector('.navbar-transparent');

    if (!transparentNavbar) return;

    // Always keep the navbar with white background
    transparentNavbar.classList.add('scrolled');
}

function initNavigationListeners() {
    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadNavigation = loadNavigation;
    window.initMobileNavigation = initMobileNavigation;
    window.initScrollEffects = initScrollEffects;
    window.initNavigationListeners = initNavigationListeners;
    window.updateNavbarBackground = updateNavbarBackground;
}