export class AboutPage {
    constructor(data = {}) {
        this.data = data;
    }

    getDefaultTranslation(key) {
        const defaults = {
            'about.title': 'About Inner Light Studio',
            'about.subtitle': 'Empowering individuals through professional modeling training and confidence coaching',
            
            'about.story.title': 'Our Story',
            'about.story.paragraph1': 'Inner Light Studio was founded with a vision to illuminate the confidence and potential within every individual. We are a premier modeling training institute that specializes in transforming lives through professional coaching.',
            'about.story.paragraph2': 'What started as a small studio with a passionate instructor has grown into a recognized training center that has helped over 1000 students discover their inner confidence and master the art of modeling.',
            'about.story.paragraph3': 'Our expert instructors teach essential skills including runway walking, posture correction, confidence building, and personal development techniques to help you shine with authenticity and grace.',
            
            'about.highlights.founded': 'Founded',
            'about.highlights.students': 'Students Trained',
            'about.highlights.success': 'Success Rate',
            
            'about.mission.title': 'Our Mission',
            'about.mission.description': 'To empower individuals by unlocking their inner confidence and helping them develop the skills, mindset, and presence needed to succeed in modeling and life.',
            'about.vision.title': 'Our Vision',
            'about.vision.description': 'To be the leading modeling training institute that transforms lives by nurturing confidence, grace, and authentic self-expression in every student.',
            'about.values.title': 'Our Values',
            'about.values.description': 'Authenticity, Excellence, Empowerment, and Growth. We believe that true beauty comes from confidence and being genuinely yourself.',
            
            'about.approach.title': 'Our Training Approach',
            'about.approach.subtitle': 'A comprehensive methodology designed to transform confidence from the inside out',
            'about.approach.step1.title': 'Assessment & Goal Setting',
            'about.approach.step1.description': 'We begin with a comprehensive assessment of your current skills and confidence level, then work with you to set achievable goals.',
            'about.approach.step2.title': 'Technical Training',
            'about.approach.step2.description': 'Master the fundamentals of runway walking, posture, and movement through structured lessons and hands-on practice.',
            'about.approach.step3.title': 'Confidence Building',
            'about.approach.step3.description': 'Develop unshakeable self-confidence through proven psychological techniques and positive reinforcement.',
            'about.approach.step4.title': 'Real-World Practice',
            'about.approach.step4.description': 'Apply your skills in realistic scenarios and receive constructive feedback to refine your abilities.',
            
            'about.stats.students': 'Students Trained',
            'about.stats.students.description': 'Successfully graduated from our programs',
            'about.stats.founded': 'Founded',
            'about.stats.founded.description': 'Year we started transforming lives',
            'about.stats.success': 'Success Rate',
            'about.stats.success.description': 'Students report improved confidence',
            'about.stats.instructors': 'Expert Instructors',
            'about.stats.instructors.description': 'Yen and Ada - your modeling mentors',
            
            'about.differences.title': 'What Makes Us Different',
            'about.differences.subtitle': 'Discover why students choose Inner Light Studio for their transformation journey',
            'about.differences.personalized.title': 'Personalized Approach',
            'about.differences.personalized.description': 'Every student receives individual attention and a customized training plan based on their unique needs and goals.',
            'about.differences.expert.title': 'Expert Instructors',
            'about.differences.expert.description': 'Learn from experienced professionals who have worked in the modeling industry and understand what it takes to succeed.',
            'about.differences.holistic.title': 'Holistic Development',
            'about.differences.holistic.description': 'We focus not just on technical skills, but on building genuine confidence and personal growth.',
            
            'about.cta.title': 'Ready to Unlock Your Inner Light?',
            'about.cta.subtitle': 'Join hundreds of successful graduates who have transformed their confidence and achieved their modeling goals.',
            'about.cta.button1': 'Explore Our Programs',
            'about.cta.button2': 'Schedule a Consultation'
        };
        return defaults[key] || key;
    }

    async render() {
        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };

