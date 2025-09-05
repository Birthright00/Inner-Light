export class ProgramsPage {
    constructor(data = {}) {
        this.data = data;
        this.packageData = [
            {
                id: 'trial-package',
                title: 'Trial Package',
                icon: 'fas fa-play-circle',
                classes: '1 Class',
                validity: '1 Month',
                level: 'Try Before You Commit',
                price: '55 SGD',
                description: 'Perfect introduction to modeling with our expert instructors at an affordable price.',
                longDescription: 'Our Trial Package gives you the opportunity to experience our teaching style and studio environment before committing to a larger package. This single class covers the basics and helps you decide on your modeling journey.',
                features: [
                    'Introduction to runway walking',
                    'Basic posture assessment',
                    'Confidence building session',
                    'Personal consultation',
                    'Studio tour',
                    'Progress recommendations',
                    '1 month validity period',
                    'No long-term commitment'
                ],
                image: 'public/images/packages/trial-package.jpg',
                highlighted: false
            },
            {
                id: 'starter-package',
                title: 'Starter Package',
                icon: 'fas fa-seedling',
                classes: '5 Classes',
                validity: '3 Months',
                level: 'Perfect for Beginners',
                description: 'Get started with your modeling journey through our foundational training package.',
                longDescription: 'Our Starter Package is designed for those new to modeling who want to explore their potential. This package provides essential training in runway walking, posture correction, and confidence building basics.',
                features: [
                    'Runway walking fundamentals',
                    'Basic posture correction',
                    'Confidence building exercises',
                    'Individual feedback sessions',
                    'Access to practice sessions',
                    'Personalized progress tracking',
                    '3 months validity period',
                    'Flexible scheduling'
                ],
                image: 'public/images/packages/starter-package.jpg',
                highlighted: false
            },
            {
                id: 'professional-package',
                title: 'Professional Package',
                icon: 'fas fa-crown',
                classes: '14 Classes',
                validity: '6 Months',
                level: 'Complete Transformation',
                description: 'Comprehensive training for serious students ready to master all aspects of modeling.',
                longDescription: 'Our Professional Package offers extensive training covering all aspects of professional modeling. Perfect for students serious about developing advanced skills and building a strong foundation in the modeling industry.',
                features: [
                    'Advanced runway walking techniques',
                    'Complete posture correction program',
                    'Comprehensive confidence building',
                    'Professional presentation skills',
                    'Industry networking opportunities',
                    'Portfolio development guidance',
                    'Mock casting sessions',
                    'Career guidance and mentorship',
                    '6 months validity period',
                    'Priority booking privileges',
                    'Extended practice sessions',
                    'Graduation certificate'
                ],
                image: 'public/images/packages/professional-package.jpg',
                highlighted: true
            }
        ];
        this.selectedPackage = this.data.package || null;
    }

    getTranslatedPackages() {
        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };

        return [
            {
                id: 'trial-package',
                title: t('programs.trial.title'),
                icon: 'fas fa-play-circle',
                classes: t('programs.trial.classes'),
                validity: t('programs.trial.validity'),
                level: t('programs.trial.level'),
                price: t('programs.trial.price'),
                description: t('programs.trial.description'),
                longDescription: t('programs.trial.longDescription'),
                features: [
                    t('programs.features.introRunway'),
                    t('programs.features.basicPosture'),
                    t('programs.features.confidenceSession'),
                    t('programs.features.personalConsult'),
                    t('programs.features.studioTour'),
                    t('programs.features.progressRec'),
                    t('programs.features.oneMonthValid'),
                    t('programs.features.noCommitment')
                ],
                image: 'public/images/packages/trial-package.jpg',
                highlighted: false
            },
            {
                id: 'starter-package',
                title: t('programs.starter.title'),
                icon: 'fas fa-seedling',
                classes: t('programs.starter.classes'),
                validity: t('programs.starter.validity'),
                level: t('programs.starter.level'),
                description: t('programs.starter.description'),
                longDescription: t('programs.starter.longDescription'),
                features: [
                    t('programs.features.runwayFund'),
                    t('programs.features.basicCorrection'),
                    t('programs.features.confidenceEx'),
                    t('programs.features.individualFeed'),
                    t('programs.features.practiceAccess'),
                    t('programs.features.progressTrack'),
                    t('programs.features.threeMonthValid'),
                    t('programs.features.flexSchedule')
                ],
                image: 'public/images/packages/starter-package.jpg',
                highlighted: false
            },
            {
                id: 'professional-package',
                title: t('programs.professional.title'),
                icon: 'fas fa-crown',
                classes: t('programs.professional.classes'),
                validity: t('programs.professional.validity'),
                level: t('programs.professional.level'),
                description: t('programs.professional.description'),
                longDescription: t('programs.professional.longDescription'),
                features: [
                    t('programs.features.advancedRunway'),
                    t('programs.features.completeProgram'),
                    t('programs.features.comprehensiveConf'),
                    t('programs.features.presentationSkills'),
                    t('programs.features.networking'),
                    t('programs.features.portfolioGuide'),
                    t('programs.features.mockCasting'),
                    t('programs.features.careerGuide'),
                    t('programs.features.sixMonthValid'),
                    t('programs.features.priorityBooking'),
                    t('programs.features.extendedPractice'),
                    t('programs.features.certificate')
                ],
                image: 'public/images/packages/professional-package.jpg',
                highlighted: true
            }
        ];
    }

    getDefaultTranslation(key) {
        const defaults = {
            'programs.title': 'Our Training Packages',
            'programs.subtitle': 'Choose the perfect package for your modeling journey - from beginner basics to professional mastery',
            
            'programs.trial.title': 'Trial Package',
            'programs.trial.level': 'Try Before You Commit',
            'programs.trial.classes': '1 Class',
            'programs.trial.validity': '1 Month',
            'programs.trial.price': '55 SGD',
            'programs.trial.description': 'Perfect introduction to modeling with our expert instructors at an affordable price.',
            'programs.trial.longDescription': 'Our Trial Package gives you the opportunity to experience our teaching style and studio environment before committing to a larger package. This single class covers the basics and helps you decide on your modeling journey.',
            
            'programs.starter.title': 'Starter Package',
            'programs.starter.level': 'Perfect for Beginners',
            'programs.starter.classes': '5 Classes',
            'programs.starter.validity': '3 Months',
            'programs.starter.description': 'Get started with your modeling journey through our foundational training package.',
            'programs.starter.longDescription': 'Our Starter Package is designed for those new to modeling who want to explore their potential. This package provides essential training in runway walking, posture correction, and confidence building basics.',
            
            'programs.professional.title': 'Professional Package',
            'programs.professional.level': 'Complete Transformation',
            'programs.professional.classes': '14 Classes',
            'programs.professional.validity': '6 Months',
            'programs.professional.description': 'Comprehensive training for serious students ready to master all aspects of modeling.',
            'programs.professional.longDescription': 'Our Professional Package offers extensive training covering all aspects of professional modeling. Perfect for students serious about developing advanced skills and building a strong foundation in the modeling industry.',
            
            'programs.mostPopular': 'Most Popular',
            'programs.whatsIncluded': 'What\'s Included:',
            'programs.moreFeatures': 'more features...',
            'programs.pricingAvailable': 'Pricing Available Upon Request',
            'programs.contactNote': 'Contact us for detailed pricing and payment plans',
            'programs.readyToStart': 'Ready to start? Contact us to book',
            'programs.inquireButton': 'Inquire About Pricing',
            'programs.detailsButton': 'View Full Details',
            
            'programs.training.title': 'What You\'ll Master',
            'programs.training.subtitle': 'Our comprehensive training covers all essential aspects of professional modeling',
            'programs.training.runway.title': 'Runway Walking',
            'programs.training.runway.description': 'Master professional runway techniques, turns, timing, and stage presence to command any catwalk with confidence.',
            'programs.training.posture.title': 'Posture Correction',
            'programs.training.posture.description': 'Develop perfect posture and body alignment through targeted exercises and personalized guidance.',
            'programs.training.confidence.title': 'Confidence Building',
            'programs.training.confidence.description': 'Build unshakeable self-confidence and overcome stage fright through proven psychological techniques.',
            'programs.training.branding.title': 'Personal Branding',
            'programs.training.branding.description': 'Develop your unique style and personal brand to stand out in the competitive modeling industry.',
            
            'programs.whyChoose.title': 'Why Choose Inner Light Studio?',
            'programs.whyChoose.subtitle': 'Experience the difference with our expert-designed training programs',
            'programs.whyChoose.expert.title': 'Expert Instructors',
            'programs.whyChoose.expert.description': 'Learn from Yen and Ada, industry professionals with years of modeling and coaching experience.',
            'programs.whyChoose.smallClass.title': 'Small Class Sizes',
            'programs.whyChoose.smallClass.description': 'Receive personalized attention with our limited class sizes for optimal learning and individual feedback.',
            'programs.whyChoose.flexible.title': 'Flexible Scheduling',
            'programs.whyChoose.flexible.description': 'Book classes at your convenience within your package validity period for maximum flexibility.',
            'programs.whyChoose.results.title': 'Proven Results',
            'programs.whyChoose.results.description': 'Join successful graduates who have built lasting confidence and achieved their modeling goals.',
            
            'programs.testimonials.title': 'Success Stories',
            'programs.testimonials.subtitle': 'Hear from students who have transformed their confidence through our programs',
            'programs.testimonials.maria': '"The Professional Package completely transformed my confidence. I went from being nervous to feeling like I owned every runway I walked on!"',
            'programs.testimonials.maria.title': 'Professional Package Graduate',
            'programs.testimonials.jessica': '"The Starter Package was perfect for me to explore modeling. The instructors were patient and helped me build confidence step by step."',
            'programs.testimonials.jessica.title': 'Starter Package Graduate',
            'programs.testimonials.alex': '"The comprehensive training and ongoing support helped me not just in modeling, but in all areas of my life. Highly recommended!"',
            'programs.testimonials.alex.title': 'Professional Package Graduate',
            
            'programs.cta.title': 'Ready to Start Your Transformation?',
            'programs.cta.subtitle': 'Choose the package that\'s right for you and begin your journey to confidence and success.',
            'programs.cta.consultation': 'Schedule Consultation',
            'programs.cta.instructors': 'Meet Our Instructors',
            
            'programs.detail.backToPackages': 'Back to Packages',
            'programs.detail.aboutPackage': 'About This Package',
            'programs.detail.whatsIncluded': 'What\'s Included',
            'programs.detail.getPricing': 'Get Pricing Info',
            'programs.detail.nextSteps': 'Next Steps',
            'programs.detail.nextSteps.subtitle': 'Ready to begin your transformation journey?',
            'programs.detail.step1.title': 'Contact Us',
            'programs.detail.step1.description': 'Reach out to inquire about pricing and availability for your chosen package.',
            'programs.detail.step2.title': 'Free Consultation',
            'programs.detail.step2.description': 'Schedule a complimentary consultation to discuss your goals and package details.',
            'programs.detail.step3.title': 'Start Training',
            'programs.detail.step3.description': 'Begin your transformation journey with expert guidance and personalized attention.',

            // Package Features
            'programs.features.introRunway': 'Introduction to runway walking',
            'programs.features.basicPosture': 'Basic posture assessment',
            'programs.features.confidenceSession': 'Confidence building session',
            'programs.features.personalConsult': 'Personal consultation',
            'programs.features.studioTour': 'Studio tour',
            'programs.features.progressRec': 'Progress recommendations',
            'programs.features.oneMonthValid': '1 month validity period',
            'programs.features.noCommitment': 'No long-term commitment',
            
            'programs.features.runwayFund': 'Runway walking fundamentals',
            'programs.features.basicCorrection': 'Basic posture correction',
            'programs.features.confidenceEx': 'Confidence building exercises',
            'programs.features.individualFeed': 'Individual feedback sessions',
            'programs.features.practiceAccess': 'Access to practice sessions',
            'programs.features.progressTrack': 'Personalized progress tracking',
            'programs.features.threeMonthValid': '3 months validity period',
            'programs.features.flexSchedule': 'Flexible scheduling',
            
            'programs.features.advancedRunway': 'Advanced runway walking techniques',
            'programs.features.completeProgram': 'Complete posture correction program',
            'programs.features.comprehensiveConf': 'Comprehensive confidence building',
            'programs.features.presentationSkills': 'Professional presentation skills',
            'programs.features.networking': 'Industry networking opportunities',
            'programs.features.portfolioGuide': 'Portfolio development guidance',
            'programs.features.mockCasting': 'Mock casting sessions',
            'programs.features.careerGuide': 'Career guidance and mentorship',
            'programs.features.sixMonthValid': '6 months validity period',
            'programs.features.priorityBooking': 'Priority booking privileges',
            'programs.features.extendedPractice': 'Extended practice sessions',
            'programs.features.certificate': 'Graduation certificate'
        };
        return defaults[key] || key;
    }

    async render() {
        if (this.selectedPackage) {
            return this.renderPackageDetail();
        }
        
        return this.renderPackagesList();
    }

    renderPackagesList() {
        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };

        const packages = this.getTranslatedPackages();

        return `
            <!-- Programs Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>${t('programs.title')}</h1>
                        <p>${t('programs.subtitle')}</p>
                    </div>
                </div>
            </section>

            <!-- Packages Comparison -->
            <section class="packages-comparison section">
                <div class="container">
                    <div class="packages-grid">
                        ${packages.map(pkg => `
                            <article class="package-card ${pkg.highlighted ? 'featured' : ''}" data-package="${pkg.id}">
                                ${pkg.highlighted ? `<div class="featured-badge">${t('programs.mostPopular')}</div>` : ''}
                                <div class="package-header">
                                    <div class="package-icon">
                                        <i class="${pkg.icon}" aria-hidden="true"></i>
                                    </div>
                                    <h3>${pkg.title}</h3>
                                    <p class="package-subtitle">${pkg.level}</p>
                                </div>
                                
                                <div class="package-details">
                                    <div class="detail-item">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>${pkg.classes}</span>
                                    </div>
                                    <div class="detail-item">
                                        <i class="fas fa-clock"></i>
                                        <span>${pkg.validity}</span>
                                    </div>
                                </div>

                                <div class="package-image">
                                    <img src="${pkg.image}" alt="${pkg.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="image-placeholder" style="display:none;">
                                        <i class="${pkg.icon}" aria-hidden="true"></i>
                                        <p>${pkg.title}</p>
                                    </div>
                                </div>

                                <div class="package-description">
                                    <p>${pkg.description}</p>
                                </div>

                                <div class="package-features">
                                    <h4>${t('programs.whatsIncluded')}</h4>
                                    <ul>
                                        ${pkg.features.slice(0, 4).map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                                        ${pkg.features.length > 4 ? `<li class="more-features"><i class="fas fa-plus"></i> ${pkg.features.length - 4} ${t('programs.moreFeatures')}</li>` : ''}
                                    </ul>
                                </div>

                                <div class="package-pricing">
                                    <div class="price-info">
                                        ${pkg.price ? `
                                            <span class="price-amount">${pkg.price}</span>
                                            <p class="contact-note">${t('programs.readyToStart')}</p>
                                        ` : `
                                            <span class="price-note">${t('programs.pricingAvailable')}</span>
                                            <p class="contact-note">${t('programs.contactNote')}</p>
                                        `}
                                    </div>
                                </div>

                                <div class="package-actions">
                                    <button class="btn btn-primary inquire-btn" data-package="${pkg.id}">
                                        <i class="fas fa-envelope"></i> ${t('programs.inquireButton')}
                                    </button>
                                    <button class="btn btn-secondary details-btn" data-package="${pkg.id}">
                                        <i class="fas fa-info-circle"></i> ${t('programs.detailsButton')}
                                    </button>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Training Areas -->
            <section class="training-areas section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('programs.training.title')}</h2>
                        <p>${t('programs.training.subtitle')}</p>
                    </div>
                    <div class="areas-grid">
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-walking"></i>
                            </div>
                            <h3>${t('programs.training.runway.title')}</h3>
                            <p>${t('programs.training.runway.description')}</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-user-check"></i>
                            </div>
                            <h3>${t('programs.training.posture.title')}</h3>
                            <p>${t('programs.training.posture.description')}</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3>${t('programs.training.confidence.title')}</h3>
                            <p>${t('programs.training.confidence.description')}</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>${t('programs.training.branding.title')}</h3>
                            <p>${t('programs.training.branding.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Our Programs -->
            <section class="why-choose section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('programs.whyChoose.title')}</h2>
                        <p>${t('programs.whyChoose.subtitle')}</p>
                    </div>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3>${t('programs.whyChoose.expert.title')}</h3>
                            <p>${t('programs.whyChoose.expert.description')}</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>${t('programs.whyChoose.smallClass.title')}</h3>
                            <p>${t('programs.whyChoose.smallClass.description')}</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <h3>${t('programs.whyChoose.flexible.title')}</h3>
                            <p>${t('programs.whyChoose.flexible.description')}</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <h3>${t('programs.whyChoose.results.title')}</h3>
                            <p>${t('programs.whyChoose.results.description')}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section class="testimonials section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('programs.testimonials.title')}</h2>
                        <p>${t('programs.testimonials.subtitle')}</p>
                    </div>
                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>${t('programs.testimonials.maria')}</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">MS</div>
                                </div>
                                <div class="author-info">
                                    <h4>Maria S.</h4>
                                    <p>${t('programs.testimonials.maria.title')}</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>${t('programs.testimonials.jessica')}</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">JL</div>
                                </div>
                                <div class="author-info">
                                    <h4>Jessica L.</h4>
                                    <p>${t('programs.testimonials.jessica.title')}</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>${t('programs.testimonials.alex')}</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">AC</div>
                                </div>
                                <div class="author-info">
                                    <h4>Alex C.</h4>
                                    <p>${t('programs.testimonials.alex.title')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="programs-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>${t('programs.cta.title')}</h2>
                        <p>${t('programs.cta.subtitle')}</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">
                                <i class="fas fa-phone"></i> ${t('programs.cta.consultation')}
                            </button>
                            <button class="btn btn-secondary" data-navigate="instructors">
                                <i class="fas fa-users"></i> ${t('programs.cta.instructors')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderPackageDetail() {
        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };

        const packages = this.getTranslatedPackages();
        const packageData = packages.find(p => p.id === this.selectedPackage);
        if (!packageData) return this.renderPackagesList();

        return `
            <!-- Package Detail Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <nav class="breadcrumb">
                            <button data-navigate="programs" class="breadcrumb-link">
                                <i class="fas fa-arrow-left"></i> ${t('programs.detail.backToPackages')}
                            </button>
                        </nav>
                        <h1>${packageData.title}</h1>
                        <p>${packageData.description}</p>
                    </div>
                </div>
            </section>

            <!-- Package Details -->
            <section class="package-detail section">
                <div class="container">
                    <div class="detail-content">
                        <div class="detail-sidebar">
                            <div class="package-summary">
                                <div class="package-icon-large">
                                    <i class="${packageData.icon}"></i>
                                </div>
                                <h3>${packageData.title}</h3>
                                <div class="package-specs">
                                    <div class="spec-item">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>${packageData.classes}</span>
                                    </div>
                                    <div class="spec-item">
                                        <i class="fas fa-clock"></i>
                                        <span>${packageData.validity}</span>
                                    </div>
                                    <div class="spec-item">
                                        <i class="fas fa-signal"></i>
                                        <span>${packageData.level}</span>
                                    </div>
                                </div>
                                <div class="pricing-inquiry">
                                    <p class="price-note">${t('programs.pricingAvailable')}</p>
                                    <button class="btn btn-primary inquire-btn" data-package="${packageData.id}">
                                        <i class="fas fa-envelope"></i> ${t('programs.detail.getPricing')}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="detail-main">
                            <div class="package-description-full">
                                <h2>${t('programs.detail.aboutPackage')}</h2>
                                <p>${packageData.longDescription}</p>
                            </div>

                            <div class="package-features-full">
                                <h2>${t('programs.detail.whatsIncluded')}</h2>
                                <div class="features-list">
                                    ${packageData.features.map(feature => `
                                        <div class="feature-item">
                                            <i class="fas fa-check"></i>
                                            <span>${feature}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Next Steps -->
            <section class="next-steps section">
                <div class="container">
                    <div class="section-header">
                        <h2>${t('programs.detail.nextSteps')}</h2>
                        <p>${t('programs.detail.nextSteps.subtitle')}</p>
                    </div>
                    <div class="steps-grid">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <h3>${t('programs.detail.step1.title')}</h3>
                            <p>${t('programs.detail.step1.description')}</p>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <h3>${t('programs.detail.step2.title')}</h3>
                            <p>${t('programs.detail.step2.description')}</p>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <h3>${t('programs.detail.step3.title')}</h3>
                            <p>${t('programs.detail.step3.description')}</p>
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
        // Package inquiry buttons
        const inquireButtons = document.querySelectorAll('.inquire-btn');
        inquireButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const packageId = button.dataset.package;
                this.handlePricingInquiry(packageId);
            });
        });

        // Package details buttons
        const detailButtons = document.querySelectorAll('.details-btn');
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const packageId = button.dataset.package;
                window.router.navigate('programs', { package: packageId });
            });
        });

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

    handlePricingInquiry(packageId) {
        const packages = this.getTranslatedPackages();
        const packageData = packages.find(p => p.id === packageId);
        const packageName = packageData ? packageData.title : 'Selected Package';
        
        // Navigate to contact page with package information
        window.router.navigate('contact', { 
            inquiry: 'pricing',
            package: packageId,
            packageName: packageName
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