export class ProgramsPage {
    constructor(data = {}) {
        this.data = data;
        this.packages = [
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

    async render() {
        if (this.selectedPackage) {
            return this.renderPackageDetail();
        }
        
        return this.renderPackagesList();
    }

    renderPackagesList() {
        return `
            <!-- Programs Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>Our Training Packages</h1>
                        <p>Choose the perfect package for your modeling journey - from beginner basics to professional mastery</p>
                    </div>
                </div>
            </section>

            <!-- Packages Comparison -->
            <section class="packages-comparison section">
                <div class="container">
                    <div class="packages-grid">
                        ${this.packages.map(pkg => `
                            <article class="package-card ${pkg.highlighted ? 'featured' : ''}" data-package="${pkg.id}">
                                ${pkg.highlighted ? '<div class="featured-badge">Most Popular</div>' : ''}
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
                                    <h4>What's Included:</h4>
                                    <ul>
                                        ${pkg.features.slice(0, 4).map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                                        ${pkg.features.length > 4 ? `<li class="more-features"><i class="fas fa-plus"></i> ${pkg.features.length - 4} more features...</li>` : ''}
                                    </ul>
                                </div>

                                <div class="package-pricing">
                                    <div class="price-info">
                                        ${pkg.price ? `
                                            <span class="price-amount">${pkg.price}</span>
                                            <p class="contact-note">Ready to start? Contact us to book</p>
                                        ` : `
                                            <span class="price-note">Pricing Available Upon Request</span>
                                            <p class="contact-note">Contact us for detailed pricing and payment plans</p>
                                        `}
                                    </div>
                                </div>

                                <div class="package-actions">
                                    <button class="btn btn-primary inquire-btn" data-package="${pkg.id}">
                                        <i class="fas fa-envelope"></i> Inquire About Pricing
                                    </button>
                                    <button class="btn btn-secondary details-btn" data-package="${pkg.id}">
                                        <i class="fas fa-info-circle"></i> View Full Details
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
                        <h2>What You'll Master</h2>
                        <p>Our comprehensive training covers all essential aspects of professional modeling</p>
                    </div>
                    <div class="areas-grid">
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-walking"></i>
                            </div>
                            <h3>Runway Walking</h3>
                            <p>Master professional runway techniques, turns, timing, and stage presence to command any catwalk with confidence.</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-user-check"></i>
                            </div>
                            <h3>Posture Correction</h3>
                            <p>Develop perfect posture and body alignment through targeted exercises and personalized guidance.</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-heart"></i>
                            </div>
                            <h3>Confidence Building</h3>
                            <p>Build unshakeable self-confidence and overcome stage fright through proven psychological techniques.</p>
                        </div>
                        <div class="area-card">
                            <div class="area-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>Personal Branding</h3>
                            <p>Develop your unique style and personal brand to stand out in the competitive modeling industry.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Why Choose Our Programs -->
            <section class="why-choose section">
                <div class="container">
                    <div class="section-header">
                        <h2>Why Choose Inner Light Studio?</h2>
                        <p>Experience the difference with our expert-designed training programs</p>
                    </div>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from Yen and Ada, industry professionals with years of modeling and coaching experience.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Small Class Sizes</h3>
                            <p>Receive personalized attention with our limited class sizes for optimal learning and individual feedback.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <h3>Flexible Scheduling</h3>
                            <p>Book classes at your convenience within your package validity period for maximum flexibility.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            <h3>Proven Results</h3>
                            <p>Join successful graduates who have built lasting confidence and achieved their modeling goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials -->
            <section class="testimonials section">
                <div class="container">
                    <div class="section-header">
                        <h2>Success Stories</h2>
                        <p>Hear from students who have transformed their confidence through our programs</p>
                    </div>
                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>"The Professional Package completely transformed my confidence. I went from being nervous to feeling like I owned every runway I walked on!"</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">MS</div>
                                </div>
                                <div class="author-info">
                                    <h4>Maria S.</h4>
                                    <p>Professional Package Graduate</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>"The Starter Package was perfect for me to explore modeling. The instructors were patient and helped me build confidence step by step."</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">JL</div>
                                </div>
                                <div class="author-info">
                                    <h4>Jessica L.</h4>
                                    <p>Starter Package Graduate</p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                                <p>"The comprehensive training and ongoing support helped me not just in modeling, but in all areas of my life. Highly recommended!"</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">
                                    <div class="avatar-placeholder">AC</div>
                                </div>
                                <div class="author-info">
                                    <h4>Alex C.</h4>
                                    <p>Professional Package Graduate</p>
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
                        <h2>Ready to Start Your Transformation?</h2>
                        <p>Choose the package that's right for you and begin your journey to confidence and success.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">
                                <i class="fas fa-phone"></i> Schedule Consultation
                            </button>
                            <button class="btn btn-secondary" data-navigate="instructors">
                                <i class="fas fa-users"></i> Meet Our Instructors
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderPackageDetail() {
        const packageData = this.packages.find(p => p.id === this.selectedPackage);
        if (!packageData) return this.renderPackagesList();

        return `
            <!-- Package Detail Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <nav class="breadcrumb">
                            <button data-navigate="programs" class="breadcrumb-link">
                                <i class="fas fa-arrow-left"></i> Back to Packages
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
                                    <p class="price-note">Pricing Available Upon Request</p>
                                    <button class="btn btn-primary inquire-btn" data-package="${packageData.id}">
                                        <i class="fas fa-envelope"></i> Get Pricing Info
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="detail-main">
                            <div class="package-description-full">
                                <h2>About This Package</h2>
                                <p>${packageData.longDescription}</p>
                            </div>

                            <div class="package-features-full">
                                <h2>What's Included</h2>
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
                        <h2>Next Steps</h2>
                        <p>Ready to begin your transformation journey?</p>
                    </div>
                    <div class="steps-grid">
                        <div class="step-item">
                            <div class="step-number">1</div>
                            <h3>Contact Us</h3>
                            <p>Reach out to inquire about pricing and availability for your chosen package.</p>
                        </div>
                        <div class="step-item">
                            <div class="step-number">2</div>
                            <h3>Free Consultation</h3>
                            <p>Schedule a complimentary consultation to discuss your goals and package details.</p>
                        </div>
                        <div class="step-item">
                            <div class="step-number">3</div>
                            <h3>Start Training</h3>
                            <p>Begin your transformation journey with expert guidance and personalized attention.</p>
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
        const packageData = this.packages.find(p => p.id === packageId);
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