        return `
            <!-- About Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>${t('about.title')}</h1>
                        <p>${t('about.subtitle')}</p>
                    </div>
                </div>
            </section>

            <!-- Our Story Section -->
            <section class="our-story section">
                <div class="container">
                    <div class="story-content">
                        <div class="story-text animate-slide-left">
                            <h2>${t('about.story.title')}</h2>
                            <p>${t('about.story.paragraph1')}</p>
                            
                            <p>${t('about.story.paragraph2')}</p>
                            
                            <p>${t('about.story.paragraph3')}</p>
                            
                            <div class="story-highlights">
                                <div class="highlight-item">
                                    <h4>${t('about.highlights.founded')}</h4>
                                    <p>2024</p>
                                </div>
                                <div class="highlight-item">
                                    <h4>${t('about.highlights.students')}</h4>
                                    <p>20+</p>
                                </div>
                                <div class="highlight-item">
                                    <h4>${t('about.highlights.success')}</h4>
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
                        <div class="mv-card animate-slide-up animate-stagger">
                            <div class="mv-icon">
                                <i class="fas fa-bullseye"></i>
                            </div>
                            <h3>${t('about.mission.title')}</h3>
                            <p>${t('about.mission.description')}</p>
                        </div>
                        <div class="mv-card animate-slide-up animate-stagger">
                            <div class="mv-icon">
                                <i class="fas fa-eye"></i>
                            </div>
                            <h3>${t('about.vision.title')}</h3>
                            <p>${t('about.vision.description')}</p>
                        </div>
                        <div class="mv-card animate-slide-up animate-stagger">
                            <div class="mv-icon">
                                <i class="fas fa-gem"></i>
                            </div>
                            <h3>${t('about.values.title')}</h3>
                            <p>${t('about.values.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Our Approach -->
            <section class="our-approach section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('about.approach.title')}</h2>
                        <p>${t('about.approach.subtitle')}</p>
                    </div>
                    <div class="approach-steps">
                        <div class="approach-step animate-slide-left animate-stagger">
                            <div class="step-number">01</div>
                            <div class="step-content">
                                <h3>${t('about.approach.step1.title')}</h3>
                                <p>${t('about.approach.step1.description')}</p>
                            </div>
                        </div>
                        <div class="approach-step animate-slide-right animate-stagger">
                            <div class="step-number">02</div>
                            <div class="step-content">
                                <h3>${t('about.approach.step2.title')}</h3>
                                <p>${t('about.approach.step2.description')}</p>
                            </div>
                        </div>
                        <div class="approach-step animate-slide-left animate-stagger">
                            <div class="step-number">03</div>
                            <div class="step-content">
                                <h3>${t('about.approach.step3.title')}</h3>
                                <p>${t('about.approach.step3.description')}</p>
                            </div>
                        </div>
                        <div class="approach-step animate-slide-right animate-stagger">
                            <div class="step-number">04</div>
                            <div class="step-content">
                                <h3>${t('about.approach.step4.title')}</h3>
                                <p>${t('about.approach.step4.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statistics -->
            <section class="about-stats section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-card animate-slide-up animate-stagger">
                            <div class="stat-number">20+</div>
                            <div class="stat-label">${t('about.stats.students')}</div>
                            <p>${t('about.stats.students.description')}</p>
                        </div>
                        <div class="stat-card animate-slide-up animate-stagger">
                            <div class="stat-number">2024</div>
                            <div class="stat-label">${t('about.stats.founded')}</div>
                            <p>${t('about.stats.founded.description')}</p>
                        </div>
                        <div class="stat-card animate-slide-up animate-stagger">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">${t('about.stats.success')}</div>
                            <p>${t('about.stats.success.description')}</p>
                        </div>
                        <div class="stat-card animate-slide-up animate-stagger">
                            <div class="stat-number">2</div>
                            <div class="stat-label">${t('about.stats.instructors')}</div>
                            <p>${t('about.stats.instructors.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- What Makes Us Different -->
            <section class="what-makes-different section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('about.differences.title')}</h2>
                        <p>${t('about.differences.subtitle')}</p>
                    </div>
                    <div class="differences-grid">
                        <div class="difference-item animate-fade-in animate-stagger">
                            <div class="difference-icon">
                                <i class="fas fa-users-cog"></i>
                            </div>
                            <h3>${t('about.differences.personalized.title')}</h3>
                            <p>${t('about.differences.personalized.description')}</p>
                        </div>
                        <div class="difference-item animate-fade-in animate-stagger">
                            <div class="difference-icon">
                                <i class="fas fa-medal"></i>
                            </div>
                            <h3>${t('about.differences.expert.title')}</h3>
                            <p>${t('about.differences.expert.description')}</p>
                        </div>
                        <div class="difference-item animate-fade-in animate-stagger">
                            <div class="difference-icon">
                                <i class="fas fa-heart-pulse"></i>
                            </div>
                            <h3>${t('about.differences.holistic.title')}</h3>
                            <p>${t('about.differences.holistic.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="about-cta section">
                <div class="container">
                    <div class="cta-content animate-fade-in">
                        <h2>${t('about.cta.title')}</h2>
                        <p>${t('about.cta.subtitle')}</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="programs">${t('about.cta.button1')}</button>
                            <button class="btn btn-secondary" data-navigate="contact">${t('about.cta.button2')}</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupLanguageListener();
    }
    
    setupLanguageListener() {
        window.addEventListener('languageChanged', () => {
            this.refreshContent();
        });
    }
    
    refreshContent() {
        const appContent = document.getElementById('app-content');
        if (appContent) {
            this.render().then(html => {
                appContent.innerHTML = html;
                this.init();
            });
        }
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