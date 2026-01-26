import { THEMES } from './config.js';

export class ThemeManager {
  constructor() {
    // Theme Configuration - Change this to switch themes
    // Options: 'default', 'tech', 'business', 'girly', 'futuristic'
    this.currentTheme = 'default';
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  setTheme(themeName) {
    if (THEMES[themeName]) {
      this.currentTheme = themeName;
      return true;
    }
    console.warn(`Theme '${themeName}' not found. Available themes:`, Object.keys(THEMES));
    return false;
  }

  applyTheme(mode) {
    const bodyClass = `${mode}-mode theme-${this.currentTheme}`;
    document.body.className = bodyClass;
  }

  getThemeClass() {
    return `theme-${this.currentTheme}`;
  }

  getAvailableThemes() {
    return Object.keys(THEMES).map(key => ({
      key,
      ...THEMES[key]
    }));
  }
}