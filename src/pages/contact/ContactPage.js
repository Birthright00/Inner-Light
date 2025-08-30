export class ContactPage {
    constructor(data = {}) {
        this.data = data;
    }

    async render() {
        return `
            <!-- Contact Header -->
            <section class="page-header">
                <div class="container">
                    <div class="header-content">
                        <h1>Get In Touch</h1>
                        <p>Ready to unlock your potential? Let's start your transformation journey together.</p>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section class="contact-main section">
                <div class="container">
                    <div class="contact-content">
                        <div class="contact-info">
                            <h2>Contact Information</h2>
                            <p>We're here to help you begin your modeling and confidence journey. Reach out to us through any of the following methods:</p>
                            
                            <div class="contact-items">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Phone</h4>
                                        <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
                                        <span class="contact-hours">Mon-Fri: 9:00 AM - 6:00 PM</span>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Email</h4>
                                        <p><a href="mailto:innerlightstudio2024@gmail.com">innerlightstudio2024@gmail.com</a></p>
                                        <span class="contact-hours">We respond within 24 hours</span>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Address</h4>
                                        <p>123 Training Ave<br>Confidence City, CC 12345</p>
                                        <span class="contact-hours">Parking available</span>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="fas fa-clock" aria-hidden="true"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4>Studio Hours</h4>
                                        <p>Monday - Friday: 9:00 AM - 8:00 PM<br>
                                           Saturday: 10:00 AM - 6:00 PM<br>
                                           Sunday: 12:00 PM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div class="social-connect">
                                <h3>Follow Us</h3>
                                <div class="social-links">
                                    <a href="#" aria-label="Instagram" class="social-link">
                                        <i class="fab fa-instagram"></i>
                                        <span>@innerlightstudio</span>
                                    </a>
                                    <a href="#" aria-label="Facebook" class="social-link">
                                        <i class="fab fa-facebook"></i>
                                        <span>Inner Light Studio</span>
                                    </a>
                                    <a href="#" aria-label="LinkedIn" class="social-link">
                                        <i class="fab fa-linkedin"></i>
                                        <span>Inner Light Studio</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form-section">
                            <h2>Send Us a Message</h2>
                            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                            
                            <form class="contact-form">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="contact-firstName">First Name *</label>
                                        <input type="text" id="contact-firstName" name="firstName" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact-lastName">Last Name *</label>
                                        <input type="text" id="contact-lastName" name="lastName" required>
                                    </div>
                                </div>
                                
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="contact-email">Email Address *</label>
                                        <input type="email" id="contact-email" name="email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact-phone">Phone Number</label>
                                        <input type="tel" id="contact-phone" name="phone">
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-interest">I'm interested in *</label>
                                    <select id="contact-interest" name="interest" required>
                                        <option value="">Select your interest</option>
                                        <option value="trial-package">Trial Package (55 SGD)</option>
                                        <option value="starter-package">Starter Package</option>
                                        <option value="professional-package">Professional Package</option>
                                        <option value="event">Event Participation</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-experience">Previous Experience</label>
                                    <select id="contact-experience" name="experience">
                                        <option value="">Select your experience level</option>
                                        <option value="beginner">Complete Beginner</option>
                                        <option value="some-experience">Some Experience</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-message">Message *</label>
                                    <textarea id="contact-message" name="message" rows="5" placeholder="Tell us about your goals, questions, or how we can help you..." required></textarea>
                                </div>
                                
                                <div class="form-group checkbox-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" id="contact-newsletter" name="newsletter">
                                        <span class="checkmark"></span>
                                        <span class="checkbox-text">I'd like to receive updates about new packages and events</span>
                                    </label>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-lg submit-btn">Send Message</button>
                                
                                <p class="form-note">
                                    <i class="fas fa-shield-alt"></i>
                                    Your information is secure and will never be shared with third parties.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="contact-faq section">
                <div class="container">
                    <div class="section-header">
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions about our packages and services</p>
                    </div>
                    <div class="faq-grid">
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>Do I need any prior modeling experience?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>No prior experience is required! Our packages are designed for complete beginners as well as those looking to improve their existing skills. We'll start from the basics and build up your confidence and abilities.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>What should I wear to classes?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>Wear comfortable, form-fitting clothing that allows you to move freely. For runway classes, bring heels if you have them (we also have some available). We'll provide detailed guidelines when you enroll.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>How long are the packages?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>Package lengths vary: Trial Package (1 class), Starter Package (5 classes over 3 months), Professional Package (14 classes over 6 months). We also offer intensive events that run from 4 hours to 3 days.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>Do you offer payment plans?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>Yes! We offer flexible payment plans to make our packages accessible. Contact us to discuss options that work with your budget.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>Can I visit the studio before enrolling?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>Absolutely! We encourage potential students to visit our studio and meet our instructors. Schedule a free consultation to see if we're the right fit for you.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <h3>What age groups do you work with?</h3>
                                <button class="faq-toggle" aria-label="Toggle answer">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="faq-answer">
                                <p>We work with students aged 16 and up. Our programs are designed for teens and adults of all ages who want to build confidence and develop modeling skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Map Section (Placeholder) -->
            <section class="contact-map section">
                <div class="container">
                    <h2>Find Us</h2>
                    <div class="map-container">
                        <div class="map-placeholder">
                            <i class="fas fa-map-marked-alt"></i>
                            <h3>Visit Our Studio</h3>
                            <p>123 Training Ave, Confidence City, CC 12345</p>
                            <p>Convenient parking available</p>
                            <button class="btn btn-secondary">Get Directions</button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Next Steps -->
            <section class="contact-next-steps section">
                <div class="container">
                    <div class="next-steps-content">
                        <h2>What Happens Next?</h2>
                        <div class="steps-grid">
                            <div class="step-item">
                                <div class="step-number">1</div>
                                <h3>We'll Contact You</h3>
                                <p>Within 24 hours, we'll reach out to discuss your goals and answer any questions.</p>
                            </div>
                            <div class="step-item">
                                <div class="step-number">2</div>
                                <h3>Free Consultation</h3>
                                <p>Schedule a complimentary consultation to meet our team and tour the studio.</p>
                            </div>
                            <div class="step-item">
                                <div class="step-number">3</div>
                                <h3>Start Your Journey</h3>
                                <p>Choose your package and begin transforming your confidence today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.initializeContactForm();
        this.setupFAQ();
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

    initializeContactForm() {
        // Import and initialize contact form
        import('../../components/contactForm.js').then(({ ContactForm }) => {
            this.contactForm = new ContactForm();
        });
    }

    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    otherItem.querySelector('.faq-toggle i').className = 'fas fa-plus';
                });
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    toggle.querySelector('i').className = 'fas fa-minus';
                }
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
        if (this.contactForm && typeof this.contactForm.destroy === 'function') {
            this.contactForm.destroy();
        }
    }
}