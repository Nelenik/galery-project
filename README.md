# Photo Gallery

A production-ready, responsive photo gallery web application with interactive features and smooth animations. Built for commercial use, demonstrating professional frontend development practices.

![Status](https://img.shields.io/badge/Status-Complete-brightgreen)

## ✨ Features

- **Scattered Photo Layout** — Unique gallery design with photos arranged like scattered items on a table, creating a natural and engaging visual experience
- **Responsive Design** — Gallery layout adapts to all screen sizes while maintaining the scattered aesthetic
- **Image Preview Modal** — Click any photo to view in a full-screen modal with zoom functionality
- **Interactive Interactions** — Like images with animated emoji reactions
- **Image Upload** — Users can upload new photos with form validation
- **Mobile-Friendly Navigation** — Smooth burger menu for seamless mobile experience
- **Form Validation** — Built-in validation for image upload using JustValidate plugin
- **Optimized Images** — WebP format support with graceful fallbacks for older browsers
- **Smooth Animations** — Polished transitions and hover effects throughout

## 🚀 Tech Stack

- **HTML5** — Semantic markup
- **CSS3 / SCSS** — Modern styling with variables and mixins
- **Vanilla JavaScript (ES6+)** — Modular architecture with separate components
- **Just-Validate** — Lightweight form validation library
- **WebP Images** — Optimized image delivery

## 📁 Project Structure

```
galery-project/
├── index.html              # Main HTML file
├── css/
│   ├── index.scss          # Main styles
│   ├── modal.scss          # Modal component styles
│   ├── _like_emoji.scss    # Like emoji animation styles
│   └── normalize.css       # CSS reset
├── js/
│   ├── index.js            # Main application entry point
│   ├── utils.js            # Utility functions
│   ├── libs/
│   │   └── just-validate.min.js
│   ├── modal/
│   │   ├── modalconstructor.js
│   │   └── modalbasestyles.css
│   └── parts/              # Modular components
│       ├── modal_init.js
│       ├── image_preview.js
│       ├── burger-menu.js
│       ├── zoom_handlers.js
│       └── LikeEmoji.js
└── img/
    └── photo/              # Gallery images
        └── webp/           # WebP optimized versions
```

## 🎯 Key Components

### Gallery Layout Design
The core concept of this project is a unique scattered photo layout that mimics photos casually placed on a table. This non-traditional approach creates an engaging, organic visual experience while maintaining full responsiveness across devices.

### Modal System
Flexible modal constructor for displaying images and messages with custom styling and animations.

### Image Preview
Dynamic image preview with:
- Click-to-enlarge functionality
- Smooth transitions
- Keyboard navigation support

### Like Emoji System
Interactive emoji reactions with:
- Animated emoji display
- Counter functionality
- Local storage persistence

### Burger Menu
Responsive navigation with:
- Mobile-optimized design
- Smooth open/close animation
- Accessibility features (ARIA labels)

### Form Validation
Client-side validation for image uploads with:
- Real-time error messages
- User-friendly feedback
- Multiple validation rules

## 🛠️ Getting Started

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd galery-project
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required (except bundled libraries)

3. **Development**
   - Edit SCSS files and compile to CSS as needed
   - JavaScript is modular and can be extended with new parts
   - Images are in `img/photo/webp/` directory

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- WebP support with JPEG fallbacks for older browsers

## 🎨 Customization

### Update Gallery Images
Replace images in `img/photo/webp/` directory and update `index.html` references.

### Modify Colors & Typography
Edit SCSS variables in main style files:
- `css/index.scss` — Main theme variables
- `css/_like_emoji.scss` — Emoji styling

### Add New Features
Create new modules in `js/parts/` following the existing pattern, then import and initialize in `js/index.js`.

## 📋 Features Breakdown

| Feature | Status | Description |
|---------|--------|-------------|
| Gallery Grid | ✅ | Responsive photo grid layout |
| Image Modal | ✅ | Full-screen preview with modal |
| Image Zoom | ✅ | Zoom and pan in modal view |
| Like Button | ✅ | Interactive emoji reactions |
| Image Upload | ✅ | Form with validation |
| Mobile Menu | ✅ | Adaptive burger navigation |

## 🔧 Future Enhancements

- [ ] Lazy loading for images
- [ ] Keyboard navigation (arrow keys)
- [ ] Swipe gestures for mobile
- [ ] Image filtering/search
- [ ] Categories/tags support
- [ ] Backend integration for persistence
- [ ] Infinite scroll
- [ ] Social sharing buttons


**Key takeaways:**
- Production-grade code quality and architecture
- Responsive design for real users across devices
- Performance optimization with WebP and lazy loading
- Form validation and error handling
- Modular JavaScript structure for maintainability
- Cross-browser compatibility

