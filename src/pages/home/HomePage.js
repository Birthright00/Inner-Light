export class HomePage {
    constructor(data = {}) {
        this.data = data;
        this.components = {};
    }

    async render() {
        return `
            <!-- Hero Section -->
            <section id="home" class="hero section">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1>Unlock Your <span class="highlight">Inner Light</span></h1>
                        <p>Transform your confidence through professional modeling training. Master runway walking, perfect your posture, and build unshakeable self-assurance.</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" data-navigate="contact">Start Training</button>
                            <button class="btn btn-secondary" data-navigate="programs">View Programs</button>
                        </div>
                    </div>
                    <div class="hero-image">
                        <img src="public/images/classes/hero-training.jpg" alt="Professional modeling training session at Inner Light Studio" loading="eager" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="image-placeholder" style="display:none;">
                            <i class="fas fa-star" aria-hidden="true"></i>
                            <p>Add your hero training image here</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section id="about" class="about section">
                <div class="container">
                    <header class="section-header">
                        <h2>About Inner Light Studio</h2>
                        <p>Empowering individuals through professional modeling training and confidence coaching</p>
                    </header>
                    <div class="about-content">
                        <div class="about-text animate-slide-right">
                            <h3>Our Mission</h3>
                            <p>Inner Light Studio was founded with a vision to illuminate the confidence and potential within every individual. We are a premier modeling training institute that specializes in transforming lives through professional coaching.</p>
                            <p>Our expert instructors teach essential skills including runway walking, posture correction, and confidence building to help you shine with authenticity and grace.</p>
                            <div class="stats stagger-animation">
                                <div class="stat">
                                    <h4>20+</h4>
                                    <p>Students Trained</p>
                                </div>
                                <div class="stat">
                                    <h4>2024</h4>
                                    <p>Founded</p>
                                </div>
                                <div class="stat">
                                    <h4>100%</h4>
                                    <p>Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>
                        <div class="about-image animate-slide-left">
                            <img src="public/images/classes/about-training.jpg" alt="Students learning posture and confidence techniques" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="image-placeholder" style="display:none;">
                                <i class="fas fa-users" aria-hidden="true"></i>
                                <p>Add training image here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Team Preview Section -->
            <section id="team-preview" class="team section">
                <div class="container">
                    <header class="section-header">
                        <h2>Meet Our Expert Instructors</h2>
                        <p>World-class coaches ready to guide your transformation</p>
                    </header>
                    <div class="team-grid">
                        <article class="team-member" data-navigate="instructors" data-instructor="yen" role="button" tabindex="0" aria-label="View Yen's profile">
                            <div class="member-image">
                                <img src="public/images/instructors/yen.jpg" alt="Yen - Head Instructor & Confidence Coach" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                <div class="image-placeholder" style="display:none;">
                                    <i class="fas fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <h3>Yen</h3>
                            <p>Head Instructor & Confidence Coach</p>
                            <div class="social-links">
                                <a href="#" aria-label="Yen's Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="Yen's LinkedIn"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </article>

                        <article class="team-member" data-navigate="instructors" data-instructor="ada" role="button" tabindex="0" aria-label="View Ada's profile">
                            <div class="member-image">
                                <img src="public/images/instructors/ada.jpg" alt="Ada - Movement & Posture Specialist" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                <div class="image-placeholder" style="display:none;">
                                    <i class="fas fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <h3>Ada</h3>
                            <p>Movement & Posture Specialist</p>
                            <div class="social-links">
                                <a href="#" aria-label="Ada's Instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" aria-label="Ada's LinkedIn"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </article>
                    </div>
                    <div class="section-cta">
                        <button class="btn btn-primary" data-navigate="instructors">View All Instructors</button>
                    </div>
                </div>
            </section>

            <!-- Services Preview -->
            <section id="services-preview" class="services section">
                <div class="container">
                    <header class="section-header">
                        <h2>Our Training Programs</h2>
                        <p>Comprehensive courses designed to transform your confidence and modeling skills</p>
                    </header>
                    <div class="services-grid">
                        <article class="service-card">
                            <div class="service-icon">
                                <i class="fas fa-walking" aria-hidden="true"></i>
                            </div>
                            <h3>Runway Walking</h3>
                            <p>Master the art of confident runway walking with proper technique and grace.</p>
                        </article>

                        <article class="service-card">
                            <div class="service-icon">
                                <i class="fas fa-user-check" aria-hidden="true"></i>
                            </div>
                            <h3>Posture Correction</h3>
                            <p>Improve your posture and body alignment for enhanced presence and confidence.</p>
                        </article>

                        <article class="service-card">
                            <div class="service-icon">
                                <i class="fas fa-heart" aria-hidden="true"></i>
                            </div>
                            <h3>Confidence Building</h3>
                            <p>Develop unshakeable self-confidence and overcome stage fright or social anxiety.</p>
                        </article>

                    </div>
                    <div class="section-cta">
                        <button class="btn btn-primary" data-navigate="programs">Explore All Programs</button>
                    </div>
                </div>
            </section>

            <!-- Events Preview -->
            <section id="events-preview" class="events section">
                <div class="container">
                    <header class="section-header">
                        <h2>Upcoming Events</h2>
                        <p>Join our transformative training sessions and events</p>
                    </header>
                    <div class="events-grid">
                        <article class="event-card">
                            <div class="event-date">
                                <span class="day">15</span>
                                <span class="month">Dec</span>
                            </div>
                            <div class="event-details">
                                <h3>Confidence Building Event</h3>
                                <p>Intensive event focused on building self-confidence and overcoming fears</p>
                                <span class="event-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Training Center</span>
                            </div>
                        </article>

                        <article class="event-card">
                            <div class="event-date">
                                <span class="day">28</span>
                                <span class="month">Dec</span>
                            </div>
                            <div class="event-details">
                                <h3>Runway Walking Masterclass</h3>
                                <p>Learn professional runway techniques from industry experts</p>
                                <span class="event-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Studio A</span>
                            </div>
                        </article>

                        <article class="event-card">
                            <div class="event-date">
                                <span class="day">12</span>
                                <span class="month">Jan</span>
                            </div>
                            <div class="event-details">
                                <h3>Posture & Presentation Course</h3>
                                <p>3-day intensive course on posture correction and presentation skills</p>
                                <span class="event-location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Main Studio</span>
                            </div>
                        </article>
                    </div>
                    <div class="section-cta">
                        <button class="btn btn-primary" data-navigate="workshops">View All Events</button>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta-section section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>Transform your confidence and unlock your potential with our expert training programs.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">Get Started Today</button>
                            <button class="btn btn-secondary" data-navigate="about">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
    }

    setupEventListeners() {
        // Navigation buttons
        const navButtons = document.querySelectorAll('[data-navigate]');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const route = button.dataset.navigate;
                const instructorId = button.dataset.instructor;
                
                if (route === 'instructors' && instructorId) {
                    // Navigate to specific instructor page
                    window.router.navigate('instructors', { instructor: instructorId });
                } else {
                    window.router.navigate(route);
                }
            });
        });

        // Smooth scroll for anchor links within home page
        const anchorLinks = document.querySelectorAll('a[href^="#"]:not([data-navigate])');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    initializeAnimations() {
        // Import and initialize scroll animations
        import('../../components/scrollAnimations.js').then(({ ScrollAnimations }) => {
            this.scrollAnimations = new ScrollAnimations();
        });

        // Import and initialize hero animations
        import('../../components/hero.js').then(({ Hero }) => {
            this.hero = new Hero();
        });

        // Import and initialize stats counter
        import('../../components/stats.js').then(({ Stats }) => {
            this.stats = new Stats();
        });
    }

    // Cleanup when leaving page
    destroy() {
        if (this.scrollAnimations && typeof this.scrollAnimations.destroy === 'function') {
            this.scrollAnimations.destroy();
        }
        if (this.hero && typeof this.hero.destroy === 'function') {
            this.hero.destroy();
        }
        if (this.stats && typeof this.stats.destroy === 'function') {
            this.stats.destroy();
        }
    }
}