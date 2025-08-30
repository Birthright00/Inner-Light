export class WorkshopsPage {
    constructor(data = {}) {
        this.data = data;
        
        // Previous events with photos and videos
        this.previousEvents = [
            {
                id: 'confidence-mastery-oct2024',
                title: 'Confidence Mastery Workshop',
                date: '2024-10-20',
                location: 'Main Studio',
                participants: 18,
                instructor: 'Yen',
                description: 'An inspiring day of transformation where participants broke through confidence barriers.',
                highlights: [
                    'Interactive confidence-building exercises',
                    'Personal breakthrough moments',
                    'Group support and networking',
                    'Practical takeaway techniques'
                ],
                photos: [
                    'public/images/events/confidence-oct-1.jpg',
                    'public/images/events/confidence-oct-2.jpg',
                    'public/images/events/confidence-oct-3.jpg',
                    'public/images/events/confidence-oct-4.jpg',
                    'public/images/events/confidence-oct-5.jpg',
                    'public/images/events/confidence-oct-6.jpg'
                ],
                videos: [
                    {
                        title: 'Workshop Highlights',
                        thumbnail: 'public/images/events/confidence-oct-video-thumb.jpg',
                        url: '#'
                    }
                ],
                testimonial: {
                    text: "This workshop completely changed my perspective on confidence. I walked out feeling like a new person!",
                    author: "Sarah M."
                }
            },
            {
                id: 'runway-showcase-sep2024',
                title: 'Runway Showcase Event',
                date: '2024-09-15',
                location: 'Studio A',
                participants: 15,
                instructor: 'Ada',
                description: 'Students showcased their runway skills in a mini fashion show format.',
                highlights: [
                    'Professional runway performances',
                    'Individual skill demonstrations',
                    'Peer feedback and support',
                    'Celebration of achievements'
                ],
                photos: [
                    'public/images/events/runway-sep-1.jpg',
                    'public/images/events/runway-sep-2.jpg',
                    'public/images/events/runway-sep-3.jpg',
                    'public/images/events/runway-sep-4.jpg',
                    'public/images/events/runway-sep-5.jpg',
                    'public/images/events/runway-sep-6.jpg'
                ],
                videos: [
                    {
                        title: 'Runway Performances',
                        thumbnail: 'public/images/events/runway-sep-video-thumb.jpg',
                        url: '#'
                    },
                    {
                        title: 'Behind the Scenes',
                        thumbnail: 'public/images/events/runway-sep-bts-thumb.jpg',
                        url: '#'
                    }
                ],
                testimonial: {
                    text: "Walking that runway felt like achieving a lifelong dream. The confidence I gained is priceless!",
                    author: "Maria L."
                }
            }
        ];
        
        // Upcoming events
        this.upcomingEvents = [
            {
                id: 'new-year-transformation',
                title: 'New Year Transformation Workshop',
                date: '2025-01-15',
                time: '10:00 AM - 4:00 PM',
                location: 'Main Studio',
                price: '120 SGD',
                capacity: '20 participants',
                instructor: 'Yen & Ada',
                description: 'Start the new year with renewed confidence and improved presentation skills.',
                longDescription: 'Join us for a full-day transformation workshop designed to help you step into the new year with confidence, poise, and improved self-presentation skills.',
                features: [
                    'Confidence building exercises',
                    'Posture and presentation training',
                    'Goal setting for the new year',
                    'Networking with like-minded individuals'
                ],
                image: 'public/images/events/new-year-workshop.jpg'
            },
            {
                id: 'valentines-confidence-boost',
                title: 'Valentine\'s Confidence Boost Event',
                date: '2025-02-08',
                time: '2:00 PM - 6:00 PM',
                location: 'Studio A',
                price: '85 SGD',
                capacity: '15 participants',
                instructor: 'Yen',
                description: 'Build confidence in relationships and social situations just in time for Valentine\'s.',
                longDescription: 'Perfect timing for Valentine\'s season! Learn to project confidence in social and romantic situations while building genuine self-esteem.',
                features: [
                    'Social confidence techniques',
                    'Body language mastery',
                    'Conversation skills',
                    'Self-love and acceptance'
                ],
                image: 'public/images/events/valentines-event.jpg'
            }
        ];
        
        this.selectedEvent = this.data.event || null;
        this.selectedType = this.data.type || 'upcoming'; // 'previous' or 'upcoming'
    }

    async render() {
        if (this.selectedEvent && this.selectedType === 'previous') {
            return this.renderPreviousEventDetail();
        }
        
        if (this.selectedEvent && this.selectedType === 'upcoming') {
            return this.renderUpcomingEventDetail();
        }
        
        return this.renderEventsOverview();
    }

    renderEventsOverview() {
        return `
            <!-- Events Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>Events & Workshops</h1>
                        <p>Experience our transformative events and connect with like-minded individuals on your confidence journey</p>
                    </div>
                </div>
            </section>

            <!-- Previous Events -->
            <section class="previous-events section">
                <div class="container">
                    <div class="section-header">
                        <h2>Previous Events</h2>
                        <p>Take a look at our recent successful events and the amazing transformations they created</p>
                    </div>
                    <div class="events-grid">
                        ${this.previousEvents.map(event => `
                            <article class="event-card previous-event" data-event="${event.id}" data-type="previous">
                                <div class="event-image">
                                    <img src="${event.photos[0]}" alt="${event.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="image-placeholder" style="display:none;">
                                        <i class="fas fa-calendar-check" aria-hidden="true"></i>
                                        <p>Event image</p>
                                    </div>
                                    <div class="event-overlay">
                                        <div class="overlay-content">
                                            <i class="fas fa-images"></i>
                                            <span>${event.photos.length} Photos</span>
                                            ${event.videos.length > 0 ? `<span>${event.videos.length} Videos</span>` : ''}
                                        </div>
                                    </div>
                                </div>
                                <div class="event-content">
                                    <div class="event-date">
                                        <span class="date-day">${this.getDay(event.date)}</span>
                                        <span class="date-month">${this.getMonth(event.date)}</span>
                                        <span class="date-year">${this.getYear(event.date)}</span>
                                    </div>
                                    <div class="event-info">
                                        <h3>${event.title}</h3>
                                        <p class="event-description">${event.description}</p>
                                        <div class="event-meta">
                                            <div class="meta-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                <span>${event.location}</span>
                                            </div>
                                            <div class="meta-item">
                                                <i class="fas fa-users"></i>
                                                <span>${event.participants} participants</span>
                                            </div>
                                            <div class="meta-item">
                                                <i class="fas fa-user-tie"></i>
                                                <span>Instructor: ${event.instructor}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="event-actions">
                                    <button class="btn btn-primary view-photos-btn" data-event="${event.id}" data-type="previous">
                                        <i class="fas fa-images"></i> View Photos & Videos
                                    </button>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Upcoming Events -->
            <section class="upcoming-events section">
                <div class="container">
                    <div class="section-header">
                        <h2>Upcoming Events</h2>
                        <p>Join us for our next transformative events and workshops</p>
                    </div>
                    <div class="events-grid">
                        ${this.upcomingEvents.map(event => `
                            <article class="event-card upcoming-event" data-event="${event.id}" data-type="upcoming">
                                <div class="event-image">
                                    <img src="${event.image}" alt="${event.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                                    <div class="image-placeholder" style="display:none;">
                                        <i class="fas fa-calendar-check" aria-hidden="true"></i>
                                        <p>Event image</p>
                                    </div>
                                    <div class="event-price">${event.price}</div>
                                </div>
                                <div class="event-content">
                                    <div class="event-date upcoming">
                                        <span class="date-day">${this.getDay(event.date)}</span>
                                        <span class="date-month">${this.getMonth(event.date)}</span>
                                        <span class="date-year">${this.getYear(event.date)}</span>
                                    </div>
                                    <div class="event-info">
                                        <h3>${event.title}</h3>
                                        <p class="event-description">${event.description}</p>
                                        <div class="event-meta">
                                            <div class="meta-item">
                                                <i class="fas fa-clock"></i>
                                                <span>${event.time}</span>
                                            </div>
                                            <div class="meta-item">
                                                <i class="fas fa-map-marker-alt"></i>
                                                <span>${event.location}</span>
                                            </div>
                                            <div class="meta-item">
                                                <i class="fas fa-users"></i>
                                                <span>${event.capacity}</span>
                                            </div>
                                        </div>
                                        <div class="event-instructor">
                                            <span>Instructor: ${event.instructor}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="event-actions">
                                    <button class="btn btn-primary register-btn" data-event="${event.id}">
                                        <i class="fas fa-user-plus"></i> Register
                                    </button>
                                    <button class="btn btn-secondary details-btn" data-event="${event.id}" data-type="upcoming">
                                        <i class="fas fa-info-circle"></i> Details
                                    </button>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Why Attend Events -->
            <section class="why-events section">
                <div class="container">
                    <div class="section-header">
                        <h2>Why Attend Our Events?</h2>
                        <p>Experience intensive learning in a supportive, focused environment</p>
                    </div>
                    <div class="benefits-grid">
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <h3>Accelerated Growth</h3>
                            <p>Make significant progress in a short time with intensive, focused training sessions.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Community Support</h3>
                            <p>Connect with like-minded individuals who share your goals and aspirations.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-hands-helping"></i>
                            </div>
                            <h3>Expert Guidance</h3>
                            <p>Receive personalized feedback and coaching from our experienced instructors.</p>
                        </div>
                        <div class="benefit-card">
                            <div class="benefit-icon">
                                <i class="fas fa-certificate"></i>
                            </div>
                            <h3>Practical Skills</h3>
                            <p>Learn techniques you can immediately apply to boost your confidence and presence.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="events-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Join Our Next Event?</h2>
                        <p>Don't miss out on these transformative experiences. Spaces are limited and fill up quickly.</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">Register for Events</button>
                            <button class="btn btn-secondary" data-navigate="programs">View Training Packages</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderPreviousEventDetail() {
        const event = this.previousEvents.find(e => e.id === this.selectedEvent);
        if (!event) return this.renderEventsOverview();

        return `
            <!-- Event Detail Header -->
            <section class="page-header">
                <div class="container">
                    <nav class="breadcrumb">
                        <button data-navigate="workshops">
                            <i class="fas fa-arrow-left"></i>
                            Back to Events
                        </button>
                    </nav>
                    <div class="header-content">
                        <h1>${event.title}</h1>
                        <p>${event.description}</p>
                        <div class="event-meta-header">
                            <span><i class="fas fa-calendar"></i> ${this.formatDate(event.date)}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                            <span><i class="fas fa-users"></i> ${event.participants} participants</span>
                            <span><i class="fas fa-user-tie"></i> Instructor: ${event.instructor}</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Event Photos Gallery -->
            <section class="event-gallery section">
                <div class="container">
                    <h2>Event Photos</h2>
                    <div class="photo-gallery">
                        ${event.photos.map((photo, index) => `
                            <div class="gallery-item" data-index="${index}">
                                <img src="${photo}" alt="${event.title} - Photo ${index + 1}" loading="lazy" onerror="this.style.display='none'">
                                <div class="gallery-overlay">
                                    <i class="fas fa-expand"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Event Videos -->
            ${event.videos.length > 0 ? `
            <section class="event-videos section">
                <div class="container">
                    <h2>Event Videos</h2>
                    <div class="video-gallery">
                        ${event.videos.map(video => `
                            <div class="video-item">
                                <div class="video-thumbnail" data-video="${video.url}">
                                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                                    <div class="video-play">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                                <h3>${video.title}</h3>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            ` : ''}

            <!-- Event Highlights -->
            <section class="event-highlights section">
                <div class="container">
                    <h2>Event Highlights</h2>
                    <div class="highlights-grid">
                        ${event.highlights.map((highlight, index) => `
                            <div class="highlight-item">
                                <div class="highlight-number">${(index + 1).toString().padStart(2, '0')}</div>
                                <h3>${highlight}</h3>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Testimonial -->
            <section class="event-testimonial section">
                <div class="container">
                    <div class="testimonial-content">
                        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                        <blockquote>${event.testimonial.text}</blockquote>
                        <cite>- ${event.testimonial.author}</cite>
                    </div>
                </div>
            </section>

            <!-- Other Events CTA -->
            <section class="other-events-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Join Our Next Event</h2>
                        <p>Don't miss out on our upcoming transformative events</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary" data-navigate="contact">Register for Events</button>
                            <button class="btn btn-secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); window.router.navigate('workshops')">View All Events</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderUpcomingEventDetail() {
        const event = this.upcomingEvents.find(e => e.id === this.selectedEvent);
        if (!event) return this.renderEventsOverview();

        return `
            <!-- Event Detail Header -->
            <section class="page-header">
                <div class="container">
                    <nav class="breadcrumb">
                        <button data-navigate="workshops">
                            <i class="fas fa-arrow-left"></i>
                            Back to Events
                        </button>
                    </nav>
                    <div class="header-content">
                        <h1>${event.title}</h1>
                        <p>${event.longDescription}</p>
                        <div class="event-meta-header">
                            <span><i class="fas fa-calendar"></i> ${this.formatDate(event.date)}</span>
                            <span><i class="fas fa-clock"></i> ${event.time}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                            <span><i class="fas fa-dollar-sign"></i> ${event.price}</span>
                        </div>
                        <div class="event-actions-large">
                            <button class="btn btn-primary btn-lg" data-navigate="contact">Register Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Event Features -->
            <section class="event-features section">
                <div class="container">
                    <h2>What You'll Experience</h2>
                    <div class="features-grid">
                        ${event.features.map((feature, index) => `
                            <div class="feature-item">
                                <div class="feature-number">${(index + 1).toString().padStart(2, '0')}</div>
                                <h3>${feature}</h3>
                                <p>Comprehensive experience in ${feature.toLowerCase()} with hands-on practice and expert guidance.</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Event Details -->
            <section class="event-details section">
                <div class="container">
                    <div class="details-grid">
                        <div class="detail-card">
                            <h3>Event Information</h3>
                            <ul>
                                <li><strong>Date:</strong> ${this.formatDate(event.date)}</li>
                                <li><strong>Time:</strong> ${event.time}</li>
                                <li><strong>Location:</strong> ${event.location}</li>
                                <li><strong>Capacity:</strong> ${event.capacity}</li>
                                <li><strong>Instructor:</strong> ${event.instructor}</li>
                            </ul>
                        </div>
                        <div class="detail-card">
                            <h3>What's Included</h3>
                            <ul>
                                <li>All training materials</li>
                                <li>Refreshments and snacks</li>
                                <li>Individual feedback sessions</li>
                                <li>Certificate of participation</li>
                                <li>Networking opportunities</li>
                                <li>Follow-up resources</li>
                            </ul>
                        </div>
                        <div class="detail-card">
                            <h3>What to Bring</h3>
                            <ul>
                                <li>Comfortable clothing</li>
                                <li>Positive attitude</li>
                                <li>Notebook for notes</li>
                                <li>Water bottle</li>
                                <li>Open mind for learning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Register CTA -->
            <section class="register-cta section">
                <div class="container">
                    <div class="cta-content">
                        <h2>Ready to Transform?</h2>
                        <p>Secure your spot in this life-changing event. Limited spaces available!</p>
                        <div class="cta-buttons">
                            <button class="btn btn-primary btn-lg" data-navigate="contact">Register for ${event.title}</button>
                            <button class="btn btn-secondary" data-navigate="contact">Ask Questions</button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getYear(dateString) {
        const date = new Date(dateString);
        return date.getFullYear();
    }

    renderWorkshopDetail() {
        const workshop = this.workshops.find(w => w.id === this.selectedWorkshop);
        
        if (!workshop) {
            return this.renderWorkshopsList();
        }

        return `
            <!-- Workshop Detail Header -->
            <section class="workshop-detail-header">
                <div class="container">
                    <nav class="breadcrumb">
                        <button data-navigate="workshops">← Back to Workshops</button>
                    </nav>
                    <div class="workshop-hero">
                        <div class="workshop-info-large">
                            <h1>${workshop.title}</h1>
                            <p class="workshop-tagline">${workshop.longDescription}</p>
                            <div class="workshop-meta-large">
                                <div class="meta-item">
                                    <i class="fas fa-calendar"></i>
                                    <span>${this.formatDate(workshop.date)}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-clock"></i>
                                    <span>${workshop.time}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>${workshop.location}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fas fa-dollar-sign"></i>
                                    <span>${workshop.price}</span>
                                </div>
                            </div>
                            <div class="workshop-capacity">
                                <strong>Limited to ${workshop.capacity}</strong> • Instructor: ${workshop.instructor}
                            </div>
                            <div class="workshop-actions-large">
                                <button class="btn btn-primary btn-lg" data-navigate="contact">Register Now</button>
                                <button class="btn btn-secondary btn-lg" data-navigate="contact">Ask Questions</button>
                            </div>
                        </div>
                        <div class="workshop-image-large">
                            <img src="${workshop.image}" alt="${workshop.title}" loading="eager" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                            <div class="image-placeholder" style="display:none;">
                                <i class="fas fa-calendar-check" aria-hidden="true"></i>
                                <p>Workshop image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Workshop Topics -->
            <section class="workshop-topics section">
                <div class="container">
                    <h2>What You'll Learn</h2>
                    <div class="topics-grid">
                        ${workshop.topics.map((topic, index) => `
                            <div class="topic-item">
                                <div class="topic-number">${(index + 1).toString().padStart(2, '0')}</div>
                                <div class="topic-content">
                                    <h3>${topic}</h3>
                                    <p>Comprehensive training and hands-on practice in ${topic.toLowerCase()}.</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Workshop Details -->
            <section class="workshop-details section">
                <div class="container">
                    <div class="details-grid">
                        <div class="detail-card">
                            <h3>Schedule & Duration</h3>
                            <ul>
                                <li><strong>Date:</strong> ${this.formatDate(workshop.date)}</li>
                                <li><strong>Time:</strong> ${workshop.time}</li>
                                <li><strong>Duration:</strong> ${workshop.duration}</li>
                                <li><strong>Breaks:</strong> Included</li>
                            </ul>
                        </div>
                        <div class="detail-card">
                            <h3>What's Included</h3>
                            <ul>
                                <li>All training materials</li>
                                <li>Refreshments and lunch</li>
                                <li>Individual feedback sessions</li>
                                <li>Certificate of completion</li>
                                <li>Follow-up resources</li>
                            </ul>
                        </div>
                        <div class="detail-card">
                            <h3>Requirements</h3>
                            <ul>
                                <li>No prior experience needed</li>
                                <li>Comfortable clothing recommended</li>
                                <li>Positive attitude and openness to learn</li>
                                <li>Notebook for taking notes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Other Workshops -->
            <section class="other-workshops section">
                <div class="container">
                    <h2>Other Upcoming Workshops</h2>
                    <div class="other-grid">
                        ${this.workshops
                            .filter(w => w.id !== workshop.id)
                            .map(otherWorkshop => `
                                <div class="other-workshop-card" data-workshop="${otherWorkshop.id}">
                                    <div class="other-date">
                                        <span class="date-day">${this.getDay(otherWorkshop.date)}</span>
                                        <span class="date-month">${this.getMonth(otherWorkshop.date)}</span>
                                    </div>
                                    <div class="other-info">
                                        <h3>${otherWorkshop.title}</h3>
                                        <p>${otherWorkshop.description}</p>
                                        <div class="other-price">${otherWorkshop.price}</div>
                                    </div>
                                    <button class="btn btn-secondary btn-sm">View Workshop</button>
                                </div>
                            `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    getDay(dateString) {
        const date = new Date(dateString);
        return date.getDate().toString().padStart(2, '0');
    }

    getMonth(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short' });
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

        // Event card clicks
        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.closest('.event-actions')) return;
                
                const eventId = card.dataset.event;
                const eventType = card.dataset.type;
                window.router.navigate('workshops', { event: eventId, type: eventType });
            });
        });

        // View photos/details buttons
        const viewButtons = document.querySelectorAll('.view-photos-btn, .details-btn');
        viewButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const eventId = button.dataset.event;
                const eventType = button.dataset.type;
                window.router.navigate('workshops', { event: eventId, type: eventType });
            });
        });

        // Register buttons
        const registerButtons = document.querySelectorAll('.register-btn');
        registerButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.router.navigate('contact');
            });
        });

        // Breadcrumb navigation
        const breadcrumbBtns = document.querySelectorAll('.breadcrumb button');
        breadcrumbBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const route = btn.dataset.navigate || 'workshops';
                window.router.navigate(route);
            });
        });

        // Gallery interactions
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.openLightbox(item);
            });
        });

        // Video interactions
        const videoItems = document.querySelectorAll('.video-thumbnail');
        videoItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const videoUrl = item.dataset.video;
                this.playVideo(videoUrl);
            });
        });
    }
    
    openLightbox(galleryItem) {
        // Simple lightbox functionality - could be expanded
        const img = galleryItem.querySelector('img');
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-overlay" onclick="this.parentElement.remove()">
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close" onclick="this.closest('.lightbox-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    playVideo(videoUrl) {
        // Video player functionality - placeholder for actual implementation
        console.log('Playing video:', videoUrl);
        // In a real implementation, this would open a video modal or redirect to video platform
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