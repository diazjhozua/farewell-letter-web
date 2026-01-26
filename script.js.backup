/*
 * THEME CONFIGURATION
 *
 * To change the theme, modify the 'currentTheme' value below:
 * - 'default': Blue/purple elegant cinematic theme
 * - 'tech': Dark green terminal/programmer theme
 * - 'business': Professional navy/corporate theme
 * - 'girly': Pink/purple feminine theme
 * - 'futuristic': Cyan/neon sci-fi theme
 *
 * Note: Theme selection is code-only, not exposed to users.
 */

class FarewellLetterViewer {
  constructor() {
    this.introSlides = [];
    this.letters = [];
    this.currentIndex = 0;
    this.isAnimating = false;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    this.mode = 'intro'; // 'intro' or 'letters'

    // Theme Configuration - Change this to switch themes
    // Options: 'default', 'tech', 'business', 'girly', 'futuristic'
    this.currentTheme = 'default';

    this.init();
  }

  async init() {
    this.bindElements();
    await this.loadData();
    this.bindEvents();
    this.setupInitialMode();
    this.updateDisplay();
  }

  setupInitialMode() {
    document.body.className = `trailer-mode theme-${this.currentTheme}`;
    this.trailerContainer.style.display = 'block';
    this.lettersContainer.style.display = 'none';
  }

  bindElements() {
    // Trailer elements
    this.trailerContainer = document.getElementById('trailerContainer');
    this.trailerSlide = document.getElementById('trailerSlide');
    this.introIcon = document.getElementById('introIcon');
    this.introTitle = document.getElementById('introTitle');
    this.introText = document.getElementById('introText');
    this.trailerCurrentSlideSpan = document.getElementById(
      'trailerCurrentSlide',
    );
    this.trailerTotalSlidesSpan = document.getElementById('trailerTotalSlides');
    this.trailerProgressFill = document.getElementById('trailerProgressFill');
    this.trailerPrevBtn = document.getElementById('trailerPrevBtn');
    this.trailerNextBtn = document.getElementById('trailerNextBtn');
    this.trailerTransitionButton = document.getElementById(
      'trailerTransitionButton',
    );
    this.trailerInstructionText = document.getElementById(
      'trailerInstructionText',
    );

    // Letter elements
    this.lettersContainer = document.getElementById('lettersContainer');
    this.lettersSlide = document.getElementById('lettersSlide');
    this.letterFrom = document.getElementById('letterFrom');
    this.letterMessage = document.getElementById('letterMessage');
    this.currentSlideSpan = document.getElementById('currentSlide');
    this.totalSlidesSpan = document.getElementById('totalSlides');
    this.progressFill = document.getElementById('progressFill');
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.instructionText = document.getElementById('instructionText');

    // Shared elements
    this.startLettersBtn = document.getElementById('startLettersBtn');
    this.skipIntroBtn = document.getElementById('skipIntroBtn');
    this.backToIntroBtn = document.getElementById('backToIntroBtn');
  }

