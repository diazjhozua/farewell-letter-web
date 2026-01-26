import { CONFIG } from './config.js';
import { ThemeManager } from './themeManager.js';
import { GestureHandler } from './gestureHandler.js';
import { DataLoader } from './dataLoader.js';

export class FarewellLetterViewer {
  constructor() {
    this.introSlides = [];
    this.letters = [];
    this.currentIndex = 0;
    this.isAnimating = false;
    this.mode = 'intro'; // 'intro' or 'letters'

    // Initialize managers
    this.themeManager = new ThemeManager();
    this.gestureHandler = new GestureHandler(this);

    this.init();
  }

  async init() {
    this.bindElements();
    await this.loadData();
    this.bindEvents();
    this.setupInitialMode();
    this.updateDisplay();
  }

  bindElements() {
    // Trailer elements
    this.trailerContainer = document.getElementById('trailerContainer');
    this.trailerSlide = document.getElementById('trailerSlide');
    this.introIcon = document.getElementById('introIcon');
    this.introTitle = document.getElementById('introTitle');
    this.introText = document.getElementById('introText');
    this.trailerCurrentSlideSpan = document.getElementById('trailerCurrentSlide');
    this.trailerTotalSlidesSpan = document.getElementById('trailerTotalSlides');
    this.trailerProgressFill = document.getElementById('trailerProgressFill');
    this.trailerPrevBtn = document.getElementById('trailerPrevBtn');
    this.trailerNextBtn = document.getElementById('trailerNextBtn');
    this.trailerTransitionButton = document.getElementById('trailerTransitionButton');
    this.trailerInstructionText = document.getElementById('trailerInstructionText');

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
    const data = await DataLoader.loadAll();
    this.introSlides = data.introSlides;
    this.letters = data.letters;
  }

  bindEvents() {
    // Button navigation
    this.trailerPrevBtn.addEventListener('click', () => this.goToPrevious());
    this.trailerNextBtn.addEventListener('click', () => this.goToNext());
    this.prevBtn.addEventListener('click', () => this.goToPrevious());
    this.nextBtn.addEventListener('click', () => this.goToNext());

    // Mode transition buttons
    this.startLettersBtn.addEventListener('click', () => this.transitionToLetters());
    this.skipIntroBtn.addEventListener('click', () => this.transitionToLetters());
    this.backToIntroBtn.addEventListener('click', () => this.transitionToIntro());

    // Gesture events
    this.gestureHandler.bindGestureEvents();
  }

  setupInitialMode() {
    this.themeManager.applyTheme('trailer');
    this.trailerContainer.style.display = 'block';
    this.lettersContainer.style.display = 'none';
  }

  // Navigation methods
  goToPrevious() {
    if (this.currentIndex > 0 && !this.isAnimating) {
      this.currentIndex--;
      this.animateTransition('right');
    }
  }

  goToNext() {
    const totalItems = this.mode === 'intro' ? this.introSlides.length : this.letters.length;
    if (this.currentIndex < totalItems - 1 && !this.isAnimating) {
      this.currentIndex++;
      this.animateTransition('left');
    }
  }

  animateTransition(direction) {
    this.isAnimating = true;

    const activeElement = this.mode === 'intro' ? this.trailerSlide : this.lettersSlide;
    const duration = this.mode === 'intro' ? CONFIG.ANIMATION_DURATION_INTRO : CONFIG.ANIMATION_DURATION_LETTERS;

    // Slide out current slide
    activeElement.style.transform = direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)';

