// Footer Component - Footer content and privacy functionality

export function initFooter() {
    loadFooter();
}

function ensureFooterCSSLoaded() {
    // Check if footer CSS is already loaded
    const existingLink = document.querySelector('link[href*="footer.css"]');
    if (existingLink) return;
    
    // Use absolute path for CSS
    const cssPath = '/css/components/footer.css?v=1.4';
    
    // Create and inject CSS link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssPath;
    document.head.appendChild(link);
}

function loadFooter() {
    // Ensure footer CSS is loaded
    ensureFooterCSSLoaded();
    
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
                            <p>Po - Pia 09:00 - 17:00</p>
                            <p>Víkend a sviatky dohodou</p>
                        </div>
                    </div>
                    
                    <!-- Column 3: CTA -->
                    <div class="footer-column footer-cta">
                        <h3>Máte záujem o naše služby?</h3>
                        <p>Kontaktujte nás pre bezplatnú konzultáciu a cenovú ponuku</p>
                        <a href="/kontakt" class="footer-cta-button">Kontaktovať nás</a>
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
    `;
    
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Make functions globally available for fallback
if (typeof window !== 'undefined') {
    window.loadFooter = loadFooter;
    window.ensureFooterCSSLoaded = ensureFooterCSSLoaded;
}