export class Stats {
    constructor() {
        this.statsElements = null;
        this.observer = null;
        this.counters = [];
        this.init();
    }

    init() {
        this.statsElements = document.querySelectorAll('.stat h4');
        if (this.statsElements.length === 0) return;

        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });

        this.statsElements.forEach(element => {
            this.observer.observe(element);
        });
    }

    animateCounter(element) {
        const target = this.extractNumber(element.textContent);
        const suffix = element.textContent.replace(/[0-9]/g, '');
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        element.textContent = '0' + suffix;

        const counter = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 16);

        // Store counter for cleanup
        this.counters.push(counter);

        // Add bounce animation when counter starts
        element.closest('.stat').classList.add('animate-bounce');
    }

    extractNumber(text) {
        const match = text.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }

    // Add pulsing effect to stats
    addPulseEffect() {
        this.statsElements.forEach((element, index) => {
            const statContainer = element.closest('.stat');
            if (statContainer) {
                statContainer.style.animationDelay = `${index * 0.2}s`;
                statContainer.classList.add('animate-pulse');
            }
        });
    }

    // Add hover effects
    setupHoverEffects() {
        const statContainers = document.querySelectorAll('.stat');
        statContainers.forEach(stat => {
            stat.addEventListener('mouseenter', () => {
                stat.style.transform = 'scale(1.05)';
                stat.style.transition = 'transform 0.3s ease';
            });

            stat.addEventListener('mouseleave', () => {
                stat.style.transform = 'scale(1)';
            });
        });
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // Clear all running counters
        this.counters.forEach(counter => {
            clearInterval(counter);
        });
        this.counters = [];
    }
}