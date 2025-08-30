// Import router and components
import { router } from '../utils/routing/router.js';
import { Navigation } from '../components/navigation.js';
import { ScrollAnimations } from '../components/scrollAnimations.js';
import { ContactForm } from '../components/contactForm.js';
import { LanguageManager } from '../components/languageManager.js';

// Import page components
import { HomePage } from '../pages/home/HomePage.js';
import { InstructorsPage } from '../pages/instructors/InstructorsPage.js';
import { ProgramsPage } from '../pages/programs/ProgramsPage.js';

// Lazy load other pages
const AboutPage = () => import('../pages/about/AboutPage.js').then(m => m.AboutPage);
const WorkshopsPage = () => import('../pages/workshops/WorkshopsPage.js').then(m => m.WorkshopsPage);
const ContactPage = () => import('../pages/contact/ContactPage.js').then(m => m.ContactPage);

class App {
    constructor() {
        this.components = {};
        this.currentPageComponent = null;
        this.init();
    }

    async init() {
        try {
            // Wait for DOM to be ready
            await this.domReady();
            
            // Initialize global components
            this.initializeGlobalComponents();
            
            // Register all routes
            this.registerRoutes();
            
            // Setup global event listeners
            this.setupGlobalEventListeners();
            
            // Make router globally available
            window.router = router;
            
            console.log('Inner Light Studio app initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    domReady() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    initializeGlobalComponents() {
        try {
            // Initialize navigation
            this.components.navigation = new Navigation();
            
            // Initialize language manager
            this.components.languageManager = new LanguageManager();
            window.languageManager = this.components.languageManager;
            
            // Initialize global scroll animations
            this.components.scrollAnimations = new ScrollAnimations();
            
            // Add loading state styles
            this.addLoadingStyles();
            
            // Initialize page loader
            this.initializePageLoader();
        } catch (error) {
            console.error('Error initializing components:', error);
        }
    }

    registerRoutes() {
        try {
            // Register home page
            router.register('home', HomePage, 'Home');
            
            // Register instructors page
            router.register('instructors', InstructorsPage, 'Our Instructors');
            
            // Register programs page
            router.register('programs', ProgramsPage, 'Training Programs');
        
        // Register lazy-loaded pages
        router.register('about', class {
            constructor(data) { this.data = data; }
            async render() {
                const PageClass = await AboutPage();
                const page = new PageClass(this.data);
                return page.render();
            }
            async init() {
                const PageClass = await AboutPage();
                const page = new PageClass(this.data);
                if (page.init) page.init();
            }
        }, 'About Us');
        
        router.register('workshops', class {
            constructor(data) { this.data = data; }
            async render() {
                const PageClass = await WorkshopsPage();
                const page = new PageClass(this.data);
                return page.render();
            }
            async init() {
                const PageClass = await WorkshopsPage();
                const page = new PageClass(this.data);
                if (page.init) page.init();
            }
        }, 'Events');
        
        router.register('contact', class {
            constructor(data) { this.data = data; }
            async render() {
                const PageClass = await ContactPage();
                const page = new PageClass(this.data);
                return page.render();
            }
            async init() {
                const PageClass = await ContactPage();
                const page = new PageClass(this.data);
                if (page.init) page.init();
                
                // Initialize contact form for contact page
                if (typeof ContactForm !== 'undefined') {
                    new ContactForm();
                }
            }
        }, 'Contact Us');
        } catch (error) {
            console.error('Error registering routes:', error);
        }
    }

    setupGlobalEventListeners() {
        // Handle route changes
        window.addEventListener('routeChanged', (e) => {
            this.handleRouteChange(e.detail);
        });

        // Handle page visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                console.log('Page hidden');
            } else {
                console.log('Page visible');
            }
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Handle scroll events (throttled)
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    this.handleScroll();
                    scrollTimeout = null;
                }, 16); // ~60fps
            }
        });

        // Global navigation event delegation
        document.addEventListener('click', (e) => {
            const navElement = e.target.closest('[data-navigate]');
            if (navElement) {
                e.preventDefault();
                const route = navElement.dataset.navigate;
                const data = this.extractNavigationData(navElement);
                router.navigate(route, data);
            }
        });

        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key >= '1' && e.key <= '6') {
                e.preventDefault();
                const routes = ['home', 'about', 'instructors', 'programs', 'workshops', 'contact'];
                const routeIndex = parseInt(e.key) - 1;
                if (routes[routeIndex]) {
                    router.navigate(routes[routeIndex]);
                }
            }
        });
    }

    extractNavigationData(element) {
        const data = {};
        
        // Extract data attributes
        for (const attr of element.attributes) {
            if (attr.name.startsWith('data-') && attr.name !== 'data-navigate') {
                const key = attr.name.replace('data-', '');
                data[key] = attr.value;
            }
        }
        
        return data;
    }

    handleRouteChange(detail) {
        const { route, component } = detail;
        
        // Cleanup previous page component
        if (this.currentPageComponent && typeof this.currentPageComponent.destroy === 'function') {
            this.currentPageComponent.destroy();
        }
        
        // Store current page component
        this.currentPageComponent = component;
        
        // Update navigation
        if (this.components.navigation) {
            this.components.navigation.updateForCurrentPage(route);
        }
        
        // Update page-specific classes
        document.body.className = `page-${route}`;
        
        // Reinitialize scroll animations for new content
        if (this.components.scrollAnimations) {
            this.components.scrollAnimations.resetAnimations();
        }
        
        // Announce page change for screen readers
        this.announcePageChange(route);
    }

    announcePageChange(route) {
        const pageTitle = this.getPageTitle(route);
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Navigated to ${pageTitle}`;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    getPageTitle(route) {
        const titles = {
            'home': 'Home',
            'about': 'About Us',
            'instructors': 'Our Instructors',
            'programs': 'Training Programs',
            'workshops': 'Events',
            'contact': 'Contact Us'
        };
        
        return titles[route] || 'Inner Light Studio';
    }

    handleResize() {
        // Handle responsive changes
        Object.values(this.components).forEach(component => {
            if (typeof component.handleResize === 'function') {
                component.handleResize();
            }
        });
        
        // Notify current page component
        if (this.currentPageComponent && typeof this.currentPageComponent.handleResize === 'function') {
            this.currentPageComponent.handleResize();
        }
    }

    handleScroll() {
        // Handle scroll events
        Object.values(this.components).forEach(component => {
            if (typeof component.handleScroll === 'function') {
                component.handleScroll();
            }
        });
    }

    addLoadingStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
            }
            
            .loader-content {
                text-align: center;
                color: var(--primary-black);
            }
            
            .loader-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid var(--gray-300);
                border-top: 3px solid var(--primary-black);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border: 0;
            }
            
            .nav-logo-img {
                width: 32px;
                height: 32px;
                object-fit: contain;
                margin-right: 0.5rem;
            }
            
            .nav-logo {
                display: flex;
                align-items: center;
            }
            
            .nav-logo-text {
                font-size: 1.5rem;
                font-weight: 700;
                color: var(--primary-black);
            }
            
            .footer-logo {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .footer-logo-img {
                width: 40px;
                height: 40px;
                object-fit: contain;
            }
            
            .main-content {
                min-height: 100vh;
                padding-top: 80px;
            }
            
            .page-header {
                padding: 60px 0 40px;
                background: var(--gray-100);
                text-align: center;
            }
            
            .header-content h1 {
                font-size: 3rem;
                font-weight: 300;
                margin-bottom: 1rem;
                color: var(--primary-black);
            }
            
            .header-content p {
                font-size: 1.2rem;
                color: var(--gray-600);
                max-width: 600px;
                margin: 0 auto;
            }
        `;
        document.head.appendChild(style);
    }

    initializePageLoader() {
        // Create page loader if it doesn't exist
        if (!document.querySelector('.page-loader')) {
            const loader = document.createElement('div');
            loader.className = 'page-loader';
            loader.style.display = 'none';
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <p>Loading...</p>
                </div>
            `;
            document.body.appendChild(loader);
        }
    }

    // Performance monitoring
    logPerformance() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }
    }

    // Error handling
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        
        // You could send error reports to a service here
        // this.sendErrorReport(error, context);
    }

    // Cleanup method
    destroy() {
        // Cleanup global components
        Object.values(this.components).forEach(component => {
            if (typeof component.destroy === 'function') {
                component.destroy();
            }
        });
        
        // Cleanup current page component
        if (this.currentPageComponent && typeof this.currentPageComponent.destroy === 'function') {
            this.currentPageComponent.destroy();
        }
        
        // Cleanup router
        if (router && typeof router.destroy === 'function') {
            router.destroy();
        }
    }
}

// Initialize app when DOM is loaded
new App();

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.app && typeof window.app.destroy === 'function') {
        window.app.destroy();
    }
});