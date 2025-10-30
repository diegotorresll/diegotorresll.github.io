import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const overlayVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1]
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.42, 0, 0.58, 1],
      staggerChildren: 0.1
    }
  }
};

const sections = [
  { id: 'problem', label: '01 Problema' },
  { id: 'solution', label: '02 Solución' },
  { id: 'demo', label: '03 Demostración' }
];

const CaseDetail = ({ caseStudy, onClose }) => {
  const [activeSection, setActiveSection] = useState('problem');
  const contentRef = useRef(null);
  
  // Create refs first
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const demoRef = useRef(null);
  
  // Then memoize the object containing them
  const sectionRefs = useMemo(() => ({
    problem: problemRef,
    solution: solutionRef,
    demo: demoRef
  }), []); // Empty dependency array since the refs themselves don't change

  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    const content = contentRef.current;
    if (section && content) {
      // If it's the first section (problem), scroll to top
      if (sectionId === 'problem') {
        content.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const sectionRect = section.getBoundingClientRect();
        const contentRect = content.getBoundingClientRect();
        const offsetTop = sectionRect.top - contentRect.top;
        content.scrollTo({
          top: content.scrollTop + offsetTop - 120,
          behavior: 'smooth'
        });
      }
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      if (!contentElement) return;
      
      // Get all sections and their positions
      const sectionPositions = sections.map(section => {
        const element = sectionRefs[section.id].current;
        if (!element) return { id: section.id, top: Infinity };
        
        const rect = element.getBoundingClientRect();
        const parentRect = contentElement.getBoundingClientRect();
        return {
          id: section.id,
          top: rect.top - parentRect.top
        };
      });

      // Find the section closest to the top
      const activeSection = sectionPositions.reduce((prev, curr) => {
        if (curr.top <= 150 && curr.top > -150) return curr;
        if (Math.abs(curr.top) < Math.abs(prev.top)) return curr;
        return prev;
      });

      setActiveSection(activeSection.id);
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, [sectionRefs]);

  useEffect(() => {
    // Just prevent scrolling while keeping the scrollbar
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Card Container */}
      <motion.div
        layoutId={`case-container-${caseStudy.id}`}
        className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex"
        onClick={e => e.stopPropagation()}
        style={{ 
          zIndex: 10000,
          height: '85vh'
        }}
      >
        {/* Navigation Sidebar - Desktop Only */}
        <div className="hidden md:block w-56 border-r border-gray-100 bg-white">
          <div className="py-8 px-6">
            <div className="radio-container">
              <style>
                {`
                  .radio-container {
                    --main-color: #2563eb;
                    --main-color-opacity: #2563eb1c;
                    --total-radio: 3;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    padding-left: 1rem;
                    gap: 1.25rem;
                  }

                  .radio-container input {
                    cursor: pointer;
                    appearance: none;
                    height: 0;
                    width: 0;
                    position: absolute;
                  }

                  .radio-container .glider-container {
                    position: absolute;
                    left: 0;
                    top: 0.75rem;
                    bottom: 0.75rem;
                    width: 2px;
                    background: #e2e8f0;
                  }

                  .radio-container .glider-container .glider {
                    position: absolute;
                    height: 2.5rem;
                    width: 2px;
                    background: var(--main-color);
                    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
                  }

                  .radio-container .glider-container .glider::before {
                    content: "";
                    position: absolute;
                    height: 100%;
                    width: 8px;
                    left: -3px;
                    background: var(--main-color);
                    filter: blur(4px);
                    opacity: 0.4;
                    border-radius: 4px;
                  }

                  .radio-container label {
                    cursor: pointer;
                    padding: 0.75rem 1rem;
                    position: relative;
                    color: #64748b;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    min-height: 2.5rem;
                  }

                  .radio-container input:checked + label {
                    color: var(--main-color);
                  }

                  .radio-container input:checked + label .subheader {
                    color: #60a5fa;
                  }

                  .radio-container label .subheader {
                    font-size: 0.75rem;
                    margin-top: 0.25rem;
                    color: #94a3b8;
                    transition: all 0.3s ease-in-out;
                  }

                  .radio-container input:nth-of-type(1):checked ~ .glider-container .glider {
                    transform: translateY(0);
                  }

                  .radio-container input:nth-of-type(2):checked ~ .glider-container .glider {
                    transform: translateY(7rem);
                  }

                  .radio-container input:nth-of-type(3):checked ~ .glider-container .glider {
                    transform: translateY(13rem);
                  }
                `}
              </style>

              {sections.map((section, index) => (
                <React.Fragment key={section.id}>
                  <input
                    type="radio"
                    id={`radio-${section.id}`}
                    name="section"
                    checked={activeSection === section.id}
                    onChange={() => scrollToSection(section.id)}
                  />
                  <label htmlFor={`radio-${section.id}`}>
                    <div className="text-sm font-medium">{section.label}</div>
                    <div className="subheader">
                      {section.id === 'problem' && 'Comprendiendo el desafío'}
                      {section.id === 'solution' && 'Implementación estratégica'}
                      {section.id === 'demo' && 'Resultados e impacto'}
                    </div>
                  </label>
                </React.Fragment>
              ))}

              <div className="glider-container">
                <div className="glider" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Content wrapper with mask for scroll fade effect */}
          <div 
            ref={contentRef} 
            className="relative h-full overflow-y-auto custom-scrollbar" 
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#E2E8F0 transparent',
              '--scrollbar-width': '6px',
              '--scrollbar-track-color': 'transparent',
              '--scrollbar-thumb-color': '#E2E8F0',
              '--scrollbar-thumb-hover-color': '#CBD5E0',
              '--scrollbar-border-radius': '100vh',
            }}
          >
            <style>
              {`
                .custom-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-gutter: stable;
                  -ms-overflow-style: none;
                }
                .custom-scrollbar::-webkit-scrollbar {
                  width: var(--scrollbar-width);
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: var(--scrollbar-track-color);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background-color: var(--scrollbar-thumb-color);
                  border-radius: var(--scrollbar-border-radius);
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background-color: var(--scrollbar-thumb-hover-color);
                }
                .custom-scrollbar::-webkit-scrollbar-button {
                  width: 0;
                  height: 0;
                  display: none;
                }
              `}
            </style>

            {/* Top fade effect */}
            <div className="sticky top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

            {/* Main content */}
            <motion.div 
              layoutId={`content-container-${caseStudy.id}`}
              className="relative px-8 sm:px-10 lg:px-14"
            >
              {/* Header Section */}
              <div className="relative min-h-[120px] mb-8 pt-0">
                {/* Icon and Title Container */}
                <div className="flex flex-col items-center space-y-2">
                  {/* Large background icon */}
                  <motion.div
                    layoutId={`icon-container-${caseStudy.id}`}
                    className="flex items-center justify-center mb-4 md:mb-8"
                    style={{
                      transform: 'scale(1.5)',
                    }}
                  >
                    <caseStudy.icon className="w-8 h-8 md:w-20 md:h-20 text-gray-900" />
                  </motion.div>

                  {/* Title */}
                  <motion.div 
                    layoutId={`title-container-${caseStudy.id}`}
                    className="flex flex-col items-center justify-center"
                  >
                    <motion.h2
                      layoutId={`title-${caseStudy.id}`}
                      className="text-2xl md:text-4xl font-semibold text-gray-900 text-left md:text-center max-w-2xl"
                    >
                      {caseStudy.title}
                    </motion.h2>
                  </motion.div>
                </div>
              </div>

              {/* Content sections */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6 md:space-y-24 pb-12"
              >
                {/* Problem Statement Section */}
                <div ref={sectionRefs.problem} className="space-y-6 md:space-y-8">
                  <div className="prose prose-sm md:prose-lg max-w-none text-gray-600">
                    <p className="mb-4">
                      {caseStudy.challenge}
                    </p>
                    <ul className="list-none space-y-2">
                      {caseStudy.keyChallenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-400 xs mt-2 mr-3 flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Solution Approach Section */}
                <div ref={sectionRefs.solution} className="space-y-6 md:space-y-8">
                  <div className="prose prose-sm md:prose-lg max-w-none text-gray-600">
                    <p className="mb-4">{caseStudy.solutionDescription}</p>
                    
                    <ul className="list-none space-y-2">
                      {caseStudy.solutionFramework.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-gray-400 xs mt-2 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="text-lg md:text-xl text-gray-900 mt-8 mb-4">Métricas de Impacto</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 not-prose mt-8">
                      {caseStudy.impact.metrics.map((metric, index) => (
                        <div key={index} className="p-4 sm:p-6 bg-white rounded-xl text-center shadow-sm">
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                          <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Section */}
                <div ref={sectionRefs.demo} className="space-y-6 md:space-y-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Demostración de Solución</h3>
                  <div className="prose prose-sm md:prose-lg max-w-none text-gray-600">
                    <p className="mb-6">{caseStudy.demo.description}</p>
                    <div className="bg-white rounded-xl p-2 sm:p-6 lg:p-8 shadow-sm not-prose">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={caseStudy.demo.image} 
                          alt={caseStudy.demo.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center hidden">
                          <p className="text-gray-500">Imagen de demostración no disponible</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom fade effect */}
            <div className="sticky bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

            {/* Extra padding div for last section */}
            <div className="h-[20vh]" aria-hidden="true" />
          </div>

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors z-20"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CaseDetail; 