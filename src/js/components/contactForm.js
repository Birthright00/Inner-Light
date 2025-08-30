import { Utils } from '../utils/helpers.js';

export class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form form');
        this.inputs = {};
        this.isSubmitting = false;
        this.validation = {
            name: { required: true, minLength: 2 },
            email: { required: true, email: true },
            service: { required: true },
            message: { required: true, minLength: 10 }
        };
        
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.setupFormElements();
        this.setupEventListeners();
        this.setupValidation();
    }

    setupFormElements() {
        // Cache form inputs
        this.inputs = {
            name: this.form.querySelector('input[type="text"]'),
            email: this.form.querySelector('input[type="email"]'),
            service: this.form.querySelector('select'),
            message: this.form.querySelector('textarea')
        };

        // Add IDs and labels for accessibility
        Object.entries(this.inputs).forEach(([key, input]) => {
            if (input && !input.id) {
                input.id = `contact-${key}`;
            }
        });
    }

    setupEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Real-time validation
        Object.entries(this.inputs).forEach(([key, input]) => {
            if (input) {
                // Validate on blur
                input.addEventListener('blur', () => {
                    this.validateField(key, input.value);
                });

                // Clear errors on input
                input.addEventListener('input', () => {
                    this.clearFieldError(key);
                });

                // Handle special cases
                if (key === 'email') {
                    input.addEventListener('input', Utils.debounce(() => {
                        if (input.value.length > 3) {
                            this.validateField(key, input.value);
                        }
                    }, 500));
                }
            }
        });

        // Handle form reset
        this.form.addEventListener('reset', () => {
            this.clearAllErrors();
        });
    }

    setupValidation() {
        // Add required indicators
        Object.entries(this.inputs).forEach(([key, input]) => {
            if (input && this.validation[key]?.required) {
                const label = this.form.querySelector(`label[for="${input.id}"]`);
                if (label && !label.querySelector('.required')) {
                    const required = document.createElement('span');
                    required.className = 'required';
                    required.textContent = ' *';
                    required.style.color = 'var(--primary-black)';
                    label.appendChild(required);
                }
            }
        });
    }

    validateField(fieldName, value) {
        const rules = this.validation[fieldName];
        const input = this.inputs[fieldName];
        
        if (!rules || !input) return true;

        let isValid = true;
        let errorMessage = '';

        // Required validation
        if (rules.required && (!value || value.trim() === '')) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(fieldName)} is required`;
        }
        // Email validation
        else if (rules.email && value && !Utils.isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
        // Minimum length validation
        else if (rules.minLength && value && value.trim().length < rules.minLength) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(fieldName)} must be at least ${rules.minLength} characters`;
        }

        if (!isValid) {
            this.showFieldError(fieldName, errorMessage);
        } else {
            this.clearFieldError(fieldName);
        }

        return isValid;
    }

    validateForm() {
        let isFormValid = true;

        Object.entries(this.inputs).forEach(([key, input]) => {
            if (input) {
                const isFieldValid = this.validateField(key, input.value);
                if (!isFieldValid) {
                    isFormValid = false;
                }
            }
        });

        return isFormValid;
    }

    showFieldError(fieldName, message) {
        const input = this.inputs[fieldName];
        if (!input) return;

        // Remove existing error
        this.clearFieldError(fieldName);

        // Add error class
        input.classList.add('error');

        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--primary-black);
            font-size: 12px;
            margin-top: 4px;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        // Insert error message
        input.parentNode.insertBefore(errorDiv, input.nextSibling);

        // Animate in
        requestAnimationFrame(() => {
            errorDiv.style.opacity = '1';
        });
    }

    clearFieldError(fieldName) {
        const input = this.inputs[fieldName];
        if (!input) return;

        input.classList.remove('error');
        
        const errorDiv = input.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    clearAllErrors() {
        Object.keys(this.inputs).forEach(fieldName => {
            this.clearFieldError(fieldName);
        });
    }

    getFieldLabel(fieldName) {
        const labels = {
            name: 'Name',
            email: 'Email',
            service: 'Service',
            message: 'Message'
        };
        return labels[fieldName] || fieldName;
    }

    getFormData() {
        const formData = {};
        
        Object.entries(this.inputs).forEach(([key, input]) => {
            if (input) {
                formData[key] = input.value.trim();
            }
        });

        return formData;
    }

    async handleSubmit() {
        if (this.isSubmitting) return;

        // Validate form
        if (!this.validateForm()) {
            this.showFormMessage('Please correct the errors above', 'error');
            return;
        }

        this.isSubmitting = true;
        const submitButton = this.form.querySelector('button[type="submit"]');
        const removeLoadingState = Utils.addLoadingState(submitButton, 'Sending...');

        try {
            const formData = this.getFormData();
            
            // Simulate API call (replace with actual endpoint)
            const response = await this.submitToAPI(formData);
            
            if (response.success) {
                this.showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                this.resetForm();
                
                // Dispatch success event
                Utils.dispatchCustomEvent(this.form, 'formSubmitSuccess', { formData });
            } else {
                throw new Error(response.message || 'Submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.showFormMessage('Sorry, there was an error sending your message. Please try again.', 'error');
            
            // Dispatch error event
            Utils.dispatchCustomEvent(this.form, 'formSubmitError', { error });
            
        } finally {
            this.isSubmitting = false;
            removeLoadingState();
        }
    }

    async submitToAPI(formData) {
        // Simulate API call - replace with actual implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate success/failure
                const success = Math.random() > 0.1; // 90% success rate
                resolve({
                    success,
                    message: success ? 'Message sent successfully' : 'Server error'
                });
            }, 2000);
        });

        // Example actual implementation:
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            return { success: response.ok, ...result };
        } catch (error) {
            return { success: false, message: error.message };
        }
        */
    }

    showFormMessage(message, type = 'info') {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        
        const baseStyles = `
            padding: 12px 16px;
            border-radius: var(--border-radius);
            margin-top: 16px;
            font-size: 14px;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const typeStyles = {
            success: 'background: #f0f9ff; color: var(--primary-black); border: 1px solid #e0f2fe;',
            error: 'background: #fef2f2; color: var(--primary-black); border: 1px solid #fecaca;',
            info: 'background: var(--gray-100); color: var(--gray-700); border: 1px solid var(--gray-200);'
        };

        messageDiv.style.cssText = baseStyles + typeStyles[type];

        // Insert message
        this.form.appendChild(messageDiv);

        // Animate in
        requestAnimationFrame(() => {
            messageDiv.style.opacity = '1';
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.opacity = '0';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.remove();
                    }
                }, 300);
            }
        }, 5000);
    }

    resetForm() {
        this.form.reset();
        this.clearAllErrors();
        
        // Reset custom styling
        Object.values(this.inputs).forEach(input => {
            if (input) {
                input.classList.remove('error');
            }
        });
    }

    // Public method to programmatically submit form
    submit() {
        this.handleSubmit();
    }

    // Public method to set form data
    setFormData(data) {
        Object.entries(data).forEach(([key, value]) => {
            const input = this.inputs[key];
            if (input) {
                input.value = value;
            }
        });
    }

    // Public method to enable/disable form
    setEnabled(enabled) {
        Object.values(this.inputs).forEach(input => {
            if (input) {
                input.disabled = !enabled;
            }
        });

        const submitButton = this.form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = !enabled;
        }
    }

    // Cleanup method
    destroy() {
        // Remove event listeners
        if (this.form) {
            this.form.removeEventListener('submit', this.handleSubmit);
            this.form.removeEventListener('reset', this.clearAllErrors);
        }

        Object.values(this.inputs).forEach(input => {
            if (input) {
                input.removeEventListener('blur', this.validateField);
                input.removeEventListener('input', this.clearFieldError);
            }
        });
    }
}