    setTimeout(() => {
      this.updateDisplay();

      // Position for slide in
      activeElement.style.transition = 'none';
      activeElement.style.transform = direction === 'left' ? 'translateX(100%)' : 'translateX(-100%)';

      // Trigger slide in animation
      setTimeout(() => {
        activeElement.style.transition = 'transform 0.8s ease-in-out';
        activeElement.style.transform = 'translateX(0)';

        setTimeout(() => {
          this.isAnimating = false;
        }, duration);
      }, 50);
    }, duration);
  }

  // Content update methods
  updateIntroContent() {
    const slide = this.introSlides[this.currentIndex];
    this.introIcon.textContent = slide.icon;
    this.introTitle.textContent = slide.title;
    this.introText.textContent = slide.text;
  }

  updateLetterContent() {
    const letter = this.letters[this.currentIndex];
    this.letterFrom.textContent = letter.from;
    this.letterMessage.textContent = letter.message;
  }

  updateDisplay() {
    if (this.mode === 'intro') {
      this.updateIntroDisplay();
    } else if (this.mode === 'letters') {
      this.updateLettersDisplay();
    }
  }

  updateIntroDisplay() {
    this.updateIntroContent();
    this.trailerCurrentSlideSpan.textContent = this.currentIndex + 1;
    this.trailerTotalSlidesSpan.textContent = this.introSlides.length;

    // Update progress bar
    const progress = ((this.currentIndex + 1) / this.introSlides.length) * 100;
    this.trailerProgressFill.style.width = `${progress}%`;

    // Update navigation buttons
    this.trailerPrevBtn.disabled = this.currentIndex === 0;
    this.trailerNextBtn.disabled = this.currentIndex === this.introSlides.length - 1;

    // Show/hide transition button
    this.trailerTransitionButton.style.display = this.isAtLastIntroSlide() ? 'block' : 'none';
    this.trailerInstructionText.textContent = this.isAtLastIntroSlide()
      ? 'Click the button below to start reading the farewell letters'
      : 'Swipe left or right to navigate';
  }

  updateLettersDisplay() {
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
    this.instructionText.textContent = 'Swipe left or right to navigate between letters';
  }

  // Mode transition methods
  transitionToLetters() {
    this.trailerContainer.style.transition = 'opacity 0.8s ease-out';
    this.trailerContainer.style.opacity = '0';

    setTimeout(() => {
      this.mode = 'letters';
      this.currentIndex = 0;

      this.trailerContainer.style.display = 'none';
      this.lettersContainer.style.display = 'block';

      this.themeManager.applyTheme('letter');
      this.trailerContainer.style.opacity = '1';

      this.updateDisplay();
    }, CONFIG.FADE_TRANSITION_DURATION);
  }

  transitionToIntro() {
    this.lettersContainer.style.transition = 'opacity 0.8s ease-out';
    this.lettersContainer.style.opacity = '0';

    setTimeout(() => {
      this.mode = 'intro';
      this.currentIndex = 0;

      this.lettersContainer.style.display = 'none';
      this.trailerContainer.style.display = 'block';

      this.themeManager.applyTheme('trailer');
      this.lettersContainer.style.opacity = '1';

      this.updateDisplay();
    }, CONFIG.FADE_TRANSITION_DURATION);
  }

  // Utility methods
  isAtLastIntroSlide() {
    return this.mode === 'intro' && this.currentIndex === this.introSlides.length - 1;
  }

  // Public API methods
  addLetter(letter) {
    this.letters.push(letter);
    if (this.mode === 'letters') {
      this.updateDisplay();
    }
  }

  loadCustomLetters(letters) {
    this.letters = letters;
    if (this.mode === 'letters') {
      this.currentIndex = 0;
      this.updateDisplay();
    }
  }

  loadCustomIntroSlides(slides) {
    this.introSlides = slides;
    if (this.mode === 'intro') {
      this.currentIndex = 0;
      this.updateDisplay();
    }
  }

  setTheme(themeName) {
    const success = this.themeManager.setTheme(themeName);
    if (success) {
      const mode = this.mode === 'intro' ? 'trailer' : 'letter';
      this.themeManager.applyTheme(mode);
    }
    return success;
  }

  getCurrentTheme() {
    return this.themeManager.getCurrentTheme();
  }

  getAvailableThemes() {
    return this.themeManager.getAvailableThemes();
  }
}