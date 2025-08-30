// Navigation component for Inner Light Studio

export class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.isMenuOpen = false;
        this.scrollThreshold = 50;
        
        // Navigation routes mapping
        this.routes = {
            'home': 'home',
            'about': 'about', 
            'instructors': 'instructors',
            'programs': 'programs',
            'workshops': 'workshops',
            'contact': 'contact'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.handleScroll(); // Set initial state
        this.updateLogo();
    }

    setupEventListeners() {
        // Mobile menu toggle
        if (this.hamburger) {
            this.hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }

        // Handle navigation link clicks
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const href = link.getAttribute('href');
                let route = 'home';
                
                // Extract route from href
                if (href.startsWith('#')) {
                    route = href.substring(1) || 'home';
                }
                
                // Navigate using router
                if (window.router && this.routes[route]) {
                    window.router.navigate(this.routes[route]);
                }
                
                // Close mobile menu if open
                if (this.isMenuOpen) {
                    this.toggleMobileMenu();
                }
                
                // Update active link
                this.setActiveLink(route);
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
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    this.handleScroll();
                    scrollTimeout = null;
                }, 16); // ~60fps
            }
        });

        // Handle resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Listen for route changes to update active navigation
        window.addEventListener('routeChanged', (e) => {
            this.setActiveLink(e.detail.route);
        });
    }

    updateLogo() {
        const logoElement = document.querySelector('.nav-logo img');
        if (!logoElement) {
            // Create logo if it doesn't exist
            const navLogo = document.querySelector('.nav-logo h2');
            if (navLogo) {
                navLogo.innerHTML = `
                    <img src="public/logo/2.png" alt="Inner Light Studio" class="nav-logo-img">
                    <span class="nav-logo-text">Inner Light</span>
                `;
            }
        }
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
        const event = new CustomEvent('mobileMenuToggle', {
            detail: { isOpen: this.isMenuOpen }
        });
        this.navbar.dispatchEvent(event);
    }

    setActiveLink(activeRoute) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            let linkRoute = 'home';
            
            if (href.startsWith('#')) {
                linkRoute = href.substring(1) || 'home';
            }
            
            if (linkRoute === activeRoute) {
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
    }

    handleResize() {
        const isMobile = window.innerWidth <= 768;
        
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
    navigateTo(route) {
        if (window.router && this.routes[route]) {
            window.router.navigate(this.routes[route]);
        }
    }

    // Public method to highlight a specific link
    setActiveLink(route) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            let linkRoute = 'home';
            
            if (href.startsWith('#')) {
                linkRoute = href.substring(1) || 'home';
            }
            
            if (linkRoute === route) {
                link.classList.add('active');
            }
        });
    }

    // Update navigation for current page
    updateForCurrentPage(currentRoute) {
        this.setActiveLink(currentRoute);
        
        // Update page title in navigation if needed
        const pageTitle = this.getPageTitle(currentRoute);
        if (pageTitle) {
            document.title = `${pageTitle} | Inner Light Studio`;
        }
    }

    getPageTitle(route) {
        const titles = {
            'home': 'Home',
            'about': 'About Us',
            'instructors': 'Our Instructors', 
            'programs': 'Training Programs',
            'workshops': 'Workshops & Events',
            'contact': 'Contact Us'
        };
        
        return titles[route] || 'Inner Light Studio';
    }

    // Create navigation breadcrumbs for sub-pages
    createBreadcrumb(currentPage, parentPage = null) {
        const breadcrumbContainer = document.querySelector('.breadcrumb');
        if (!breadcrumbContainer) return;

        let breadcrumbHTML = '';
        
        if (parentPage) {
            breadcrumbHTML += `
                <button data-navigate="${parentPage}" class="breadcrumb-link">
                    <i class="fas fa-arrow-left"></i> Back to ${this.getPageTitle(parentPage)}
                </button>
            `;
        }
        
        breadcrumbContainer.innerHTML = breadcrumbHTML;
        
        // Add event listeners to breadcrumb links
        const breadcrumbLinks = breadcrumbContainer.querySelectorAll('[data-navigate]');
        breadcrumbLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const route = link.dataset.navigate;
                this.navigateTo(route);
            });
        });
    }

    // Enhance navigation with loading states
    showNavigationLoading(isLoading) {
        const navbar = document.querySelector('.navbar');
        if (isLoading) {
            navbar.classList.add('loading');
        } else {
            navbar.classList.remove('loading');
        }
    }

    // Add search functionality to navigation
    addSearchToNavigation() {
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer.querySelector('.nav-search')) {
            const searchHTML = `
                <div class="nav-search">
                    <input type="text" placeholder="Search..." class="search-input">
                    <button class="search-btn" aria-label="Search">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            `;
            
            navContainer.insertAdjacentHTML('beforeend', searchHTML);
            this.setupSearchEventListeners();
        }
    }

    setupSearchEventListeners() {
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchInput && searchBtn) {
            const handleSearch = () => {
                const query = searchInput.value.trim();
                if (query) {
                    // Implement search functionality
                    this.performSearch(query);
                }
            };
            
            searchBtn.addEventListener('click', handleSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
            });
        }
    }

    performSearch(query) {
        // Implement search logic here
        console.log('Searching for:', query);
        // You could navigate to a search results page
        // window.router.navigate('search', { query });
    }

    // Cleanup method
    destroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('routeChanged', this.setActiveLink);
        document.body.style.overflow = '';
    }
}