export class Router {
    constructor() {
        this.routes = new Map();
        this.currentPage = null;
        this.currentPageComponent = null;
        this.defaultRoute = 'home';
        this.container = null;
        
        this.init();
    }

    init() {
        this.container = document.getElementById('app-content') || document.querySelector('main') || document.body;
        
        // Listen for navigation events
        window.addEventListener('popstate', (e) => {
            this.handleRoute(e.state?.route || this.defaultRoute);
        });

        // Wait for DOM to be fully loaded before handling initial route
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.handleInitialRoute();
            });
        } else {
            this.handleInitialRoute();
        }
    }
    
    handleInitialRoute() {
        // Small delay to ensure all components are initialized
        setTimeout(() => {
            const initialRoute = this.getRouteFromHash() || this.defaultRoute;
            this.handleRoute(initialRoute);
        }, 200);
    }

    // Register a route with its component
    register(path, component, title = '') {
        this.routes.set(path, {
            component,
            title: title || this.capitalize(path)
        });
    }

    // Navigate to a route
    navigate(route, data = {}) {
        if (this.routes.has(route)) {
            this.handleRoute(route, data);
            
            // Update URL without page reload - use hash-based routing consistently
            const url = route === this.defaultRoute ? '#' : `#${route}`;
            history.pushState({ route, data }, '', url);
        } else {
            console.warn(`Route '${route}' not found`);
            this.navigate(this.defaultRoute);
        }
    }

    // Handle route changes
    async handleRoute(route, data = {}) {
        if (!this.routes.has(route)) {
            route = this.defaultRoute;
        }

        const routeConfig = this.routes.get(route);
        
        if (!routeConfig) {
            console.error('No route config found for:', route);
            return;
        }
        
        try {
            // Update page title
            document.title = `${routeConfig.title} | Inner Light Studio`;
            
            // Update active navigation
            this.updateActiveNav(route);
            
            // Clear current content
            this.container.innerHTML = '';
            
            // Add loading state
            this.showLoader();
            
            // Load and render component
            const component = new routeConfig.component(data);
            await this.renderComponent(component, route);
            
            this.currentPage = route;
            this.currentPageComponent = component;
            
            // Dispatch route change event
            window.dispatchEvent(new CustomEvent('routeChanged', {
                detail: { route, data, component }
            }));
            
        } catch (error) {
            console.error(`Error loading route '${route}':`, error);
            this.showError();
        }
    }

    // Render component
    async renderComponent(component, route) {
        try {
            // Hide loader
            this.hideLoader();
            
            // Render component
            const content = await component.render();
            this.container.innerHTML = content;
            
            // Initialize component if it has an init method
            if (typeof component.init === 'function') {
                component.init();
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
            
        } catch (error) {
            console.error('Error rendering component:', error);
            this.showError();
        }
    }

    // Update active navigation item
    updateActiveNav(route) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href === `#${route}` || (href === '#' && route === this.defaultRoute)) {
                link.classList.add('active');
            }
        });
    }

    // Get route from URL hash
    getRouteFromHash() {
        const hash = window.location.hash.slice(1);
        return hash || null;
    }

    // Show loading state
    showLoader() {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.display = 'flex';
        } else {
            // Create loader if it doesn't exist
            const loaderHTML = `
                <div class="page-loader">
                    <div class="loader-content">
                        <div class="loader-spinner"></div>
                        <p>Loading...</p>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', loaderHTML);
        }
    }

    // Hide loading state
    hideLoader() {
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }

    // Show error state
    showError() {
        this.hideLoader();
        this.container.innerHTML = `
            <div class="error-page">
                <div class="error-content">
                    <h2>Page Not Found</h2>
                    <p>Sorry, we couldn't load the requested page.</p>
                    <button class="btn btn-primary" onclick="router.navigate('home')">
                        Return Home
                    </button>
                </div>
            </div>
        `;
    }

    // Utility function to capitalize route names
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Get current route
    getCurrentRoute() {
        return this.currentPage;
    }
    
    // Get current page component
    getCurrentPageComponent() {
        return this.currentPageComponent;
    }

    // Check if route exists
    hasRoute(route) {
        return this.routes.has(route);
    }

    // Programmatically trigger navigation (for use in components)
    goTo(route, data = {}) {
        this.navigate(route, data);
    }

    // Reload current page
    reload() {
        if (this.currentPage) {
            this.handleRoute(this.currentPage);
        }
    }

    // Go back in history
    back() {
        window.history.back();
    }

    // Add route guard/middleware
    addGuard(route, guardFunction) {
        if (this.routes.has(route)) {
            const routeConfig = this.routes.get(route);
            routeConfig.guard = guardFunction;
        }
    }

    // Destroy router (cleanup)
    destroy() {
        window.removeEventListener('popstate', this.handleRoute);
        this.routes.clear();
        this.currentPage = null;
    }
}

// Create global router instance
export const router = new Router();