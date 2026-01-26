import { DEFAULT_INTRO_SLIDES, DEFAULT_LETTERS } from './config.js';

export class DataLoader {
  static async loadIntroSlides() {
    try {
      const response = await fetch('intro.json');
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Could not load intro.json');
      }
    } catch (error) {
      console.log('Using default intro slides as intro.json not found');
      return DEFAULT_INTRO_SLIDES;
    }
  }

  static async loadLetters() {
    try {
      const response = await fetch('letters.json');
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Could not load letters.json');
      }
    } catch (error) {
      console.log('Using sample data as letters.json not found');
      return DEFAULT_LETTERS;
    }
  }

  static async loadAll() {
    const [introSlides, letters] = await Promise.all([
      DataLoader.loadIntroSlides(),
      DataLoader.loadLetters()
    ]);

    return {
      introSlides,
      letters
    };
  }
}