export class ScrollAnimations {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        // Create intersection observer for scroll animations
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Stop observing once animated
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.observeElements();
    }

    observeElements() {
        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-fade-in'
        );
        
        animatedElements.forEach(element => {
            this.observer.observe(element);
        });
    }

    // Method to manually animate elements (useful for dynamic content)
    animateElement(element, animationType = 'fade-in') {
        element.classList.add(`animate-${animationType}`);
        if (this.observer) {
            this.observer.observe(element);
        }
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
    }
}