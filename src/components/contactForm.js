export class ContactForm {
    constructor() {
        this.form = null;
        this.submitButton = null;
        this.originalButtonText = '';
        this.init();
    }

    init() {
        this.form = document.querySelector('.contact-form');
        if (!this.form) return;

        this.submitButton = this.form.querySelector('.submit-btn');
        if (this.submitButton) {
            this.originalButtonText = this.submitButton.textContent;
        }

        this.setupEventListeners();
        this.setupValidation();
    }

    setupEventListeners() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    setupValidation() {
        // Custom validation messages
        const requiredFields = this.form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('invalid', (e) => {
                e.preventDefault();
                this.showFieldError(field, this.getValidationMessage(field));
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = `${this.getFieldLabel(field)} is required.`;
        }
        // Email validation
        else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address.';
            }
        }
        // Phone validation
        else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid phone number.';
            }
        }

        if (isValid) {
            this.clearFieldError(field);
        } else {
            this.showFieldError(field, message);
        }

        return isValid;
    }

    showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        // Remove existing error
        this.clearFieldError(field);

        // Add error class
        formGroup.classList.add('error');

        // Create error message
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.setAttribute('role', 'alert');

        // Insert error message
        formGroup.appendChild(errorElement);
    }

    clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        if (!formGroup) return;

        formGroup.classList.remove('error');
        const errorElement = formGroup.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    getFieldLabel(field) {
        const label = this.form.querySelector(`label[for="${field.id}"]`);
        return label ? label.textContent.replace('*', '').trim() : field.name;
    }

    getValidationMessage(field) {
        if (field.hasAttribute('required') && !field.value.trim()) {
            return `${this.getFieldLabel(field)} is required.`;
        }
        return field.validationMessage;
    }

    async handleSubmit() {
        // Validate all fields
        const inputs = this.form.querySelectorAll('input, textarea, select');
        let isFormValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            // Focus first error field
            const firstError = this.form.querySelector('.form-group.error input, .form-group.error textarea, .form-group.error select');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        // Show loading state
        this.setLoadingState(true);

        try {
            // Collect form data
            const formData = new FormData(this.form);
            const data = Object.fromEntries(formData.entries());

            // Simulate API call (replace with actual submission logic)
            await this.submitFormData(data);

            // Show success message
            this.showSuccessMessage();
            
            // Reset form
            this.form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage('Something went wrong. Please try again later.');
        } finally {
            this.setLoadingState(false);
        }
    }

    async submitFormData(data) {
        // Simulate API delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // In a real application, you would send this data to your server
                console.log('Form submitted:', data);
                resolve();
            }, 2000);
        });
    }

    setLoadingState(isLoading) {
        if (!this.submitButton) return;

        if (isLoading) {
            this.submitButton.disabled = true;
            this.submitButton.innerHTML = `
                <i class="fas fa-spinner fa-spin"></i>
                Sending...
            `;
        } else {
            this.submitButton.disabled = false;
            this.submitButton.textContent = this.originalButtonText;
        }
    }

    showSuccessMessage() {
        const message = document.createElement('div');
        message.className = 'form-message success';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
        `;

        this.form.insertAdjacentElement('beforebegin', message);

        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);

        // Scroll to message
        message.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    showErrorMessage(errorText) {
        const message = document.createElement('div');
        message.className = 'form-message error';
        message.innerHTML = `
            <i class="fas fa-exclamation-circle"></i>
            <p>${errorText}</p>
        `;

        this.form.insertAdjacentElement('beforebegin', message);

        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);

        // Scroll to message
        message.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Cleanup method
    destroy() {
        if (this.form) {
            const inputs = this.form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.removeEventListener('blur', this.validateField);
                input.removeEventListener('input', this.clearFieldError);
            });

            this.form.removeEventListener('submit', this.handleSubmit);
        }
    }
}