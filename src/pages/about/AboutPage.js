export class AboutPage {
    constructor(data = {}) {
        this.data = data;
    }

    async render() {
        return `
            <!-- About Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>About Inner Light Studio</h1>
                        <p>Empowering individuals through professional modeling training and confidence coaching</p>
                    </div>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="our-story section">
                <div class="container">
                    <div class="story-content">
                        <div class="story-text animate-slide-left">
                            <h2>Our Story</h2>
                            <p>Inner Light Studio was founded with a vision to illuminate the confidence and potential within every individual. We are a premier modeling training institute that specializes in transforming lives through professional coaching.</p>
                            
                            <p>What started as a small studio with a passionate instructor has grown into a recognized training center that has helped over 1000 students discover their inner confidence and master the art of modeling.</p>
                            
                            <p>Our expert instructors teach essential skills including runway walking, posture correction, confidence building, and personal development techniques to help you shine with authenticity and grace.</p>
                            
                            <div class="story-highlights">
                                <div class="highlight-item">
                                    <h4>Founded</h4>
                                    <p>2024</p>
                                </div>
                                <div class="highlight-item">
                                    <h4>Students Trained</h4>
                                    <p>20+</p>
                                </div>
                                <div class="highlight-item">
                                    <h4>Success Rate</h4>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>
                        <div class="story-image animate-slide-right">
                            <img src="public/images/about/our-story.jpg" alt="Inner Light Studio founding story" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="image-placeholder" style="display:none;">
                                <i class="fas fa-heart" aria-hidden="true"></i>
                                <p>Our story image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Mission & Vision -->
            <section class="mission-vision section">
                <div class="container">
                    <div class="mv-grid">
                        <div class="mv-card">
                            <div class="mv-icon">
                                <i class="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To empower individuals by unlocking their inner confidence and helping them develop the skills, mindset, and presence needed to succeed in modeling and life.</p>
                        </div>
                        <div class="mv-card">
                            <div class="mv-icon">
                                <i class="fas fa-eye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To be the leading modeling training institute that transforms lives by nurturing confidence, grace, and authentic self-expression in every student.</p>
                        </div>
                        <div class="mv-card">
                            <div class="mv-icon">
                                <i class="fas fa-gem"></i>
                            </div>
                            <h3>Our Values</h3>
                            <p>Authenticity, Excellence, Empowerment, and Growth. We believe that true beauty comes from confidence and being genuinely yourself.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Our Approach -->
            <section class="our-approach section">
                <div class="container">
                    <div class="section-header">
                        <h2>Our Training Approach</h2>
                        <p>A comprehensive methodology designed to transform confidence from the inside out</p>
                    </div>
                    <div class="approach-steps">
                        <div class="approach-step">
                            <div class="step-number">01</div>
                            <div class="step-content">
                                <h3>Assessment & Goal Setting</h3>
                                <p>We begin with a comprehensive assessment of your current skills and confidence level, then work with you to set achievable goals.</p>
                            </div>
                        </div>
                        <div class="approach-step">
                            <div class="step-number">02</div>
                            <div class="step-content">
                                <h3>Technical Training</h3>
                                <p>Master the fundamentals of runway walking, posture, and movement through structured lessons and hands-on practice.</p>
                            </div>
                        </div>
                        <div class="approach-step">
                            <div class="step-number">03</div>
                            <div class="step-content">
                                <h3>Confidence Building</h3>
                                <p>Develop unshakeable self-confidence through proven psychological techniques and positive reinforcement.</p>
                            </div>
                        </div>
                        <div class="approach-step">
                            <div class="step-number">04</div>
                            <div class="step-content">
                                <h3>Real-World Practice</h3>
                                <p>Apply your skills in realistic scenarios and receive constructive feedback to refine your abilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statistics -->
            <section class="about-stats section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-number">20+</div>
                            <div class="stat-label">Students Trained</div>
                            <p>Successfully graduated from our programs</p>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">2024</div>
                            <div class="stat-label">Founded</div>
                            <p>Year we started transforming lives</p>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Success Rate</div>
                            <p>Students report improved confidence</p>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">2</div>
                            <div class="stat-label">Expert Instructors</div>
                            <p>Yen and Ada - your modeling mentors</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- What Makes Us Different -->
            <section class="what-makes-different section">
                <div class="container">
                    <div class="section-header">
                        <h2>What Makes Us Different</h2>
                        <p>Discover why students choose Inner Light Studio for their transformation journey</p>
                    </div>
                    <div class="differences-grid">
                        <div class="difference-item">
                            <div class="difference-icon">
                                <i class="fas fa-users-cog"></i>
                            </div>
                            <h3>Personalized Approach</h3>
                            <p>Every student receives individual attention and a customized training plan based on their unique needs and goals.</p>
                        </div>
                        <div class="difference-item">
                            <div class="difference-icon">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from experienced professionals who have worked in the modeling industry and understand what it takes to succeed.</p>
                        </div>
                        <div class="difference-item">
                            <div class="difference-icon">
                                <i class="fas fa-heart-pulse"></i>
                            </div>
                            <h3>Holistic Development</h3>
                            <p>We focus not just on technical skills, but on building genuine confidence and personal growth.</p>
                        </div>
                        <div class="difference-item">
                            <div class="difference-icon">
                                <i class="fas fa-handshake"></i>
                            </div>
                            <h3>Ongoing Support</h3>
                            <p>Our commitment to your success doesn't end with graduation. We provide continued guidance and networking opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="about-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Unlock Your Inner Light?</h2>
                        <p>Join hundreds of successful graduates who have transformed their confidence and achieved their modeling goals.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="programs">Explore Our Programs</button>
                            <button class="btn btn-secondary" data-navigate="contact">Schedule a Consultation</button>
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
                window.router.navigate(route);
            });
        });
    }

    initializeAnimations() {
        // Import and initialize scroll animations
        import('../../components/scrollAnimations.js').then(({ ScrollAnimations }) => {
            this.scrollAnimations = new ScrollAnimations();
        });
    }

    // Cleanup when leaving page
    destroy() {
        if (this.scrollAnimations && typeof this.scrollAnimations.destroy === 'function') {
            this.scrollAnimations.destroy();
        }
    }
}