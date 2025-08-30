import { Utils } from '../utils/helpers.js';

export class Hero {
    constructor() {
        this.heroSection = document.querySelector('.hero');
        this.heroTitle = document.querySelector('.hero h1');
        this.heroButtons = document.querySelectorAll('.hero-buttons .btn');
        this.typewriterSpeed = 50;
        this.typewriterDelay = 1000;
        
        if (this.heroSection) {
            this.init();
        }
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Handle button clicks
        this.heroButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleButtonClick(e, button);
            });
        });

        // Handle scroll for parallax effect
        this.handleScroll = Utils.throttle(this.handleScroll.bind(this), 16);
        window.addEventListener('scroll', this.handleScroll);

        // Handle resize
        this.handleResize = Utils.debounce(this.handleResize.bind(this), 250);
        window.addEventListener('resize', this.handleResize);
    }

    initializeAnimations() {
        // Fade in hero content
        this.fadeInContent();
        
        // Initialize typewriter effect if title exists
        if (this.heroTitle) {
            setTimeout(() => {
                this.initTypewriterEffect();
            }, this.typewriterDelay);
        }

        // Stagger button animations
        this.animateButtons();
    }

    fadeInContent() {
        const heroContent = this.heroSection.querySelector('.hero-content');
        if (heroContent) {
            // Initially hide content
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(30px)';
            
            // Animate in
            setTimeout(() => {
                heroContent.style.transition = 'all 1s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    initTypewriterEffect() {
        if (!this.heroTitle) return;

        const originalText = this.heroTitle.textContent;
        const words = originalText.split(' ');
        let currentWordIndex = 0;
        let currentText = '';

        // Clear the title
        this.heroTitle.textContent = '';
        this.heroTitle.style.opacity = '1';

        const typeNextWord = () => {
            if (currentWordIndex < words.length) {
                currentText += (currentWordIndex > 0 ? ' ' : '') + words[currentWordIndex];
                this.heroTitle.textContent = currentText;
                
                // Add cursor effect
                this.addCursorBlink();
                
                currentWordIndex++;
                setTimeout(typeNextWord, this.typewriterSpeed * 8); // Slower for words
            } else {
                // Remove cursor when done
                this.removeCursorBlink();
            }
        };

        typeNextWord();
    }

    addCursorBlink() {
        if (!this.heroTitle.querySelector('.cursor')) {
            const cursor = document.createElement('span');
            cursor.className = 'cursor';
            cursor.textContent = '|';
            cursor.style.animation = 'blink 1s infinite';
            cursor.style.marginLeft = '2px';
            this.heroTitle.appendChild(cursor);
            
            // Add cursor animation styles if not already added
            this.addCursorStyles();
        }
    }

    removeCursorBlink() {
        const cursor = this.heroTitle.querySelector('.cursor');
        if (cursor) {
            cursor.remove();
        }
    }

    addCursorStyles() {
        if (!document.getElementById('cursor-styles')) {
            const style = document.createElement('style');
            style.id = 'cursor-styles';
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    animateButtons() {
        this.heroButtons.forEach((button, index) => {
            // Initially hide buttons
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';
            
            // Animate in with stagger
            setTimeout(() => {
                button.style.transition = 'all 0.6s ease-out';
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, 1500 + (index * 200)); // Stagger by 200ms
        });
    }

    handleButtonClick(event, button) {
        const buttonText = button.textContent.toLowerCase();
        
        // Add click animation
        this.addClickAnimation(button);
        
        // Handle different button actions
        if (buttonText.includes('training') || buttonText.includes('start')) {
            this.handleTrainingAction(event);
        } else if (buttonText.includes('course') || buttonText.includes('view')) {
            this.handleCoursesAction(event);
        }
        
        // Dispatch custom event
        Utils.dispatchCustomEvent(button, 'heroButtonClick', {
            buttonText: button.textContent,
            action: buttonText
        });
    }

    addClickAnimation(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    handleTrainingAction(event) {
        event.preventDefault();
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            Utils.smoothScrollTo(contactSection, 1000);
        }
    }

    handleCoursesAction(event) {
        event.preventDefault();
        
        // Scroll to services section
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            Utils.smoothScrollTo(servicesSection, 1000);
        }
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        const heroHeight = this.heroSection.offsetHeight;
        
        // Simple parallax effect
        if (scrollTop < heroHeight) {
            const parallaxSpeed = 0.5;
            const yPos = scrollTop * parallaxSpeed;
            
            const heroImage = this.heroSection.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${yPos}px)`;
            }
        }
    }

    handleResize() {
        // Recalculate any size-dependent animations
        const isMobile = Utils.isMobile();
        
        if (isMobile) {
            // Disable parallax on mobile for better performance
            const heroImage = this.heroSection.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = '';
            }
        }
    }

    // Public method to restart typewriter effect
    restartTypewriter() {
        if (this.heroTitle) {
            this.removeCursorBlink();
            this.initTypewriterEffect();
        }
    }

    // Public method to animate hero section
    animateIn() {
        this.fadeInContent();
        this.animateButtons();
        
        if (this.heroTitle) {
            setTimeout(() => {
                this.initTypewriterEffect();
            }, this.typewriterDelay);
        }
    }

    // Cleanup method
    destroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        
        // Remove cursor styles
        const cursorStyles = document.getElementById('cursor-styles');
        if (cursorStyles) {
            cursorStyles.remove();
        }
    }
}