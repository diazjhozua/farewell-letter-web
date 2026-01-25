# Farewell Letter Web App

A responsive web application to showcase farewell letters with swipe navigation functionality.

## Features

- **Cinematic Introduction**: Full-screen trailer experience with beautiful animations
- **Letter Format Design**: Letters displayed in authentic letter layout with paper-like styling
- **Consistent Color Theme**: Same cinematic background with traditional letter paper overlay
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

- `index.html` - Main HTML structure
- `styles.css` - CSS styling and responsive design
- `script.js` - JavaScript functionality for navigation and swipe detection
- `intro.json` - JSON data file containing the introductory slides
- `letters.json` - JSON data file containing the farewell letters
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

- Dual-mode architecture (trailer and letters modes)
- Touch event handling for mobile swipe gestures across both modes
- Mouse event handling for desktop drag navigation
- Resistance at boundaries (prevents over-swiping)
- Cinematic CSS transitions with shimmer effects
- Skip/back navigation between modes
- Mode-specific styling and animations
- Responsive breakpoints for different screen sizes
- Glass-morphism UI elements with backdrop blur
- Fade transitions between intro and letters modes

## Future Enhancements

- Add letter search/filter functionality
- Include sender photos
- Add audio messages support
- Export letters as PDF
- Share individual letters

Enjoy your farewell letter showcase!