  async loadData() {
    // Load intro slides
    try {
      const introResponse = await fetch('intro.json');
      if (introResponse.ok) {
        this.introSlides = await introResponse.json();
      } else {
        throw new Error('Could not load intro.json');
      }
    } catch (error) {
      console.log('Using default intro slides as intro.json not found');
      this.introSlides = [
        {
          icon: '👋',
          title: 'A Farewell Tribute',
          text: "We've gathered heartfelt messages from your colleagues to celebrate your incredible journey with us.",
        },
        {
          icon: '🌟',
          title: 'Your Impact',
          text: 'Your leadership, mentorship, and friendship have touched the lives of everyone around you.',
        },
        {
          icon: '🚀',
          title: 'New Adventures Await',
          text: 'As you embark on your next chapter, know that your legacy here will continue to inspire us all.',
        },
        {
          icon: '💝',
          title: 'From All of Us',
          text: "These personal messages are a small token of our appreciation for everything you've given us.",
        },
      ];
    }

    // Load letters
    try {
      const response = await fetch('letters.json');
      if (response.ok) {
        this.letters = await response.json();
      } else {
        throw new Error('Could not load letters.json');
      }
    } catch (error) {
      console.log('Using sample data as letters.json not found');
      this.letters = [
        {
          from: 'John Doe',
          message:
            "Thank you for being an incredible mentor and leader. Your guidance has shaped not just my career, but also my approach to life. You've always been there with wisdom, patience, and encouragement. The impact you've made on our team and on me personally will be felt for years to come. Wishing you all the best in your next adventure!",
        },
        {
          from: 'Sarah Johnson',
          message:
            'Working with you has been one of the highlights of my career. Your dedication, professionalism, and kindness have inspired us all. You have this amazing ability to make everyone feel valued and heard. Thank you for creating such a positive work environment and for always believing in our potential. You will be greatly missed!',
        },
        {
          from: 'Mike Chen',
          message:
            "It's hard to imagine the office without your infectious laughter and positive energy. You've been more than a colleague – you've been a friend, a mentor, and sometimes even a therapist when work got stressful! Your door was always open, and your advice always spot-on. Best of luck in your new role – they're getting someone truly special.",
        },
        {
          from: 'Emily Rodriguez',
          message:
            "Your leadership style has taught me so much about balancing strength with empathy. You've shown us that success isn't just about numbers, but about people. Thank you for fighting for our team, for celebrating our wins, and for helping us grow through our challenges. Your legacy here will continue to inspire us.",
        },
        {
          from: 'David Kim',
          message:
            'From day one, you welcomed me with open arms and made me feel like part of the family. Your patience in teaching me the ropes and your trust in giving me important projects boosted my confidence immensely. Thank you for being such an amazing role model and for showing me what true leadership looks like.',
        },
      ];
    }
  }

