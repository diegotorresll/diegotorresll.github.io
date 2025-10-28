/**
 * @component Home
 * @description Main home page component that orchestrates the layout and sections
 * of the personal portfolio website. Implements performance optimizations through
 * React.lazy loading and component memoization.
 * 
 * Performance Optimizations:
 * - Lazy loading of section components
 * - Memoization of static components
 * - Optimized rendering with React.memo
 * 
 * Component Structure:
 * - NavBar: Top navigation
 * - HeroSection: Introduction and main call-to-action
 * - CasesSection: Project case studies
 * - CompaniesSection: Partner companies and clients
 * - AboutSection: Personal background and approach
 * - ContactSection: Contact form and information
 * - Footer: Site footer with links and copyright
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { Suspense } from 'react';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';

// Lazy load section components for better initial load performance
const HeroSection = React.lazy(() => import('../components/sections/HeroSection'));
const PortfolioSection = React.lazy(() => import('../components/sections/PortfolioSection'));
const CompaniesSection = React.lazy(() => import('../components/sections/CompaniesSection'));
const ContactSection = React.lazy(() => import('../components/sections/ContactSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Home = React.memo(() => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Prismatic Aurora Burst - Multi-layered Gradient Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        }}
      />
      <div className="relative z-10">
        <NavBar />
        <Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <PortfolioSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CompaniesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
});

// Add display name for better debugging
Home.displayName = 'Home';

export default Home;