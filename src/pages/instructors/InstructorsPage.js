export class InstructorsPage {
    constructor(data = {}) {
        this.data = data;
        this.instructors = [
            {
                id: 'yen',
                nameKey: 'instructor.yen.name',
                titleKey: 'instructor.yen.title',
                taglineKey: 'instructor.yen.tagline',
                bioKey: 'instructor.yen.bio',
                experience: '8+ Years',
                students: '400+',
                awards: '20+',
                image: 'public/images/instructors/yen-profile.jpg',
                specializations: [
                    'Runway Walking',
                    'Confidence Building',
                    'Posture Correction',
                    'Personal Development'
                ],
                social: {
                    instagram: '#',
                    linkedin: '#',
                    facebook: '#'
                }
            },
            {
                id: 'ada',
                nameKey: 'instructor.ada.name',
                titleKey: 'instructor.ada.title',
                taglineKey: 'instructor.ada.tagline',
                bioKey: 'instructor.ada.bio',
                experience: '6+ Years',
                students: '300+',
                certifications: '12+',
                image: 'public/images/instructors/ada-profile.jpg',
                specializations: [
                    'Posture Correction',
                    'Movement Coaching',
                    'Body Alignment',
                    'Confidence Building'
                ],
                social: {
                    instagram: '#',
                    linkedin: '#',
                    twitter: '#'
                }
            }
        ];
        this.selectedInstructor = this.data.instructor || null;
        this.languageManager = window.languageManager;
    }
    
    getDefaultTranslation(key) {
        const defaults = {
            'instructors.title': 'Our Expert Instructors',
            'instructors.subtitle': 'Meet the world-class coaches who will guide your transformation journey',
            'instructors.experience': 'Experience',
            'instructors.students': 'Students',
            'instructors.certifications': 'Certifications',
            'instructors.specializations': 'Specializations',
            'instructors.viewProfile': 'View Profile',
            'instructors.cta.title': 'Ready to Learn from the Best?',
            'instructors.cta.subtitle': 'Our expert instructors are here to help you unlock your full potential and achieve your modeling goals.',
            'instructors.cta.book': 'Book a Session',
            'instructors.cta.programs': 'View Programs',
            'instructor.yen.name': 'Yen',
            'instructor.yen.title': 'Head Instructor & Confidence Coach',
            'instructor.yen.tagline': 'Transforming lives through confidence and grace',
            'instructor.yen.bio': 'Yen is a passionate instructor at Inner Light Studio with extensive experience in modeling and confidence coaching. She specializes in helping students develop runway walking techniques and building unshakeable self-confidence.',
            'instructor.ada.name': 'Ada',
            'instructor.ada.title': 'Movement & Posture Specialist',
            'instructor.ada.tagline': 'Perfecting body alignment and graceful movement',
            'instructor.ada.bio': 'Ada brings expertise in movement coaching and posture correction to Inner Light Studio. With a background in dance and fitness, she helps students achieve perfect body alignment and develop graceful, confident movement.',
            'instructor.about': 'About',
            'instructor.backToInstructors': '← Back to Instructors',
            'instructor.experienceLabel': 'Experience',
            'instructor.studentsTrained': 'Students Trained',
            'instructor.teachingSpecializations': 'Teaching Specializations',
            'instructor.gallery': 'Gallery',
            'instructor.gallerySubtitle': 'Moments from career and teaching journey',
            'instructor.trainWith': 'Train with',
            'instructor.trainSubtitle': 'Ready to transform your confidence with expert guidance? Book a session today.'
        };
        return defaults[key] || key;
    }

    async render() {
        if (this.selectedInstructor) {
            return this.renderInstructorProfile();
        }
        
        return this.renderInstructorsList();
    }

    renderInstructorsList() {
        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };
        
        return `
            <!-- Instructors Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>${t('instructors.title')}</h1>
                        <p>${t('instructors.subtitle')}</p>
                    </div>
                </div>
            </section>

            <!-- Instructors Grid -->
            <section class="instructors-grid-section section">
                <div class="container">
                    <div class="instructors-grid">
                        ${this.instructors.map(instructor => {
                            const name = t(instructor.nameKey);
                            const title = t(instructor.titleKey);
                            const tagline = t(instructor.taglineKey);
                            
                            return `
                            <article class="instructor-card" data-instructor="${instructor.id}">
                                <div class="instructor-image">
                                    <img src="${instructor.image}" alt="${name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="image-placeholder" style="display:none;">
                                        <i class="fas fa-user" aria-hidden="true"></i>
                                    </div>
                                    <div class="instructor-overlay">
                                        <button class="btn btn-primary view-profile-btn">${t('instructors.viewProfile')}</button>
                                    </div>
                                </div>
                                <div class="instructor-info">
                                    <h3>${name}</h3>
                                    <p class="instructor-title">${title}</p>
                                    <p class="instructor-tagline">"${tagline}"</p>
                                    <div class="instructor-stats">
                                        <div class="stat">
                                            <span class="stat-value">${instructor.experience || instructor.students}</span>
                                            <span class="stat-label">${instructor.experience ? t('instructors.experience') : t('instructors.students')}</span>
                                        </div>
                                        <div class="stat">
                                            <span class="stat-value">${instructor.students || instructor.certifications || instructor.events}</span>
                                            <span class="stat-label">${instructor.students ? t('instructors.students') : instructor.certifications ? t('instructors.certifications') : t('instructors.events')}</span>
                                        </div>
                                    </div>
                                    <div class="specializations-preview">
                                        <h4>${t('instructors.specializations')}:</h4>
                                        <div class="specializations-tags">
                                            ${instructor.specializations.slice(0, 2).map(spec => `
                                                <span class="spec-tag">${spec}</span>
                                            `).join('')}
                                            ${instructor.specializations.length > 2 ? `<span class="spec-more">+${instructor.specializations.length - 2} more</span>` : ''}
                                        </div>
                                    </div>
                                    <div class="social-links">
                                        ${Object.entries(instructor.social).map(([platform, url]) => `
                                            <a href="${url}" aria-label="${name}'s ${platform}">
                                                <i class="fab fa-${platform}"></i>
                                            </a>
                                        `).join('')}
                                    </div>
                                </div>
                            </article>
                        `;}).join('')}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="instructors-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>${t('instructors.cta.title')}</h2>
                        <p>${t('instructors.cta.subtitle')}</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">${t('instructors.cta.book')}</button>
                            <button class="btn btn-secondary" data-navigate="programs">${t('instructors.cta.programs')}</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderInstructorProfile() {
        const instructor = this.instructors.find(inst => inst.id === this.selectedInstructor);
        
        if (!instructor) {
            return this.renderInstructorsList();
        }

        const t = (key) => {
            if (window.languageManager && typeof window.languageManager.translate === 'function') {
                return window.languageManager.translate(key);
            }
            return this.getDefaultTranslation(key);
        };
        const name = t(instructor.nameKey);
        const title = t(instructor.titleKey);
        const tagline = t(instructor.taglineKey);
        const bio = t(instructor.bioKey);
        const firstName = name.split(' ')[0];

        return `
            <!-- Instructor Hero Section -->
            <section class="instructor-hero">
                <div class="container">
                    <div class="instructor-hero-content">
                        <div class="instructor-image profile-animate-fade-in">
                            <img src="${instructor.image}" alt="${name} - Professional headshot" loading="eager" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="image-placeholder" style="display:none;">
                                <i class="fas fa-user" aria-hidden="true"></i>
                                <p>Add ${firstName}'s profile photo</p>
                            </div>
                        </div>
                        <div class="instructor-info profile-animate-slide-up">
                            <nav class="breadcrumb">
                                <button data-navigate="instructors">
                                    <i class="fas fa-arrow-left"></i>
                                    ${t('instructor.backToInstructors').replace('← ', '')}
                                </button>
                            </nav>
                            <h1>${name}</h1>
                            <h2>${title}</h2>
                            <p class="instructor-tagline">${tagline}</p>
                            <div class="instructor-stats">
                                <div class="stat">
                                    <h4>${instructor.experience}</h4>
                                    <p>${t('instructor.experienceLabel')}</p>
                                </div>
                                <div class="stat">
                                    <h4>${instructor.students}</h4>
                                    <p>${t('instructor.studentsTrained')}</p>
                                </div>
                                <div class="stat">
                                    <h4>${instructor.awards || instructor.certifications || instructor.events}</h4>
                                    <p>${instructor.awards ? t('instructors.awards') : instructor.certifications ? t('instructors.certifications') : t('instructors.events')}</p>
                                </div>
                            </div>
                            <div class="social-links">
                                ${Object.entries(instructor.social).map(([platform, url]) => `
                                    <a href="${url}" aria-label="${name}'s ${platform}">
                                        <i class="fab fa-${platform}"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bio Section -->
            <section class="instructor-bio">
                <div class="container">
                    <h2>${t('instructor.about')} ${firstName}</h2>
                    <div class="bio-content">
                        <div class="bio-text">
                            <p>${bio}</p>
                            <p>With years of experience in the industry, ${firstName} has developed a unique teaching methodology that combines technical expertise with personal development. Students consistently praise the transformative impact of the training programs.</p>
                            <p>Whether you're just starting your journey or looking to refine your skills, ${firstName} provides personalized guidance to help you achieve your goals and build lasting confidence.</p>
                        </div>
                        <div class="bio-image">
                            <img src="${instructor.image.replace('-profile.jpg', '-bio-photo.jpg')}" alt="${name} teaching" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="image-placeholder" style="display:none;">
                                <i class="fas fa-camera" aria-hidden="true"></i>
                                <p>Add ${firstName}'s bio photo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Specializations Section -->
            <section class="specializations">
                <div class="container">
                    <h2>${t('instructor.teachingSpecializations')}</h2>
                    <div class="specializations-grid">
                        ${instructor.specializations.map(spec => {
                            const icons = {
                                'Runway Walking': 'fas fa-walking',
                                'Confidence Building': 'fas fa-heart',
                                'Personal Development': 'fas fa-user-graduate',
                                'Posture Correction': 'fas fa-user-check',
                                'Movement Coaching': 'fas fa-running',
                                'Body Alignment': 'fas fa-dumbbell'
                            };
                            
                            return `
                                <div class="specialization-card">
                                    <div class="spec-icon">
                                        <i class="${icons[spec] || 'fas fa-star'}" aria-hidden="true"></i>
                                    </div>
                                    <h3>${spec}</h3>
                                    <p>Expert training in ${spec.toLowerCase()} to help you master this essential skill.</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>

            <!-- Gallery Section -->
            <section class="instructor-gallery">
                <div class="container">
                    <h2>${t('instructor.gallery')}</h2>
                    <p>${t('instructor.gallerySubtitle').replace('career and teaching journey', `${firstName}'s career and teaching journey`)}</p>
                    <div class="gallery-grid">
                        ${Array.from({length: 6}, (_, i) => `
                            <div class="gallery-item">
                                <img src="${instructor.image.replace('-profile.jpg', `-gallery-${i+1}.jpg`)}" alt="${name} gallery image ${i+1}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                <div class="image-placeholder" style="display:none;">
                                    <i class="fas fa-image" aria-hidden="true"></i>
                                    <p>Gallery photo ${i+1}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="cta-section">
                <div class="container">
                    <div class="cta-content">
                        <h2>${t('instructor.trainWith')} ${firstName}</h2>
                        <p>${t('instructor.trainSubtitle').replace('expert guidance', `${firstName}'s expert guidance`)}</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">${t('instructors.cta.book')}</button>
                            <button class="btn btn-secondary" data-navigate="programs">${t('instructors.cta.programs')}</button>
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

        // Instructor card clicks
        const instructorCards = document.querySelectorAll('.instructor-card, .view-profile-btn');
        instructorCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const instructorId = card.dataset.instructor || card.closest('.instructor-card').dataset.instructor;
                window.router.navigate('instructors', { instructor: instructorId });
            });
        });

        // Breadcrumb navigation
        const breadcrumbBtns = document.querySelectorAll('.breadcrumb button');
        breadcrumbBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const route = btn.dataset.navigate;
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