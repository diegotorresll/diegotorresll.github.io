/**
 * @component PortfolioSection
 * @description Displays a grid of portfolio projects with an interactive modal view.
 * Implements performance optimizations, accessibility features, and smooth transitions.
 * 
 * Features:
 * - Responsive grid layout
 * - Modal with scroll lock
 * - Keyboard navigation
 * - ARIA attributes
 * - Performance optimizations
 * 
 * @typedef {Object} PortfolioProject
 * @property {string} id - Unique identifier
 * @property {string} title - Project title
 * @property {React.ComponentType} icon - Icon component
 * @property {string} problem - Problem statement
 * @property {Object} impact - Impact information
 * @property {string} impact.headline - Impact headline
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { useState, useCallback, useEffect, memo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CASES_DATA } from '../../data/cases';
import CaseCard from '../ui/CaseCard';
import CaseDetail from '../ui/CaseDetail';
import PropTypes from 'prop-types';

// Modal container component for better organization
const ModalContainer = memo(({ children }) => (
  <div 
    className="fixed inset-0 z-50 will-change-transform"
    style={{ 
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden'
    }}
  >
    <div 
      className="absolute inset-0 overflow-y-auto"
      style={{
        perspective: '1000px',
        transform: 'translateZ(0)',
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  </div>
));

ModalContainer.displayName = 'ModalContainer';
ModalContainer.propTypes = {
  children: PropTypes.node.isRequired
};

// Main component
const PortfolioSection = memo(() => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    const body = document.body;
    
    if (selectedProject) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Lock scroll but preserve position
      body.style.overflow = 'hidden';
      body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Small timeout to ensure smooth transition
      const timer = setTimeout(() => {
        body.style.overflow = '';
        body.style.paddingRight = '';
      }, 10);

      return () => clearTimeout(timer);
    }

    return () => {
      body.style.overflow = '';
      body.style.paddingRight = '';
    };
  }, [selectedProject]);

  // Memoized handlers
  const handleCloseDetail = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape' && selectedProject) {
      handleCloseDetail();
    }
  }, [selectedProject, handleCloseDetail]);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section 
      id="portfolio" 
      className="py-28 md:py-36 overflow-x-hidden relative"
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 
            id="portfolio-title"
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Portafolio de Analítica y ML
          </h2>
          <p className="text-primary-subtle text-lg md:text-xl font-normal">
            Conoce el detalle cómo logré generar valor a través de la ciencia de datos y machine learning
          </p>
        </div>

        {/* Portfolio Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Portfolio projects grid"
        >
          {CASES_DATA.map((project) => (
            <div key={project.id} role="listitem">
              <CaseCard
                caseStudy={project}
                onClick={() => handleSelectProject(project)}
                isSelected={selectedProject?.id === project.id}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <ModalContainer>
              <CaseDetail
                caseStudy={selectedProject}
                onClose={handleCloseDetail}
              />
            </ModalContainer>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

PortfolioSection.displayName = 'PortfolioSection';

export default PortfolioSection;
