import { Utils } from '../utils/helpers.js';

export class ScrollAnimations {
    constructor() {
        this.animatedElements = [];
        this.observers = new Map();
        this.animationClasses = {
            fadeIn: 'animate-fade-in',
            slideUp: 'animate-slide-up',
            slideLeft: 'animate-slide-left',
            slideRight: 'animate-slide-right',
            scaleUp: 'animate-scale-up'
        };
        
        this.init();
    }

    init() {
        this.createAnimationStyles();
        this.setupIntersectionObserver();
        this.findAnimatableElements();
    }

    createAnimationStyles() {
        if (document.getElementById('scroll-animation-styles')) return;

        const style = document.createElement('style');
        style.id = 'scroll-animation-styles';
        style.textContent = `
            /* Base animation classes */
            .animate-fade-in {
                opacity: 0;
                transition: opacity 0.8s ease-out;
            }
            
            .animate-fade-in.in-view {
                opacity: 1;
            }
            
            .animate-slide-up {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.8s ease-out;
            }
            
            .animate-slide-up.in-view {
                opacity: 1;
                transform: translateY(0);
            }
            
            .animate-slide-left {
                opacity: 0;
                transform: translateX(-30px);
                transition: all 0.8s ease-out;
            }
            
            .animate-slide-left.in-view {
                opacity: 1;
                transform: translateX(0);
            }
            
            .animate-slide-right {
                opacity: 0;
                transform: translateX(30px);
                transition: all 0.8s ease-out;
            }
            
            .animate-slide-right.in-view {
                opacity: 1;
                transform: translateX(0);
            }
            
            .animate-scale-up {
                opacity: 0;
                transform: scale(0.9);
                transition: all 0.8s ease-out;
            }
            
            .animate-scale-up.in-view {
                opacity: 1;
                transform: scale(1);
            }
            
            /* Stagger animations */
            .stagger-animation > * {
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.6s ease-out;
            }
            
            .stagger-animation.animate > *:nth-child(1) { transition-delay: 0.1s; }
            .stagger-animation.animate > *:nth-child(2) { transition-delay: 0.2s; }
            .stagger-animation.animate > *:nth-child(3) { transition-delay: 0.3s; }
            .stagger-animation.animate > *:nth-child(4) { transition-delay: 0.4s; }
            .stagger-animation.animate > *:nth-child(5) { transition-delay: 0.5s; }
            .stagger-animation.animate > *:nth-child(6) { transition-delay: 0.6s; }
            
            .stagger-animation.animate > * {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Reduce motion for accessibility */
            @media (prefers-reduced-motion: reduce) {
                .animate-fade-in,
                .animate-slide-up,
                .animate-slide-left,
                .animate-slide-right,
                .animate-scale-up,
                .stagger-animation > * {
                    transition: none !important;
                    opacity: 1 !important;
                    transform: none !important;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    setupIntersectionObserver() {
        // Main observer for single elements
        this.mainObserver = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        // Stagger observer for grouped elements
        this.staggerObserver = new IntersectionObserver(
            (entries) => this.handleStaggerIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -5% 0px'
            }
        );
    }

    findAnimatableElements() {
        // Find elements with animation classes
        Object.values(this.animationClasses).forEach(className => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => {
                this.animatedElements.push({
                    element,
                    animationType: className,
                    animated: false
                });
                this.mainObserver.observe(element);
            });
        });

        // Find elements with data-animate attribute
        const dataAnimateElements = document.querySelectorAll('[data-animate]');
        dataAnimateElements.forEach(element => {
            const animationType = element.dataset.animate;
            const animationClass = this.animationClasses[animationType] || this.animationClasses.fadeIn;
            
            element.classList.add(animationClass);
            
            this.animatedElements.push({
                element,
                animationType: animationClass,
                animated: false
            });
            this.mainObserver.observe(element);
        });

        // Find stagger animation containers
        const staggerContainers = document.querySelectorAll('.stagger-animation');
        staggerContainers.forEach(container => {
            this.staggerObserver.observe(container);
        });

        // Auto-detect common elements for animation
        this.autoDetectElements();
    }

    autoDetectElements() {
        const selectors = [
            '.team-member',
            '.service-card',
            '.event-card',
            '.about-text',
            '.stats .stat'
        ];

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((element, index) => {
                if (!element.classList.contains('animate-slide-up')) {
                    element.classList.add('animate-slide-up');
                    
                    // Add stagger delay
                    element.style.transitionDelay = `${index * 0.1}s`;
                    
                    this.animatedElements.push({
                        element,
                        animationType: 'animate-slide-up',
                        animated: false
                    });
                    this.mainObserver.observe(element);
                }
            });
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animatedElement = this.animatedElements.find(item => item.element === element);
                
                if (animatedElement && !animatedElement.animated) {
                    element.classList.add('in-view');
                    animatedElement.animated = true;
                    
                    // Dispatch custom event
                    Utils.dispatchCustomEvent(element, 'elementAnimated', {
                        animationType: animatedElement.animationType
                    });
                    
                    // Stop observing after animation
                    this.mainObserver.unobserve(element);
                }
            }
        });
    }

    handleStaggerIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target;
                container.classList.add('animate');
                
                // Dispatch custom event
                Utils.dispatchCustomEvent(container, 'staggerAnimated');
                
                // Stop observing after animation
                this.staggerObserver.unobserve(container);
            }
        });
    }

    // Public method to manually trigger animation
    animateElement(element, animationType = 'fadeIn') {
        const animationClass = this.animationClasses[animationType] || this.animationClasses.fadeIn;
        
        element.classList.add(animationClass);
        
        // Use requestAnimationFrame to ensure class is applied before triggering
        requestAnimationFrame(() => {
            element.classList.add('in-view');
        });
    }

    // Public method to add custom animation
    addCustomAnimation(selector, animationType = 'fadeIn', delay = 0) {
        const elements = document.querySelectorAll(selector);
        const animationClass = this.animationClasses[animationType] || this.animationClasses.fadeIn;
        
        elements.forEach((element, index) => {
            element.classList.add(animationClass);
            
            if (delay > 0) {
                element.style.transitionDelay = `${delay * index}s`;
            }
            
            this.animatedElements.push({
                element,
                animationType: animationClass,
                animated: false
            });
            
            this.mainObserver.observe(element);
        });
    }

    // Public method to create scroll-triggered counter
    createScrollCounter(element, targetNumber, duration = 2000, suffix = '') {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Utils.animateNumber(element, targetNumber, duration, suffix);
                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        observer.observe(element);
        this.observers.set(element, observer);
    }

    // Public method to animate progress bars
    animateProgressBar(progressBar, percentage, duration = 1500) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fill = progressBar.querySelector('.progress-fill') || progressBar;
                        
                        fill.style.transition = `width ${duration}ms ease-out`;
                        fill.style.width = `${percentage}%`;
                        
                        observer.unobserve(progressBar);
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        observer.observe(progressBar);
        this.observers.set(progressBar, observer);
    }

    // Public method to reset animations (useful for SPAs)
    resetAnimations() {
        this.animatedElements.forEach(item => {
            item.element.classList.remove('in-view');
            item.animated = false;
            this.mainObserver.observe(item.element);
        });
    }

    // Public method to check if reduced motion is preferred
    prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // Handle resize for performance
    handleResize() {
        // Debounce resize handling
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            // Re-calculate intersection observers if needed
            this.refreshObservers();
        }, 250);
    }

    refreshObservers() {
        // Disconnect and reconnect observers
        this.mainObserver.disconnect();
        this.staggerObserver.disconnect();
        
        this.setupIntersectionObserver();
        
        // Re-observe elements that haven't been animated
        this.animatedElements.forEach(item => {
            if (!item.animated) {
                this.mainObserver.observe(item.element);
            }
        });
    }

    // Cleanup method
    destroy() {
        // Disconnect all observers
        this.mainObserver.disconnect();
        this.staggerObserver.disconnect();
        
        this.observers.forEach(observer => {
            observer.disconnect();
        });
        
        this.observers.clear();
        this.animatedElements = [];
        
        // Remove animation styles
        const animationStyles = document.getElementById('scroll-animation-styles');
        if (animationStyles) {
            animationStyles.remove();
        }
        
        clearTimeout(this.resizeTimeout);
    }
}