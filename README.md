# Diego Torres - Data Science Portfolio

A modern, professional portfolio website showcasing data science expertise and business impact. Built with React, featuring a stunning prismatic gradient background and optimized for performance.

## 🌟 Features

### 🎨 **Visual Design**
- **Prismatic Aurora Background**: Multi-layered gradient with pink, cyan, purple, and gold overlays
- **Glass Morphism**: Modern glass-effect navigation with backdrop blur
- **Professional Styling**: Clean, sophisticated UI with OKLCH color system
- **Responsive Design**: Seamless experience across all devices

### ⚡ **Performance & UX**
- **Lazy Loading**: Optimized component loading with React.lazy
- **Smooth Animations**: Framer Motion for fluid transitions
- **Accessibility**: ARIA-compliant with keyboard navigation
- **Fast Loading**: Optimized assets and build process

### 📊 **Content Sections**
- **Hero Section**: Compelling introduction with clear value proposition
- **Companies**: Experience with leading Latin American companies
- **Portfolio**: Interactive case studies with detailed project information
- **Contact**: Professional contact form with direct PDF downloads

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and performance optimizations
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and micro-interactions
- **React Icons** - Comprehensive icon library

### **Build & Deployment**
- **Create React App** - Optimized build process
- **GitHub Pages** - Automated deployment with GitHub Actions
- **Node.js 20** - Latest LTS for build environment

### **Design System**
- **OKLCH Colors** - Modern color space for consistent theming
- **Custom Tailwind Config** - Extended color palette and utilities
- **Responsive Breakpoints** - Mobile-first design approach

## 📦 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository:**
```bash
git clone https://github.com/diegotorresll/diegotorresll.github.io.git
cd diegotorresll.github.io
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm start
```

4. **Build for production:**
```bash
npm run build
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Navigation and Footer
│   │   ├── NavBar.js     # Glass-effect navigation
│   │   └── Footer.js     # Transparent footer with social links
│   ├── sections/         # Main page sections
│   │   ├── HeroSection.js        # Introduction and CTA
│   │   ├── CompaniesSection.js   # Company logos and experience
│   │   ├── PortfolioSection.js   # Interactive case studies
│   │   └── ContactSection.js     # Contact form and downloads
│   └── ui/               # Reusable components
│       ├── Button.js     # Professional button component
│       ├── CaseCard.js   # Portfolio project cards
│       ├── CaseDetail.js # Detailed project modals
│       └── CompanyCard.js # Company logo cards
├── data/                 # Static data and configuration
│   ├── navigation.js     # Navigation links and social media
│   ├── companies.js      # Company information
│   └── cases.js          # Portfolio project data
├── assets/               # Static assets
│   └── images/           # Images and graphics
├── pages/
│   └── Portfolio.js      # Main portfolio page
└── styles/               # Global styles and animations
```

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--oklch-primary: oklch(0.922 0 0)     /* Light gray/off-white */
--deep-purple: #6366F1                 /* Accent purple */
--steel-blue: #334155                  /* Professional blue */
--pale-sage: #94A3B8                   /* Subtle sage green */

/* Background Gradients */
--pink-gradient: rgba(255, 20, 147, 0.15)
--cyan-gradient: rgba(0, 255, 255, 0.12)
--purple-gradient: rgba(138, 43, 226, 0.18)
--gold-gradient: rgba(255, 215, 0, 0.08)
```

### **Typography**
- **Headings**: Bold, high contrast for readability
- **Body Text**: Clean, accessible font sizes
- **Responsive**: Scales appropriately across devices

### **Components**
- **Buttons**: Professional styling with hover effects
- **Cards**: Subtle shadows and clean borders
- **Navigation**: Glass morphism with backdrop blur
- **Modals**: Smooth animations and accessibility

## 🚀 Deployment

### **GitHub Pages (Automatic)**
The site is automatically deployed to `https://diegotorresll.github.io/` via GitHub Actions:

1. **Push to main branch** triggers deployment
2. **Build process** runs `npm run build`
3. **Static files** are deployed to GitHub Pages
4. **SPA routing** supported with 404.html fallback

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px - Optimized touch interactions
- **Tablet**: 768px - 1024px - Balanced layout
- **Desktop**: > 1024px - Full feature experience

### **Key Features**
- **Mobile Navigation**: Collapsible menu with smooth animations
- **Touch-Friendly**: Large buttons and touch targets
- **Performance**: Optimized images and lazy loading

## 🔧 Development

### **Available Scripts**
```bash
npm start          # Development server
npm run build      # Production build
npm run test       # Run tests
npm run deploy     # Deploy to GitHub Pages
```

### **Code Quality**
- **ESLint**: Code linting and formatting
- **PropTypes**: Runtime type checking
- **Performance**: React.memo for optimization
- **Accessibility**: ARIA attributes and keyboard navigation

## 📊 Performance

### **Optimizations**
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Compressed and responsive images
- **Bundle Size**: Optimized JavaScript and CSS
- **Caching**: Proper cache headers for static assets

### **Metrics**
- **Lighthouse Score**: 90+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Diego Torres** - Data Scientist & Business Analyst

- **Portfolio**: [https://diegotorresll.github.io/](https://diegotorresll.github.io/)
- **Email**: [Contact Form](https://diegotorresll.github.io/#contact)
- **LinkedIn**: [Professional Profile](https://linkedin.com/in/diegotorresll)

---

*Built with ❤️ using React, Tailwind CSS, and modern web technologies*