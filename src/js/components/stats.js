import { Utils } from '../utils/helpers.js';

export class Stats {
    constructor() {
        this.statsSection = document.querySelector('.stats');
        this.statElements = [];
        this.hasAnimated = false;
        this.observer = null;
        
        if (this.statsSection) {
            this.init();
        }
    }

    init() {
        this.findStatElements();
        this.setupIntersectionObserver();
    }

    findStatElements() {
        const stats = this.statsSection.querySelectorAll('.stat');
        
        stats.forEach(stat => {
            const numberElement = stat.querySelector('h4');
            const labelElement = stat.querySelector('p');
            
            if (numberElement && labelElement) {
                // Extract number and suffix from text content
                const text = numberElement.textContent.trim();
                const matches = text.match(/(\d+)(\+?.*)?/);
                
                if (matches) {
                    const targetNumber = parseInt(matches[1]);
                    const suffix = matches[2] || '';
                    
                    this.statElements.push({
                        element: numberElement,
                        targetNumber,
                        suffix,
                        currentNumber: 0,
                        label: labelElement.textContent.trim()
                    });

                    // Set initial state
                    numberElement.textContent = '0' + suffix;
                }
            }
        });
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.animateStats();
                        this.hasAnimated = true;
                        this.observer.unobserve(this.statsSection);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        this.observer.observe(this.statsSection);
    }

    animateStats() {
        this.statElements.forEach((stat, index) => {
            // Stagger the animations
            setTimeout(() => {
                this.animateStatNumber(stat);
            }, index * 200);
        });

        // Dispatch custom event
        Utils.dispatchCustomEvent(this.statsSection, 'statsAnimationStart');
    }

    animateStatNumber(stat) {
        const { element, targetNumber, suffix } = stat;
        const duration = 2000; // 2 seconds
        const frameRate = 60;
        const totalFrames = (duration / 1000) * frameRate;
        const increment = targetNumber / totalFrames;
        
        let currentFrame = 0;
        let currentNumber = 0;

        const animate = () => {
            currentFrame++;
            currentNumber = Math.min(currentNumber + increment, targetNumber);
            
            // Use easing for smooth animation
            const progress = currentFrame / totalFrames;
            const easedProgress = this.easeOutExpo(progress);
            const displayNumber = Math.floor(easedProgress * targetNumber);
            
            element.textContent = displayNumber + suffix;
            
            if (currentFrame < totalFrames) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final number is exact
                element.textContent = targetNumber + suffix;
                
                // Add completion animation
                this.addCompletionAnimation(element);
                
                // Dispatch completion event
                Utils.dispatchCustomEvent(element, 'statAnimationComplete', {
                    finalNumber: targetNumber,
                    suffix
                });
            }
        };

        requestAnimationFrame(animate);
    }

    easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    addCompletionAnimation(element) {
        // Add a subtle scale animation when complete
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s ease-out';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            setTimeout(() => {
                element.style.transition = '';
            }, 300);
        }, 100);
    }

    // Public method to restart animation
    restartAnimation() {
        if (this.hasAnimated) {
            // Reset numbers
            this.statElements.forEach(stat => {
                stat.element.textContent = '0' + stat.suffix;
                stat.currentNumber = 0;
            });
            
            this.hasAnimated = false;
            
            // Re-setup observer
            this.setupIntersectionObserver();
        }
    }

    // Public method to manually trigger animation
    triggerAnimation() {
        if (!this.hasAnimated) {
            this.animateStats();
        }
    }

    // Public method to add new stat
    addStat(container, targetNumber, suffix = '', label = '') {
        const statDiv = document.createElement('div');
        statDiv.className = 'stat';
        statDiv.innerHTML = `
            <h4>0${suffix}</h4>
            <p>${label}</p>
        `;
        
        container.appendChild(statDiv);
        
        const numberElement = statDiv.querySelector('h4');
        this.statElements.push({
            element: numberElement,
            targetNumber,
            suffix,
            currentNumber: 0,
            label
        });

        // If stats have already animated, animate this new one immediately
        if (this.hasAnimated) {
            setTimeout(() => {
                const newStat = this.statElements[this.statElements.length - 1];
                this.animateStatNumber(newStat);
            }, 100);
        }
    }

    // Public method to update existing stat
    updateStat(index, newTargetNumber, newSuffix = null) {
        if (this.statElements[index]) {
            const stat = this.statElements[index];
            stat.targetNumber = newTargetNumber;
            
            if (newSuffix !== null) {
                stat.suffix = newSuffix;
            }

            // Re-animate if already animated
            if (this.hasAnimated) {
                this.animateStatNumber(stat);
            }
        }
    }

    // Public method to get current stats data
    getStatsData() {
        return this.statElements.map(stat => ({
            targetNumber: stat.targetNumber,
            suffix: stat.suffix,
            label: stat.label,
            currentNumber: stat.currentNumber
        }));
    }

    // Public method to set custom animation duration
    setAnimationDuration(duration) {
        this.animationDuration = duration;
    }

    // Public method for custom easing functions
    setEasingFunction(easingFunction) {
        if (typeof easingFunction === 'function') {
            this.customEasing = easingFunction;
        }
    }

    // Handle resize events
    handleResize() {
        // Recalculate positions if needed
        if (this.observer) {
            this.observer.disconnect();
            this.setupIntersectionObserver();
        }
    }

    // Method to check if animation is complete
    isAnimationComplete() {
        return this.hasAnimated;
    }

    // Method to get animation progress
    getAnimationProgress() {
        if (!this.hasAnimated) return 0;
        
        const completedStats = this.statElements.filter(stat => 
            stat.element.textContent === stat.targetNumber + stat.suffix
        );
        
        return completedStats.length / this.statElements.length;
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // Reset all stat elements
        this.statElements.forEach(stat => {
            stat.element.style.transform = '';
            stat.element.style.transition = '';
        });
        
        this.statElements = [];
        this.hasAnimated = false;
    }
}