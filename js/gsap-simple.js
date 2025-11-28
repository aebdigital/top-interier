// GSAP Animations for WENS DOOR Website - Exact copy of working version structure
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. HERO SECTION ANIMATIONS
    // Hero title animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        gsap.fromTo(heroTitle, 
            { 
                opacity: 0, 
                y: 50 
            },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.9, 
                ease: "power2.out",
                delay: 0.2
            }
        );
    }

    // Hero subtitle animation
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        gsap.fromTo(heroSubtitle, 
            { 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                delay: 0.6
            }
        );
    }

    // Hero stats animation
    const statItems = document.querySelectorAll('.stat-item');
    if (statItems.length > 0) {
        gsap.fromTo(statItems, 
            { 
                opacity: 0, 
                scale: 0.8 
            },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.8, 
                ease: "back.out(1.7)",
                stagger: 0.2,
                delay: 0.8
            }
        );
    }

    // 2. SCROLL ANIMATIONS (only animate elements that exist)
    
    // Generic section animations (exclude hero section)
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        gsap.fromTo(section, 
            { 
                opacity: 0, 
                y: 30 
            },
            {
                opacity: 1, 
                y: 0, 
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });

    // Counter animations for stat numbers
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(counter => {
        const textNode = counter.childNodes[0];
        if (textNode && textNode.textContent) {
            const target = parseInt(textNode.textContent) || 100;
            const obj = { value: 0 };

            // Set initial value to 0
            textNode.textContent = 0;

            // Animate immediately on page load with a small delay
            gsap.to(obj, {
                value: target,
                duration: 2,
                delay: 0.5,
                ease: "power2.out",
                onUpdate: () => {
                    textNode.textContent = Math.round(obj.value);
                }
            });
        }
    });

    // CTA button hover animations
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });

        button.addEventListener('mouseenter', () => tl.play());
        button.addEventListener('mouseleave', () => tl.reverse());
    });

    // SCROLL PROGRESS INDICATOR (only if element exists)
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');
    if (scrollProgressBar) {
        gsap.to(scrollProgressBar, {
            height: '100%',
            ease: "none",
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: true
            }
        });
    }

    // PERFORMANCE OPTIMIZATION
    // Refresh ScrollTrigger on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });

    console.log('🎬 GSAP animations loaded successfully!');
});