  bindEvents() {
    // Trailer button navigation
    this.trailerPrevBtn.addEventListener('click', () => this.goToPrevious());
    this.trailerNextBtn.addEventListener('click', () => this.goToNext());

    // Letter button navigation
    this.prevBtn.addEventListener('click', () => this.goToPrevious());
    this.nextBtn.addEventListener('click', () => this.goToNext());

    // Start letters button
    this.startLettersBtn.addEventListener('click', () =>
      this.transitionToLetters(),
    );

    // Skip intro button
    this.skipIntroBtn.addEventListener('click', () =>
      this.transitionToLetters(),
    );

    // Back to intro button
    this.backToIntroBtn.addEventListener('click', () =>
      this.transitionToIntro(),
    );

    // Touch events for trailer swipe
    this.trailerSlide.addEventListener(
      'touchstart',
      (e) => this.handleTouchStart(e),
      { passive: true },
    );
    this.trailerSlide.addEventListener(
      'touchmove',
      (e) => this.handleTouchMove(e),
      { passive: false },
    );
    this.trailerSlide.addEventListener(
      'touchend',
      (e) => this.handleTouchEnd(e),
      { passive: true },
    );

    // Mouse events for trailer desktop swipe
    this.trailerSlide.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e),
    );
    this.trailerSlide.addEventListener('mousemove', (e) =>
      this.handleMouseMove(e),
    );
    this.trailerSlide.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.trailerSlide.addEventListener('mouseleave', (e) =>
      this.handleMouseUp(e),
    );

    // Touch events for letter swipe
    this.lettersSlide.addEventListener(
      'touchstart',
      (e) => this.handleTouchStart(e),
      { passive: true },
    );
    this.lettersSlide.addEventListener(
      'touchmove',
      (e) => this.handleTouchMove(e),
      { passive: false },
    );
    this.lettersSlide.addEventListener(
      'touchend',
      (e) => this.handleTouchEnd(e),
      { passive: true },
    );

    // Mouse events for letter desktop swipe
    this.lettersSlide.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e),
    );
    this.lettersSlide.addEventListener('mousemove', (e) =>
      this.handleMouseMove(e),
    );
    this.lettersSlide.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.lettersSlide.addEventListener('mouseleave', (e) =>
      this.handleMouseUp(e),
    );

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.goToPrevious();
      } else if (e.key === 'ArrowRight') {
        this.goToNext();
      } else if (
        e.key === 'Enter' &&
        this.mode === 'intro' &&
        this.isAtLastIntroSlide()
      ) {
        this.transitionToLetters();
      }
    });
  }

  handleTouchStart(e) {
    if (this.isAnimating) return;

    this.startX = e.touches[0].clientX;
    this.currentX = this.startX;
    this.isDragging = true;

    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transition = 'none';
  }

  handleTouchMove(e) {
    if (!this.isDragging || this.isAnimating) return;

    e.preventDefault();
    this.currentX = e.touches[0].clientX;
    const deltaX = this.currentX - this.startX;

    // Add resistance at boundaries
    const resistance = this.getResistance(deltaX);
    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transform = `translateX(${deltaX * resistance}px)`;
  }

  handleTouchEnd(e) {
    if (!this.isDragging) return;

    this.isDragging = false;
    const deltaX = this.currentX - this.startX;
    const threshold = 100; // Minimum distance to trigger swipe

    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transition = 'transform 0.3s ease-in-out';

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        this.goToPrevious();
      } else {
        this.goToNext();
      }
    } else {
      // Snap back to center
      activeElement.style.transform = 'translateX(0)';
    }
  }

  handleMouseDown(e) {
    if (this.isAnimating) return;

    this.startX = e.clientX;
    this.currentX = this.startX;
    this.isDragging = true;

    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transition = 'none';
    activeElement.style.cursor = 'grabbing';
  }

  handleMouseMove(e) {
    if (!this.isDragging || this.isAnimating) return;

    this.currentX = e.clientX;
    const deltaX = this.currentX - this.startX;

    const resistance = this.getResistance(deltaX);
    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transform = `translateX(${deltaX * resistance}px)`;
  }

  handleMouseUp(e) {
    if (!this.isDragging) return;

    this.isDragging = false;
    const deltaX = this.currentX - this.startX;
    const threshold = 100;

    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    activeElement.style.transition = 'transform 0.3s ease-in-out';
    activeElement.style.cursor = 'grab';

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        this.goToPrevious();
      } else {
        this.goToNext();
      }
    } else {
      activeElement.style.transform = 'translateX(0)';
    }
  }

  getResistance(deltaX) {
    const maxResistance = 0.3;
    const totalItems =
      this.mode === 'intro' ? this.introSlides.length : this.letters.length;
    const isAtBoundary =
      (deltaX > 0 && this.currentIndex === 0) ||
      (deltaX < 0 && this.currentIndex === totalItems - 1);

    return isAtBoundary ? maxResistance : 1;
  }

  goToPrevious() {
    if (this.currentIndex > 0 && !this.isAnimating) {
      this.currentIndex--;
      this.animateTransition('right');
    }
  }

  goToNext() {
    const totalItems =
      this.mode === 'intro' ? this.introSlides.length : this.letters.length;
    if (this.currentIndex < totalItems - 1 && !this.isAnimating) {
      this.currentIndex++;
      this.animateTransition('left');
    }
  }

  animateTransition(direction) {
    this.isAnimating = true;

    const activeElement =
      this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;

    // Slide out current slide
    activeElement.style.transform =
      direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';

    setTimeout(
      () => {
        // Update content and display
        this.updateDisplay();

        // Position for slide in
        activeElement.style.transition = 'none';
        activeElement.style.transform =
          direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

        // Trigger slide in animation
        setTimeout(() => {
          activeElement.style.transition = 'transform 0.8s ease-in-out';
          activeElement.style.transform = 'translateX(0)';

          setTimeout(
            () => {
              this.isAnimating = false;
            },
            this.mode === 'intro' ? 800 : 300,
          );
        }, 50);
      },
      this.mode === 'intro' ? 800 : 300,
    );
  }

  updateIntroContent() {
    const slide = this.introSlides[this.currentIndex];
    this.introIcon.textContent = slide.icon;
    this.introTitle.textContent = slide.title;
    this.introText.textContent = slide.text;
  }

  updateLetterContent() {
    const letter = this.letters[this.currentIndex];

    // Set letter content
    this.letterFrom.textContent = letter.from;
    this.letterMessage.textContent = letter.message;
  }

  isAtLastIntroSlide() {
    return (
      this.mode === 'intro' && this.currentIndex === this.introSlides.length - 1
    );
  }

  updateDisplay() {
    if (this.mode === 'intro') {
      this.updateIntroContent();
      this.trailerCurrentSlideSpan.textContent = this.currentIndex + 1;
      this.trailerTotalSlidesSpan.textContent = this.introSlides.length;

      // Update progress bar
      const progress =
        ((this.currentIndex + 1) / this.introSlides.length) * 100;
      this.trailerProgressFill.style.width = `${progress}%`;

      // Update navigation buttons
      this.trailerPrevBtn.disabled = this.currentIndex === 0;
      this.trailerNextBtn.disabled =
        this.currentIndex === this.introSlides.length - 1;

      // Show/hide transition button
      this.trailerTransitionButton.style.display = this.isAtLastIntroSlide()
        ? 'block'
        : 'none';
      this.trailerInstructionText.textContent = this.isAtLastIntroSlide()
        ? 'Click the button below to start reading the farewell letters'
        : 'Swipe left or right to navigate';
    } else if (this.mode === 'letters') {
      this.updateLetterContent();
      this.currentSlideSpan.textContent = this.currentIndex + 1;
      this.totalSlidesSpan.textContent = this.letters.length;

      // Update progress bar
      const progress = ((this.currentIndex + 1) / this.letters.length) * 100;
      this.progressFill.style.width = `${progress}%`;

      // Update navigation buttons
      this.prevBtn.disabled = this.currentIndex === 0;
      this.nextBtn.disabled = this.currentIndex === this.letters.length - 1;

      // Update instruction text
      this.instructionText.textContent =
        'Swipe left or right to navigate between letters';
    }
  }

  transitionToLetters() {
    // Create a fade transition effect
    this.trailerContainer.style.transition = 'opacity 0.8s ease-out';
    this.trailerContainer.style.opacity = '0';

    setTimeout(() => {
      // Switch modes
      this.mode = 'letters';
      this.currentIndex = 0;

      // Hide trailer and show letters container
      this.trailerContainer.style.display = 'none';
      this.lettersContainer.style.display = 'block';

      // Update body class for styling
      document.body.className = `letter-mode theme-${this.currentTheme}`;

      // Reset trailer opacity for future use
      this.trailerContainer.style.opacity = '1';

      // Update display
      this.updateDisplay();
    }, 800);
  }

  transitionToIntro() {
    // Create a fade transition effect
    this.lettersContainer.style.transition = 'opacity 0.8s ease-out';
    this.lettersContainer.style.opacity = '0';

    setTimeout(() => {
      // Switch modes
      this.mode = 'intro';
      this.currentIndex = 0;

      // Hide letters and show trailer container
      this.lettersContainer.style.display = 'none';
      this.trailerContainer.style.display = 'block';

      // Update body class for styling
      document.body.className = `trailer-mode theme-${this.currentTheme}`;

      // Reset letters opacity for future use
      this.lettersContainer.style.opacity = '1';

      // Update display
      this.updateDisplay();
    }, 800);
  }

  // Public method to add letters dynamically
  addLetter(letter) {
    this.letters.push(letter);
    if (this.mode === 'letters') {
      this.updateDisplay();
    }
  }

  // Public method to load custom letters
  loadCustomLetters(letters) {
    this.letters = letters;
    if (this.mode === 'letters') {
      this.currentIndex = 0;
      this.updateDisplay();
    }
  }

  // Public method to load custom intro slides
  loadCustomIntroSlides(slides) {
    this.introSlides = slides;
    if (this.mode === 'intro') {
      this.currentIndex = 0;
      this.updateDisplay();
    }
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
