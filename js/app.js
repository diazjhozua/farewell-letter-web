import { FarewellLetterViewer } from './farewellViewer.js';

/*
 * THEME CONFIGURATION
 *
 * To change the theme, modify the theme in the FarewellLetterViewer after initialization:
 * - 'default': Blue/purple elegant cinematic theme
 * - 'tech': Dark green terminal/programmer theme
 * - 'business': Professional navy/corporate theme
 * - 'girly': Pink/purple feminine theme
 * - 'futuristic': Cyan/neon sci-fi theme
 *
 * Note: Theme selection is code-only, not exposed to users.
 */

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.farewellViewer = new FarewellLetterViewer();

    // Uncomment to change theme programmatically:
    // window.farewellViewer.setTheme('tech');
    // window.farewellViewer.setTheme('business');
    // window.farewellViewer.setTheme('girly');
    // window.farewellViewer.setTheme('futuristic');
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FarewellLetterViewer };
}