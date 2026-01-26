# Farewell Letter Web App

A responsive web application to showcase farewell letters with swipe navigation functionality.

## Features

- **Multiple Themes**: 5 beautiful themes (Default, Tech, Business, Girly, Futuristic)
- **Cinematic Introduction**: Full-screen trailer experience with beautiful animations
- **Letter Format Design**: Letters displayed in authentic letter layout with paper-like styling
- **Theme Consistency**: Backgrounds, colors, and UI elements match throughout each theme
- **Skip/Back Navigation**: Skip intro or return to introduction at any time
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Swipe Navigation**: Touch/mouse swipe left or right to navigate between slides/letters
- **Button Navigation**: Click previous/next buttons to navigate
- **Keyboard Navigation**: Use arrow keys to navigate (desktop)
- **Progress Tracking**: Visual progress bar and slide/letter counter
- **Smooth Transitions**: Cinematic fade effects between modes
- **Custom Data**: Easy to customize with your own intro slides and letters
- **Two-Mode Experience**: Trailer mode → Letters mode with seamless transitions

## Files Structure

### Core Files
- `index.html` - Main HTML structure

### JavaScript Modules (js/)
- `js/app.js` - Main application entry point
- `js/farewellViewer.js` - Core application class
- `js/themeManager.js` - Theme management system
- `js/gestureHandler.js` - Touch and mouse gesture handling
- `js/dataLoader.js` - Data loading and management
- `js/config.js` - Configuration constants and default data

### Stylesheets (css/)
- `css/base.css` - Core styling and layout
- `css/themes.css` - Theme-specific styling
- `css/responsive.css` - Responsive design rules

### Data Files
- `intro.json` - JSON data file containing the introductory slides
- `letters.json` - JSON data file containing the farewell letters

### Documentation
- `README.md` - This documentation file

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Experience the Introduction**:
   - Navigate through 4 intro slides using swipe, buttons, or arrow keys
   - Click "Start Reading Letters" button on the final intro slide
   - Or click "Skip Introduction" in the top-right to go directly to letters
3. **Read the Letters**:
   - Full cinematic experience matching the intro theme
   - Swipe left/right on mobile or use mouse drag on desktop
   - Click the navigation buttons (‹ ›)
   - Use left/right arrow keys on desktop
   - Click "← Back to Introduction" in the top-left to return to intro
4. **Customize Content**:
   - Edit `intro.json` with your custom introduction slides
   - Edit `letters.json` with your actual farewell letters

## Theme System

The application includes 5 beautiful themes that can be changed by modifying the code:

### Available Themes

1. **Default** (`'default'`) - Blue/purple elegant cinematic theme
   - Elegant blue gradients with sophisticated styling
   - Perfect for formal farewell presentations

2. **Tech/Programmer** (`'tech'`) - Dark green terminal theme
   - Dark background with green terminal-style text
   - Monospace fonts and hacker aesthetic
   - Great for farewell letters in tech companies

3. **Business** (`'business'`) - Professional navy corporate theme
   - Clean, professional navy and white styling
   - Corporate fonts and formal presentation
   - Ideal for business environments

4. **Girly** (`'girly'`) - Pink/purple feminine theme
   - Soft pink gradients with elegant curves
   - Feminine styling with beautiful typography
   - Perfect for more personal, warm farewells

5. **Futuristic** (`'futuristic'`) - Cyan/neon sci-fi theme
   - Dark background with neon cyan and magenta accents
   - Sci-fi fonts with glowing effects
   - Great for creative/design teams

### Changing Themes

**Method 1: Edit the main app file**
Edit `js/app.js` and uncomment one of the theme lines:

```javascript
// In js/app.js:
document.addEventListener('DOMContentLoaded', () => {
    window.farewellViewer = new FarewellLetterViewer();

    // Uncomment to change theme:
    // window.farewellViewer.setTheme('tech');
    window.farewellViewer.setTheme('business'); // Uncomment this line
    // window.farewellViewer.setTheme('girly');
    // window.farewellViewer.setTheme('futuristic');
});
```

**Method 2: Edit the theme manager**
Edit `js/themeManager.js` and change the default theme:

```javascript
// In js/themeManager.js, around line 7:
this.currentTheme = 'tech'; // Change 'default' to any theme name
```

