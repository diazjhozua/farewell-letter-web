# Farewell Letter Web App

A responsive web application to showcase farewell letters with swipe navigation functionality.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Swipe Navigation**: Touch/mouse swipe left or right to navigate between letters
- **Button Navigation**: Click previous/next buttons to navigate
- **Keyboard Navigation**: Use arrow keys to navigate (desktop)
- **Progress Tracking**: Visual progress bar and letter counter
- **Smooth Animations**: Beautiful transitions between letters
- **Custom Data**: Easy to customize with your own letters

## Files Structure

- `index.html` - Main HTML structure
- `styles.css` - CSS styling and responsive design
- `script.js` - JavaScript functionality for navigation and swipe detection
- `letters.json` - JSON data file containing the farewell letters
- `README.md` - This documentation file

## How to Use

1. **Open the Application**: Simply open `index.html` in any modern web browser
2. **Navigate Letters**:
   - Swipe left/right on mobile or use mouse drag on desktop
   - Click the navigation buttons (‹ ›)
   - Use left/right arrow keys on desktop
3. **Customize Letters**: Edit the `letters.json` file with your own data

## JSON Data Format

The letters should be in the following format in `letters.json`:

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

### Adding Your Own Letters

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

- Touch event handling for mobile swipe gestures
- Mouse event handling for desktop drag navigation
- Resistance at boundaries (prevents over-swiping)
- Smooth CSS transitions
- Progressive enhancement (works without JavaScript for basic viewing)
- Responsive breakpoints for different screen sizes

## Future Enhancements

- Add letter search/filter functionality
- Include sender photos
- Add audio messages support
- Export letters as PDF
- Share individual letters

Enjoy your farewell letter showcase!