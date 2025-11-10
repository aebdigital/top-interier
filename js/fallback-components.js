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
                <ul class="nav-menu nav-menu-left">
                    <li><a href="${basePath}index.html" class="nav-link">Domov</a></li>
                    <li><a href="${pagesPath}sluzby.html" class="nav-link">Služby</a></li>
                    <li><a href="${pagesPath}o-nas.html" class="nav-link">O nás</a></li>
                </ul>
                <div class="nav-logo">
                    <a href="${basePath}index.html" class="logo-link">
                        <img src="${basePath}sources/logo2.png" alt="TOP INTERIER s.r.o." class="logo-image">
                    </a>
                </div>
                <ul class="nav-menu nav-menu-right">
                    <li><a href="${pagesPath}vizualizacie.html" class="nav-link">Vizualizácie</a></li>
                    <li><a href="${pagesPath}referencie.html" class="nav-link">Referencie</a></li>
                    <li><a href="${pagesPath}kontakt.html" class="nav-link">Kontakt</a></li>
                </ul>
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
                    <img src="${basePath}sources/logo2.png" alt="TOP INTERIER">
                </div>
                <button class="mobile-close-btn">✕</button>
            </div>
            <ul class="mobile-nav-menu">
                <li><a href="${basePath}index.html" class="mobile-nav-link">Domov</a></li>
                <li><a href="${pagesPath}sluzby.html" class="mobile-nav-link">Služby</a></li>
                <li><a href="${pagesPath}o-nas.html" class="mobile-nav-link">O nás</a></li>
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
                <!-- Logo -->
                <div class="footer-logo-section">
                    <img src="${basePath}sources/logo2.png" alt="TOP INTERIER" class="footer-logo-image">
                </div>
                
                <!-- Company Name -->
                <div class="footer-company-name">
                    <h2>TOP INTERIER S.R.O.</h2>
                </div>
                
                <!-- Address Block -->
                <div class="footer-address-block">
                    <p>Dunajská Streda</p>
                    <p>Showroom</p>
                    <p>Mlynská 4629/2A</p>
                    <p>929 01 Dunajská Streda</p>
                </div>
                
                <!-- Contact Info -->
                <div class="footer-contact-info">
                    <p><a href="tel:+421903808111">+421 903 808 111</a></p>
                    <p><a href="mailto:topinteriersro@gmail.com">topinteriersro@gmail.com</a></p>
                </div>
                
                <!-- Opening Hours -->
                <div class="footer-hours">
                    <p>Po - Pi: 09:00 - 17:00</p>
                    <p>Iný čas na základe dohody</p>
                </div>
                
               
                
                <!-- Footer Links -->
                <div class="footer-links">
                    <p><a href="#" onclick="openPrivacyPopup(); return false;">Ochrana osobných údajov</a></p>
                    <p><a href="#">Nastavenia cookies</a></p>
                    <p><a href="https://aebdigital.sk" target="_blank" rel="noopener">Tvorba stránky - AEB Digital</a></p>
                    <p>&copy; TOP INTERIER s.r.o. 2025</p>
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
        
        <!-- Privacy Policy Popup -->
        <div id="privacy-popup" class="privacy-popup">
            <div class="privacy-popup-content">
                <div class="privacy-popup-header">
                    <h2>Ochrana osobných údajov</h2>
                    <button class="privacy-popup-close" onclick="closePrivacyPopup()">&times;</button>
                </div>
                <div class="privacy-popup-body">
                    <div class="company-info">
                        <strong>TOP INTERIER s.r.o.</strong><br>
                        <a href="https://maps.google.com/?q=Mlynsk%C3%A1+4629%2F2A,+929+01+Dunajsk%C3%A1+Streda" target="_blank" rel="noopener" style="text-decoration: underline; color: #ec1b23;">Mlynská 4629/2A, 929 01 Dunajská Streda</a><br>
                        Slovenská republika<br>
                        E-mail: topinteriersro@gmail.com<br>
                        Tel.: +421 903 808 111
                    </div>
                    
                    <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>
                    
                    <h3>I. Kontaktný formulár</h3>
                    <p>Na stránke www.topinterier.sk prevádzkujeme kontaktný formulár ktorého účelom je umožniť vám:</p>
                    <p>Položiť otázku k našim produktom a službám<br>
                    Požiadať o cenovú ponuku</p>
                    
                    <p><strong>Rozsah spracúvaných údajov:</strong></p>
                    <p>Meno a priezvisko<br>
                    E-mailová adresa<br>
                    Telefónne číslo<br>
                    Správu</p>
                    
                    <p><strong>Účel spracovania:</strong><br>
                    Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                    
                    <p><strong>Právny základ:</strong><br>
                    Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                    
                    <p><strong>Doba uchovávania:</strong><br>
                    Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                    
                    <h3>II. Súbory cookies</h3>
                    <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                    <p>Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).<br>
                    Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</p>
                    
                    <p><strong>Správa súhlasov:</strong><br>
                    Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>
                    
                    <h3>III. Práva dotknutej osoby</h3>
                    <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                    <p>Prístup k osobným údajom, ktoré spracúvame<br>
                    Oprava nepresných alebo neúplných údajov<br>
                    Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ<br>
                    Obmedzenie spracovania<br>
                    Prenosnosť údajov<br>
                    Odvolanie súhlasu – stane sa účinným dňom odvolania<br>
                    Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</p>
                    
                    <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na topinteriersro@gmail.com alebo telefónnom čísle +421 903 808 111.</p>
                    
                    <p><strong>Tieto Zásady nadobúdajú účinnosť dňom 25. 7. 2025.</strong></p>
                </div>
            </div>
        </div>
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
        initPrivacyModalFallback();
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

function initPrivacyModalFallback() {
    // Make privacy functions globally available
    let privacyScrollPosition = 0;

    window.openPrivacyPopup = function() {
        const popup = document.getElementById('privacy-popup');
        if (popup) {
            popup.classList.add('active');
            // Save scroll position and prevent scrolling
            privacyScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            document.body.style.top = `-${privacyScrollPosition}px`;
            document.body.classList.add('no-scroll');
        }
    };

    window.closePrivacyPopup = function() {
        const popup = document.getElementById('privacy-popup');
        if (popup) {
            popup.classList.remove('active');
            // Restore scrolling and scroll position
            document.body.classList.remove('no-scroll');
            document.body.style.top = '';
            window.scrollTo(0, privacyScrollPosition);
        }
    };

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('privacy-popup');
        if (popup && e.target === popup) {
            window.closePrivacyPopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.closePrivacyPopup();
        }
    });
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

// Minimal fallback - no complex animations that could conflict
console.log('Fallback: Using minimal approach like template');