**Available theme options:**
- `'default'`
- `'tech'`
- `'business'`
- `'girly'`
- `'futuristic'`

**Note:** Theme selection is intentionally code-only and not exposed to end users.

## JSON Data Format

### Intro Slides (`intro.json`)

```json
[
  {
    "icon": "👋",
    "title": "Slide Title",
    "text": "Your intro slide text here..."
  },
  {
    "icon": "🌟",
    "title": "Another Slide",
    "text": "More intro text..."
  }
]
```

### Farewell Letters (`letters.json`)

```json
[
  {
    "from": "Sender Name",
    "message": "Your farewell message here..."
  },
  {
    "from": "Another Sender",
    "message": "Another message..."
  }
]
```

## Customization

### Adding Your Own Content

**Intro Slides:**
1. Edit the `intro.json` file
2. Replace with your custom introduction slides
3. Follow the JSON format: each slide needs an "icon", "title", and "text" field

**Farewell Letters:**
1. Edit the `letters.json` file
2. Replace the sample data with your actual farewell letters
3. Follow the JSON format: each letter needs a "from" and "message" field

### Styling

The design uses a purple gradient theme. You can customize:

- Colors: Edit the CSS variables and gradient values in `styles.css`
- Fonts: Change the font-family in the CSS
- Layout: Modify dimensions and spacing in the CSS
- Animations: Adjust transition timings and effects

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## Technical Features

### Core Architecture
- **Modular ES6 Design**: Clean separation of concerns across multiple modules
- **Theme System**: 5 complete visual themes with unified styling
- **Dual-mode architecture**: Trailer and letters modes with seamless transitions

### Interaction Features
- **Touch event handling**: Mobile swipe gestures across both modes
- **Mouse event handling**: Desktop drag navigation with resistance
- **Resistance at boundaries**: Prevents over-swiping at first/last items
- **Keyboard navigation**: Arrow keys and Enter key support

### Visual Features
- **Cinematic CSS transitions**: Shimmer effects and smooth animations
- **Theme-specific styling**: Each theme has custom colors, fonts, and effects
- **Responsive design**: Breakpoints for different screen sizes
- **Glass-morphism UI**: Backdrop blur effects throughout
- **3D paper effects**: Realistic letter paper with perspective transforms

### Developer Features
- **Modular JavaScript**: Easy to maintain and extend
- **Separated concerns**: Gesture handling, theme management, data loading
- **Configuration-driven**: Easy theme switching and customization
- **Code-only theme switching**: Theme selection hidden from end users

## Modular Architecture

The application uses a clean, modular ES6 architecture:

### JavaScript Modules
- **`app.js`**: Application entry point and initialization
- **`farewellViewer.js`**: Main application logic and coordination
- **`themeManager.js`**: Theme switching and management
- **`gestureHandler.js`**: Touch and mouse interaction handling
- **`dataLoader.js`**: JSON data loading with fallbacks
- **`config.js`**: Configuration constants and default data

### CSS Modules
- **`base.css`**: Core layout and component styling
- **`themes.css`**: All theme-specific visual styles
- **`responsive.css`**: Media queries and responsive behavior

This modular approach provides:
- **Better maintainability**: Easy to find and modify specific functionality
- **Separation of concerns**: Each module has a single responsibility
- **Reusability**: Components can be easily reused or extended
- **Testing**: Individual modules can be tested in isolation

## Extending the Application

### Adding New Themes
1. Add theme definition to `js/config.js`
2. Add theme styles to `css/themes.css`
3. Theme automatically becomes available

### Adding New Features
- **Gesture handling**: Extend `gestureHandler.js`
- **Data sources**: Modify `dataLoader.js`
- **UI components**: Add to `base.css`
- **Theme-specific features**: Add to `themes.css`

### API Methods
The main application provides a public API:

```javascript
// Theme management
farewellViewer.setTheme('tech');
farewellViewer.getCurrentTheme();
farewellViewer.getAvailableThemes();

// Data management
farewellViewer.loadCustomLetters(lettersArray);
farewellViewer.loadCustomIntroSlides(slidesArray);
farewellViewer.addLetter(newLetter);
```

## Future Enhancements

- Add letter search/filter functionality
- Include sender photos
- Add audio messages support
- Export letters as PDF
- Share individual letters

Enjoy your farewell letter showcase!