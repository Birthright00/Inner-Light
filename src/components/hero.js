export class Hero {
    constructor() {
        this.heroSection = null;
        this.heroTitle = null;
        this.heroButtons = null;
        this.init();
    }

    init() {
        this.heroSection = document.querySelector('.hero');
        this.heroTitle = document.querySelector('.hero h1');
        this.heroButtons = document.querySelectorAll('.hero-buttons .btn');
        
        if (!this.heroSection) return;

        this.setupAnimations();
        this.addParallaxEffect();
    }

    setupAnimations() {
        // Animate hero elements on load
        if (this.heroTitle) {
            this.heroTitle.classList.add('animate-fade-in');
        }

        // Stagger button animations
        this.heroButtons.forEach((button, index) => {
            button.style.animationDelay = `${0.5 + (index * 0.2)}s`;
            button.classList.add('animate-fade-in');
        });

        // Add typewriter effect to highlight text
        const highlight = this.heroTitle?.querySelector('.highlight');
        if (highlight) {
            this.addTypewriterEffect(highlight);
        }
    }

    addTypewriterEffect(element) {
        const text = element.textContent;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-black)';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }, 150);
    }

    addParallaxEffect() {
        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const parallaxElement = this.heroSection.querySelector('.hero-image img');
            
            if (parallaxElement && scrolled <= this.heroSection.offsetHeight) {
                const yPos = -(scrolled * 0.3);
                parallaxElement.style.transform = `translateY(${yPos}px)`;
            }
            
            ticking = false;
        };

        const requestParallaxUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestParallaxUpdate);
        
        // Store the event listener for cleanup
        this.parallaxHandler = requestParallaxUpdate;
    }

    // Add floating elements animation
    addFloatingElements() {
        const floatingElements = `
            <div class="floating-elements" aria-hidden="true">
                <div class="floating-element" style="--delay: 0s; --duration: 3s;">✨</div>
                <div class="floating-element" style="--delay: 1s; --duration: 4s;">⭐</div>
                <div class="floating-element" style="--delay: 2s; --duration: 3.5s;">💫</div>
            </div>
        `;
        
        this.heroSection.insertAdjacentHTML('beforeend', floatingElements);
    }

    // Cleanup method
    destroy() {
        if (this.parallaxHandler) {
            window.removeEventListener('scroll', this.parallaxHandler);
        }
    }
}