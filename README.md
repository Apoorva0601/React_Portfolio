# Apoorva's Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: EmailJS integration for direct contact functionality
- **Skills Showcase**: Interactive skill cards with hover animations
- **Project Gallery**: Featured projects with live demo and GitHub links
- **Course Carousel**: Swiper.js powered course showcase
- **Optimized Performance**: Built with Vite for fast development and build times

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Swiper.js
- **Email Service**: EmailJS
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd appu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🔧 Configuration

### EmailJS Setup
1. Sign up for an [EmailJS account](https://www.emailjs.com/)
2. Create a new service and template
3. Update the EmailJS credentials in `src/components/Contact.jsx`:
   ```javascript
   const serviceId = 'YOUR_SERVICE_ID';
   const templateId = 'YOUR_TEMPLATE_ID';
   const userId = 'YOUR_USER_ID';
   ```

### Personal Data
Update the portfolio content in `src/data.js`:
- Personal information
- Skills and technologies
- Project details
- Course certifications
- Social media links

### Images
Replace placeholder images in the `public` folder:
- `profile.jpg` - Your profile photo
- `project1.jpg` to `project6.jpg` - Project screenshots
- `course1.jpg` to `course5.jpg` - Course certificates
- `resume.pdf` - Your resume file

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects gallery
│   ├── Courses.jsx     # Courses carousel
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── data.js             # Portfolio data
├── index.css           # Global styles
└── App.jsx             # Main application component
```

## 🎨 Customization

### Colors
The color palette can be customized in `tailwind.config.js`. The current theme uses:
- Primary: Blue tones (#0ea5e9)
- Gray: Neutral grays for text and backgrounds

### Animations
Animation settings can be modified in each component file. Framer Motion provides:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## ⚡ Performance Features

- Lazy loading for images
- Optimized animations
- Code splitting
- Fast refresh during development
- Minimized bundle size

---

Made with ❤️ by Apoorva
