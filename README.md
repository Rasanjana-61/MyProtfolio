# Pramod Rasanjana - React Portfolio Website

A modern, responsive personal portfolio website built with React and Vite.

## 🚀 Features

- **Modern React Architecture**: Component-based structure for better maintainability
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: 
  - Typing animation using Typed.js
  - Scroll reveal animations using ScrollReveal
  - CSS transitions and hover effects
- **Interactive Sections**:
  - Hero section with dynamic typing effect
  - About section with spinning border animation
  - Services showcase
  - Portfolio grid with hover overlays
  - Testimonials carousel using Swiper.js
  - Contact form with validation
- **Sticky Navigation**: Header becomes sticky on scroll with active section highlighting
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll behavior for navigation links

## 📁 Project Structure

```
MyProtfolio/
├── public/
│   ├── home.jpg              # Home section background
│   ├── about.jpg             # About section image
│   ├── portfolio1-6.jpg      # Portfolio project images
│   ├── testimonial1-7.jpg    # Testimonial images
│   └── IMAGES_README.md      # Image requirements guide
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── Home.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Service.jsx       # Services section
│   │   ├── Portfolio.jsx     # Portfolio grid
│   │   ├── Testimonial.jsx   # Testimonials carousel
│   │   ├── Contact.jsx       # Contact section
│   │   └── Footer.jsx        # Footer with scroll-to-top
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML entry point
├── package.json              # Dependencies
└── vite.config.js            # Vite configuration
```

## 🛠️ Technologies Used

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **Typed.js 2.1.0** - Typing animation
- **Swiper 11.0.0** - Testimonials carousel
- **ScrollReveal 4.0.9** - Scroll animations
- **Boxicons** - Icon library
- **Google Fonts** - Poppins & Outfit fonts

## 📦 Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd MyProtfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add images**:
   - Place all required images in the `public` folder
   - See `public/IMAGES_README.md` for the complete list

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in browser**:
   - Navigate to `http://localhost:5173/`

## 🎨 Customization

### Update Personal Information

1. **Name and Title** - Edit `src/components/Home.jsx`:
   ```javascript
   <h1>Hi I'm [Your Name]</h1>
   ```

2. **Services** - Edit the services array in `src/components/Service.jsx`

3. **Portfolio Items** - Edit the portfolioItems array in `src/components/Portfolio.jsx`

4. **Contact Information** - Edit `src/components/Contact.jsx`

5. **Social Media Links** - Update href attributes in Header, Home, and Contact components

### Styling

- Main styles are in `src/index.css`
- CSS variables for colors are defined in `:root`:
  ```css
  --bg-color: #081b29;
  --second-bg-color: #112e43;
  --text-color: #ededed;
  --main-color: #00abf0;
  ```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 700px - 1199px
- **Mobile**: Below 700px
- **Small Mobile**: Below 400px

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🔍 Preview Production Build

```bash
npm run preview
```

## 📝 Key React Conversions

### From Vanilla JS to React:

1. **Menu Toggle**: Converted to React state management
2. **Sticky Header**: Uses `useEffect` with scroll event listener
3. **Active Section**: State-based active link highlighting
4. **Typed.js**: Initialized in `useEffect` with cleanup
5. **Swiper**: Initialized in `useEffect` with proper module imports
6. **ScrollReveal**: Configured in App.jsx `useEffect`

## 🎯 Features Implemented

✅ Sticky navigation with active section detection  
✅ Mobile-responsive hamburger menu  
✅ Typing animation effect  
✅ Smooth scroll animations  
✅ Portfolio hover effects  
✅ Testimonial carousel  
✅ Contact form  
✅ Scroll-to-top button  
✅ Social media links  
✅ Fully responsive design  

## 📄 License

Copyright © 2026 - All Rights Reserved

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email**: pramothrasanjana@gmail.com
- **Location**: Colombo, sri lanka
- **Phone**: +94 70 560 5698

---

**Note**: Remember to add your own images to the `public` folder before deploying!
