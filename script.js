class FarewellLetterViewer {
    constructor() {
        this.letters = [];
        this.currentIndex = 0;
        this.isAnimating = false;
        this.startX = 0;
        this.currentX = 0;
        this.isDragging = false;

        this.init();
    }

    async init() {
        this.bindElements();
        await this.loadLetters();
        this.bindEvents();
        this.updateDisplay();
    }

    bindElements() {
        this.letterCard = document.getElementById('letterCard');
        this.letterFrom = document.getElementById('letterFrom');
        this.letterMessage = document.getElementById('letterMessage');
        this.currentLetterSpan = document.getElementById('currentLetter');
        this.totalLettersSpan = document.getElementById('totalLetters');
        this.progressFill = document.getElementById('progressFill');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
    }

    async loadLetters() {
        try {
            // Try to load from letters.json file first
            const response = await fetch('letters.json');
            if (response.ok) {
                this.letters = await response.json();
            } else {
                throw new Error('Could not load letters.json');
            }
        } catch (error) {
            console.log('Using sample data as letters.json not found');
            // Fallback to sample data
            this.letters = [
                {
                    "from": "John Doe",
                    "message": "Thank you for being an incredible mentor and leader. Your guidance has shaped not just my career, but also my approach to life. You've always been there with wisdom, patience, and encouragement. The impact you've made on our team and on me personally will be felt for years to come. Wishing you all the best in your next adventure!"
                },
                {
                    "from": "Sarah Johnson",
                    "message": "Working with you has been one of the highlights of my career. Your dedication, professionalism, and kindness have inspired us all. You have this amazing ability to make everyone feel valued and heard. Thank you for creating such a positive work environment and for always believing in our potential. You will be greatly missed!"
                },
                {
                    "from": "Mike Chen",
                    "message": "It's hard to imagine the office without your infectious laughter and positive energy. You've been more than a colleague – you've been a friend, a mentor, and sometimes even a therapist when work got stressful! Your door was always open, and your advice always spot-on. Best of luck in your new role – they're getting someone truly special."
                },
                {
                    "from": "Emily Rodriguez",
                    "message": "Your leadership style has taught me so much about balancing strength with empathy. You've shown us that success isn't just about numbers, but about people. Thank you for fighting for our team, for celebrating our wins, and for helping us grow through our challenges. Your legacy here will continue to inspire us."
                },
                {
                    "from": "David Kim",
                    "message": "From day one, you welcomed me with open arms and made me feel like part of the family. Your patience in teaching me the ropes and your trust in giving me important projects boosted my confidence immensely. Thank you for being such an amazing role model and for showing me what true leadership looks like."
                }
            ];
        }
    }

    bindEvents() {
        // Button navigation
        this.prevBtn.addEventListener('click', () => this.goToPrevious());
        this.nextBtn.addEventListener('click', () => this.goToNext());

        // Touch events for swipe
        this.letterCard.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.letterCard.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
        this.letterCard.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });

        // Mouse events for desktop swipe
        this.letterCard.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.letterCard.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.letterCard.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.letterCard.addEventListener('mouseleave', (e) => this.handleMouseUp(e));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.goToPrevious();
            } else if (e.key === 'ArrowRight') {
                this.goToNext();
            }
        });
    }

    handleTouchStart(e) {
        if (this.isAnimating) return;

        this.startX = e.touches[0].clientX;
        this.currentX = this.startX;
        this.isDragging = true;
        this.letterCard.style.transition = 'none';
    }

    handleTouchMove(e) {
        if (!this.isDragging || this.isAnimating) return;

        e.preventDefault();
        this.currentX = e.touches[0].clientX;
        const deltaX = this.currentX - this.startX;

        // Add resistance at boundaries
        const resistance = this.getResistance(deltaX);
        this.letterCard.style.transform = `translateX(${deltaX * resistance}px)`;
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        const deltaX = this.currentX - this.startX;
        const threshold = 100; // Minimum distance to trigger swipe

        this.letterCard.style.transition = 'transform 0.3s ease-in-out';

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                this.goToPrevious();
            } else {
                this.goToNext();
            }
        } else {
            // Snap back to center
            this.letterCard.style.transform = 'translateX(0)';
        }
    }

    handleMouseDown(e) {
        if (this.isAnimating) return;

        this.startX = e.clientX;
        this.currentX = this.startX;
        this.isDragging = true;
        this.letterCard.style.transition = 'none';
        this.letterCard.style.cursor = 'grabbing';
    }

    handleMouseMove(e) {
        if (!this.isDragging || this.isAnimating) return;

        this.currentX = e.clientX;
        const deltaX = this.currentX - this.startX;

        const resistance = this.getResistance(deltaX);
        this.letterCard.style.transform = `translateX(${deltaX * resistance}px)`;
    }

    handleMouseUp(e) {
        if (!this.isDragging) return;

        this.isDragging = false;
        const deltaX = this.currentX - this.startX;
        const threshold = 100;

        this.letterCard.style.transition = 'transform 0.3s ease-in-out';
        this.letterCard.style.cursor = 'grab';

        if (Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                this.goToPrevious();
            } else {
                this.goToNext();
            }
        } else {
            this.letterCard.style.transform = 'translateX(0)';
        }
    }

    getResistance(deltaX) {
        const maxResistance = 0.3;
        const isAtBoundary = (deltaX > 0 && this.currentIndex === 0) ||
                            (deltaX < 0 && this.currentIndex === this.letters.length - 1);

        return isAtBoundary ? maxResistance : 1;
    }

    goToPrevious() {
        if (this.currentIndex > 0 && !this.isAnimating) {
            this.currentIndex--;
            this.animateTransition('right');
        }
    }

    goToNext() {
        if (this.currentIndex < this.letters.length - 1 && !this.isAnimating) {
            this.currentIndex++;
            this.animateTransition('left');
        }
    }

    animateTransition(direction) {
        this.isAnimating = true;

        // Slide out current letter
        this.letterCard.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';

        setTimeout(() => {
            // Update content and display
            this.updateDisplay();

            // Position for slide in
            this.letterCard.style.transition = 'none';
            this.letterCard.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

            // Trigger slide in animation
            setTimeout(() => {
                this.letterCard.style.transition = 'transform 0.3s ease-in-out';
                this.letterCard.style.transform = 'translateX(0)';

                setTimeout(() => {
                    this.isAnimating = false;
                }, 300);
            }, 50);

        }, 300);
    }

    updateLetterContent() {
        const letter = this.letters[this.currentIndex];
        this.letterFrom.textContent = `From: ${letter.from}`;
        this.letterMessage.textContent = letter.message;
    }

    updateDisplay() {
        if (this.letters.length === 0) return;

        this.updateLetterContent();
        this.currentLetterSpan.textContent = this.currentIndex + 1;
        this.totalLettersSpan.textContent = this.letters.length;

        // Update progress bar
        const progress = ((this.currentIndex + 1) / this.letters.length) * 100;
        this.progressFill.style.width = `${progress}%`;

        // Update navigation buttons
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.letters.length - 1;
    }

    // Public method to add letters dynamically
    addLetter(letter) {
        this.letters.push(letter);
        this.updateDisplay();
    }

    // Public method to load custom letters
    loadCustomLetters(letters) {
        this.letters = letters;
        this.currentIndex = 0;
        this.updateDisplay();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.farewellViewer = new FarewellLetterViewer();
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FarewellLetterViewer;
}