<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="images/logo.svg" alt="Farewell Letter Web App logo"></a>
</p>

<h3 align="center">Farewell Letter Web App</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](/LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?logo=javascript&logoColor=black)]()
[![ES6](https://img.shields.io/badge/ES6-F7DF1E.svg?logo=javascript&logoColor=black)]()

</div>

---

<p align="center"> A beautiful, responsive web application to showcase farewell letters with cinematic themes and elegant swipe navigation.
    <br>
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Themes](#themes)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Architecture](#architecture)
- [Customization](#customization)
- [API Reference](#api)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The Farewell Letter Web App is a sophisticated, cinematic web application designed to showcase farewell messages in an elegant and engaging way. Perfect for office departures, retirement celebrations, or any farewell occasion.

**Key Features:**

- 🎨 **5 Beautiful Themes** (Default, Tech, Business, Girly, Futuristic)
- 🎬 **Cinematic Introduction** with full-screen trailer experience
- 📝 **Authentic Letter Format** with realistic paper styling
- 📱 **Fully Responsive** design for all devices
- 👆 **Touch & Swipe Navigation** with smooth animations
- ⚡ **Modular ES6 Architecture** for easy maintenance
- 🎯 **Zero Dependencies** - pure HTML, CSS, and JavaScript

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

You only need a modern web browser that supports ES6 modules:

- Chrome 61+ (recommended)
- Firefox 60+
- Safari 10.1+
- Edge 16+

### Installing

1. **Clone or download the repository**

```bash
git clone https://github.com/yourusername/farewell-letter-web.git
cd farewell-letter-web
```

2. **Open the application**

```bash
# Simply open index.html in your browser
open index.html
# or double-click the file
```

3. **For development with local server** (recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

4. **Access the application**

```
http://localhost:8000
```

## 🎈 Usage <a name="usage"></a>

### Basic Usage

1. **Experience the Introduction**
   - Navigate through cinematic intro slides
   - Use swipe gestures, arrow keys, or navigation buttons
   - Click "Start Reading Letters" or "Skip Introduction"

2. **Read Farewell Letters**
   - Swipe through letters with elegant transitions
   - Use "← Back to Introduction" to return anytime
   - Enjoy responsive design on any device

### Customizing Content

**Add Your Letters:**

```json
// Edit letters.json
[
  {
    "from": "John Doe",
    "message": "Your heartfelt farewell message here..."
  }
]
```

**Customize Introduction:**

```json
// Edit intro.json
[
  {
    "icon": "👋",
    "title": "Your Custom Title",
    "text": "Your custom introduction text..."
  }
]
```

## 🎨 Themes <a name="themes"></a>

### Available Themes

| Theme          | Description                   | Best For              |
| -------------- | ----------------------------- | --------------------- |
| **Default**    | Blue/purple elegant cinematic | Formal presentations  |
| **Tech**       | Dark green terminal style     | Tech companies        |
| **Business**   | Professional navy corporate   | Business environments |
| **Girly**      | Pink/purple feminine styling  | Personal farewells    |
| **Futuristic** | Cyan/neon sci-fi aesthetic    | Creative teams        |

### Changing Themes

**Method 1:** Edit `js/app.js`

```javascript
window.farewellViewer.setTheme('tech'); // Uncomment desired theme
```

**Method 2:** Edit `js/themeManager.js`

```javascript
this.currentTheme = 'business'; // Change default theme
```

## 🚀 Deployment <a name = "deployment"></a>

### Static Hosting

Deploy to any static hosting service:

**GitHub Pages:**

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)

**Netlify:**

```bash
# Drag and drop the folder to Netlify
# or connect your GitHub repository
```

**Vercel:**

```bash
npm i -g vercel
vercel --prod
```

### Web Server

For production environments, ensure proper MIME types for ES6 modules:

**Apache (.htaccess):**

```apache
AddType application/javascript .js
```

**Nginx:**

```nginx
location ~* \.js$ {
    add_header Content-Type application/javascript;
}
```

## ⛏️ Built Using <a name = "built_using"></a>

- **HTML5** - Semantic structure and modern web standards
- **CSS3** - Advanced styling with Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript with modules and classes
- **CSS Grid & Flexbox** - Responsive layout systems
- **CSS Custom Properties** - Theme system implementation
- **Touch Events API** - Mobile gesture support
- **Intersection Observer API** - Performance optimizations

## 🏗️ Architecture <a name = "architecture"></a>

### Modular Structure

```
js/
├── app.js              # Entry point and initialization
├── farewellViewer.js   # Main application logic
├── themeManager.js     # Theme switching system
├── gestureHandler.js   # Touch/mouse interactions
├── dataLoader.js       # JSON data management
└── config.js           # Configuration constants

css/
├── base.css           # Core styles and layout
├── themes.css         # Theme-specific styling
└── responsive.css     # Media queries
```

### Key Design Patterns

- **Module Pattern** - Clean separation of concerns
- **Observer Pattern** - Event-driven architecture
- **Strategy Pattern** - Pluggable theme system
- **Factory Pattern** - Dynamic content creation

## 🛠️ Customization <a name = "customization"></a>

### Adding New Themes

1. **Define theme in config:**

```javascript
// js/config.js
export const THEMES = {
  myTheme: {
    name: 'My Theme',
    description: 'Custom theme description',
  },
};
```

2. **Add theme styles:**

```css
/* css/themes.css */
.theme-myTheme .trailer-background {
  background: linear-gradient(135deg, #color1, #color2);
}
```

### Custom Data Sources

```javascript
// Load from API
const customLetters = await fetch('/api/letters').then((r) => r.json());
farewellViewer.loadCustomLetters(customLetters);
```

### Extending Features

```javascript
// Add new gesture
gestureHandler.addCustomGesture('pinch', (event) => {
  // Custom pinch zoom logic
});
```

## 📚 API Reference <a name = "api"></a>

### Core Methods

```javascript
// Theme Management
farewellViewer.setTheme(themeName); // Set active theme
farewellViewer.getCurrentTheme(); // Get current theme
farewellViewer.getAvailableThemes(); // List all themes

// Data Management
farewellViewer.loadCustomLetters(letters); // Load custom letters
farewellViewer.loadCustomIntroSlides(slides); // Load custom intro
farewellViewer.addLetter(letter); // Add single letter

// Navigation
farewellViewer.goToNext(); // Navigate forward
farewellViewer.goToPrevious(); // Navigate backward
farewellViewer.transitionToLetters(); // Switch to letters mode
farewellViewer.transitionToIntro(); // Switch to intro mode
```

### Event Listeners

```javascript
// Listen for theme changes
document.addEventListener('themeChanged', (event) => {
  console.log('New theme:', event.detail.theme);
});

// Listen for navigation
document.addEventListener('slideChanged', (event) => {
  console.log('Current slide:', event.detail.index);
});
```

## 🤝 Contributing <a name = "contributing"></a>

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing modular architecture
- Add tests for new features
- Update documentation
- Ensure responsive design
- Test across different browsers

## ✍️ Authors <a name = "authors"></a>

- **@diazjhozua** - _Initial work_ - [github](https://github.com/diazjhozua)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Inspired by modern web design principles and cinematic experiences
- Thanks to the open-source community for inspiration and best practices
- CSS animations inspired by various UI/UX design patterns
- Theme concepts influenced by popular design systems

---

<p align="center">
  Made with ❤️ for memorable farewells
</p>
