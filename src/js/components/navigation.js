import { Utils } from '../utils/helpers.js';

export class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.isMenuOpen = false;
        this.scrollThreshold = 50;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.handleScroll(); // Set initial state
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }

        // Close mobile menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Handle internal links (starting with #)
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    this.handleSmoothScroll(href);
                    
                    // Close mobile menu
                    if (this.isMenuOpen) {
                        this.toggleMobileMenu();
                    }
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && 
                !this.navMenu.contains(e.target) && 
                !this.hamburger.contains(e.target)) {
                this.toggleMobileMenu();
            }
        });

        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.toggleMobileMenu();
            }
        });

        // Throttled scroll handler
        this.handleScroll = Utils.throttle(this.handleScroll.bind(this), 16);
        window.addEventListener('scroll', this.handleScroll);

        // Handle resize
        this.handleResize = Utils.debounce(this.handleResize.bind(this), 250);
        window.addEventListener('resize', this.handleResize);
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        
        // Toggle classes
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
        
        // Update aria attributes for accessibility
        this.hamburger.setAttribute('aria-expanded', this.isMenuOpen);
        this.navMenu.setAttribute('aria-hidden', !this.isMenuOpen);
        
        // Dispatch custom event
        Utils.dispatchCustomEvent(this.navbar, 'mobileMenuToggle', {
            isOpen: this.isMenuOpen
        });
    }

    handleSmoothScroll(href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            Utils.smoothScrollTo(targetElement, 800);
            
            // Update active link
            this.updateActiveLink(href);
        }
    }

    updateActiveLink(activeHref) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === activeHref) {
                link.classList.add('active');
            }
        });
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > this.scrollThreshold) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Update active link based on scroll position
        this.updateActiveOnScroll();
    }

    updateActiveOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100; // Offset for navbar height
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update active link
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    handleResize() {
        const isMobile = Utils.isMobile();
        
        // Close mobile menu on resize to desktop
        if (!isMobile && this.isMenuOpen) {
            this.toggleMobileMenu();
        }
        
        // Reset body overflow on resize
        if (!isMobile) {
            document.body.style.overflow = '';
        }
    }

    // Public method to close mobile menu
    closeMobileMenu() {
        if (this.isMenuOpen) {
            this.toggleMobileMenu();
        }
    }

    // Public method to navigate programmatically
    navigateTo(href) {
        if (href.startsWith('#')) {
            this.handleSmoothScroll(href);
        } else {
            window.location.href = href;
        }
    }

    // Public method to highlight a specific link
    setActiveLink(href) {
        this.updateActiveLink(href);
    }

    // Cleanup method
    destroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        document.body.style.overflow = '';
    }
}