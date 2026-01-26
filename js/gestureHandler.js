import { CONFIG } from './config.js';

export class GestureHandler {
  constructor(app) {
    this.app = app;
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
  }

  bindGestureEvents() {
    // Touch events for trailer swipe
    this.app.trailerSlide.addEventListener(
      'touchstart',
      (e) => this.handleTouchStart(e),
      { passive: true }
    );
    this.app.trailerSlide.addEventListener(
      'touchmove',
      (e) => this.handleTouchMove(e),
      { passive: false }
    );
    this.app.trailerSlide.addEventListener(
      'touchend',
      (e) => this.handleTouchEnd(e),
      { passive: true }
    );

    // Mouse events for trailer desktop swipe
    this.app.trailerSlide.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e)
    );
    this.app.trailerSlide.addEventListener('mousemove', (e) =>
      this.handleMouseMove(e)
    );
    this.app.trailerSlide.addEventListener('mouseup', (e) =>
      this.handleMouseUp(e)
    );
    this.app.trailerSlide.addEventListener('mouseleave', (e) =>
      this.handleMouseUp(e)
    );

    // Touch events for letter swipe
    this.app.lettersSlide.addEventListener(
      'touchstart',
      (e) => this.handleTouchStart(e),
      { passive: true }
    );
    this.app.lettersSlide.addEventListener(
      'touchmove',
      (e) => this.handleTouchMove(e),
      { passive: false }
    );
    this.app.lettersSlide.addEventListener(
      'touchend',
      (e) => this.handleTouchEnd(e),
      { passive: true }
    );

    // Mouse events for letter desktop swipe
    this.app.lettersSlide.addEventListener('mousedown', (e) =>
      this.handleMouseDown(e)
    );
    this.app.lettersSlide.addEventListener('mousemove', (e) =>
      this.handleMouseMove(e)
    );
    this.app.lettersSlide.addEventListener('mouseup', (e) =>
      this.handleMouseUp(e)
    );
    this.app.lettersSlide.addEventListener('mouseleave', (e) =>
      this.handleMouseUp(e)
    );

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.app.goToPrevious();
      } else if (e.key === 'ArrowRight') {
        this.app.goToNext();
      } else if (
        e.key === 'Enter' &&
        this.app.mode === 'intro' &&
        this.app.isAtLastIntroSlide()
      ) {
        this.app.transitionToLetters();
      }
    });
  }

  handleTouchStart(e) {
    if (this.app.isAnimating) return;

    this.startX = e.touches[0].clientX;
    this.currentX = this.startX;
    this.isDragging = true;

    const activeElement = this.getActiveElement();
    activeElement.style.transition = 'none';
  }

  handleTouchMove(e) {
    if (!this.isDragging || this.app.isAnimating) return;

    e.preventDefault();
    this.currentX = e.touches[0].clientX;
    const deltaX = this.currentX - this.startX;

    const resistance = this.getResistance(deltaX);
    const activeElement = this.getActiveElement();
    activeElement.style.transform = `translateX(${deltaX * resistance}px)`;
  }

  handleTouchEnd(e) {
    if (!this.isDragging) return;

    this.isDragging = false;
    const deltaX = this.currentX - this.startX;

    const activeElement = this.getActiveElement();
    activeElement.style.transition = 'transform 0.3s ease-in-out';

    if (Math.abs(deltaX) > CONFIG.SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        this.app.goToPrevious();
      } else {
        this.app.goToNext();
      }
    } else {
      activeElement.style.transform = 'translateX(0)';
    }
  }

  handleMouseDown(e) {
    if (this.app.isAnimating) return;

    this.startX = e.clientX;
    this.currentX = this.startX;
    this.isDragging = true;

    const activeElement = this.getActiveElement();
    activeElement.style.transition = 'none';
    activeElement.style.cursor = 'grabbing';
  }

  handleMouseMove(e) {
    if (!this.isDragging || this.app.isAnimating) return;

    this.currentX = e.clientX;
    const deltaX = this.currentX - this.startX;

    const resistance = this.getResistance(deltaX);
    const activeElement = this.getActiveElement();
    activeElement.style.transform = `translateX(${deltaX * resistance}px)`;
  }

  handleMouseUp(e) {
    if (!this.isDragging) return;

    this.isDragging = false;
    const deltaX = this.currentX - this.startX;

    const activeElement = this.getActiveElement();
    activeElement.style.transition = 'transform 0.3s ease-in-out';
    activeElement.style.cursor = 'grab';

    if (Math.abs(deltaX) > CONFIG.SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        this.app.goToPrevious();
      } else {
        this.app.goToNext();
      }
    } else {
      activeElement.style.transform = 'translateX(0)';
    }
  }

  getActiveElement() {
    return this.app.mode === 'intro'
      ? this.app.trailerSlide
      : this.app.lettersSlide;
  }

  getResistance(deltaX) {
    const totalItems = this.app.mode === 'intro'
      ? this.app.introSlides.length
      : this.app.letters.length;

    const isAtBoundary = (deltaX > 0 && this.app.currentIndex === 0) ||
                        (deltaX < 0 && this.app.currentIndex === totalItems - 1);

    return isAtBoundary ? CONFIG.BOUNDARY_RESISTANCE : 1;
  }
}