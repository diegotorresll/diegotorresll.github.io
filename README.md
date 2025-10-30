# Diego Torres - Data Science & ML Portfolio

A modern, professional portfolio website showcasing data science expertise and machine learning solutions that have generated over $100 million in annual savings. Built with React, featuring a stunning prismatic gradient background and optimized for performance.

## 🌟 Features

### 🎨 **Visual Design**
- **Glass Morphism**: Modern glass-effect navigation with backdrop blur
- **Professional Styling**: Clean, sophisticated UI with Shadcn UI
- **Responsive Design**: Seamless experience across all devices

### ⚡ **Performance & UX**
- **Lazy Loading**: Optimized component loading with React.lazy
- **Smooth Animations**: Framer Motion for fluid transitions
- **Accessibility**: ARIA-compliant with keyboard navigation
- **Fast Loading**: Optimized assets and build process

### 📊 **Content Sections**
- **Hero Section**: Compelling introduction highlighting $100M+ in generated savings
- **Portfolio**: Interactive case studies showcasing ML solutions for major corporations
- **Companies**: Experience with leading Latin American companies (Alicorp, Grupo Gloria, Vitapro, Savia, Diacsa)
- **Contact**: Professional contact section with direct CV download and calendar booking

## 🚀 Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and performance optimizations
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and micro-interactions
- **React Icons** - Comprehensive icon library
- **Radix UI** - Accessible component primitives
- **Tabler Icons** - Additional icon library for enhanced UI

### **Build & Deployment**
- **Create React App** - Optimized build process
- **GitHub Pages** - Automated deployment with gh-pages package
- **Node.js 18+** - LTS for build environment
- **PostCSS** - CSS processing and optimization

### **Design System**
- **Custom Color Palette** - Professional color scheme with accent colors
- **Custom Tailwind Config** - Extended color palette and utilities
- **Responsive Breakpoints** - Mobile-first design approach
- **Glass Morphism** - Modern UI effects with backdrop blur

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
│   │   ├── NavBar.js     # Glass-effect navigation with mobile menu
│   │   └── Footer.js     # Transparent footer with social links
│   ├── sections/         # Main page sections
│   │   ├── HeroSection.js        # Introduction and CTA
│   │   ├── PortfolioSection.js   # Interactive case studies with modals
│   │   ├── CompaniesSection.js   # Company logos with infinite scroll
│   │   └── ContactSection.js     # Contact section with CV download
│   └── ui/               # Reusable components
│       ├── Button.js     # Professional button component
│       ├── CaseCard.js   # Portfolio project cards
│       ├── CaseDetail.js # Detailed project modals
│       ├── CompanyCard.js # Company logo cards
│       ├── AnimatedHeadline.js # Animated text component
│       └── BentoGrid.js  # Grid layout component
├── data/                 # Static data and configuration
│   ├── navigation.js     # Navigation links and social media
│   ├── companies.js      # Company information and metrics
│   └── cases.js          # Portfolio project data with detailed metrics
├── assets/               # Static assets
│   └── images/           # Images and graphics
├── pages/
│   └── Home.js           # Main home page component
├── styles/               # Global styles and animations
│   └── animations.css    # Custom CSS animations
└── lib/                  # Utility functions
    └── utils.ts          # TypeScript utility functions
```

## 💼 Portfolio Content

### **Case Studies**
The portfolio showcases three major data science and machine learning projects:

1. **Alicorp ML Optimization** - 46% efficiency improvement through machine learning
2. **Grupo Gloria Analytics** - 28% revenue growth through predictive analytics  
3. **Vitapro Process Automation** - 75% process automation with AI solutions

### **Client Companies**
- **Alicorp** - Food industry leader with ML-driven operational excellence
- **Grupo Gloria** - Diversified conglomerate with enterprise BI strategy
- **Vitapro** - Agricultural company with supply chain optimization
- **Savia** - Digital transformation and process automation
- **Diacsa** - Business intelligence and analytics solutions

### **Key Metrics**
- **$100M+** in annual savings generated across projects
- **46%** efficiency improvement through ML optimization
- **28%** revenue growth through data-driven decisions
- **75%** process automation achieved
- **3.2x** ROI on business intelligence implementations

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--primary: #FFFFFF                     /* Pure white for main text */
--primary-muted: #E2E8F0              /* Light gray for secondary text */
--primary-subtle: #94A3B8             /* Muted gray for descriptions */

/* Accent Colors */
--accent-cyan: #22D3EE                /* Cyan for highlights */
--accent-purple: #6366F1              /* Deep purple for CTAs */
--accent-emerald: #10B981             /* Emerald for success/positive */

/* Background Colors */
--bg-primary: #000000                 /* Black background */
--bg-secondary: #0F172A               /* Dark slate for sections */
--bg-accent: #1E293B                  /* Slightly lighter for cards */

/* Prismatic Gradient Background */
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
- **Buttons**: Professional styling with hover effects and multiple variants
- **Cards**: Subtle shadows and clean borders with interactive states
- **Navigation**: Glass morphism with backdrop blur and mobile BentoGrid menu
- **Modals**: Smooth animations with scroll lock and accessibility
- **Animated Headlines**: Dynamic text with highlight effects
- **Company Logos**: Infinite scroll animation on mobile, static on desktop

## 🚀 Deployment

### **GitHub Pages (Manual)**
The site is deployed to `https://ditola.github.io/` using the gh-pages package:

1. **Build process** runs `npm run build`
3. **Static files** are pushed to gh-pages branch
4. **GitHub Pages** serves from the gh-pages branch

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
- **Mobile Navigation**: BentoGrid-style collapsible menu with smooth animations
- **Touch-Friendly**: Large buttons and touch targets with proper spacing
- **Performance**: Optimized images, lazy loading, and React.memo optimization
- **Infinite Scroll**: Company logos scroll infinitely on mobile devices
- **Scroll Lock**: Modal interactions prevent background scrolling

## 🔧 Development

### **Available Scripts**
```bash
npm start          # Development server
npm run build      # Production build
npm run test       # Run tests
npm run deploy     # Deploy to GitHub Pages
```

### **Code Quality**
- **ESLint**: Code linting and formatting with React app configuration
- **PropTypes**: Runtime type checking for component props
- **Performance**: React.memo, useCallback, and useMemo for optimization
- **Accessibility**: ARIA attributes, keyboard navigation, and focus management
- **Error Boundaries**: Graceful error handling with user-friendly fallbacks

## 📊 Performance

### **Optimizations**
- **Code Splitting**: Lazy loading of section components with Suspense
- **Image Optimization**: Compressed and responsive images with lazy loading
- **Bundle Size**: Optimized JavaScript and CSS with tree shaking
- **Caching**: Proper cache headers for static assets
- **Memoization**: React.memo, useCallback, and useMemo for expensive operations
- **Scroll Performance**: Hardware-accelerated animations and transforms

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

**Diego Torres** - Data Scientist & ML Engineer

- **Portfolio**: [https://ditola.github.io/](https://ditola.github.io/)
- **Calendar**: [Schedule a Meeting](https://tidycal.com/diegotorresll/30-min)
- **LinkedIn**: [Professional Profile](https://linkedin.com/in/diegotorresll)
- **Email**: [diegotorresll@outlook.com](mailto:diegotorresll@outlook.com)

---

*Built with ❤️ using React, Tailwind CSS, and modern web technologies*

**Last updated:** October 29, 2025