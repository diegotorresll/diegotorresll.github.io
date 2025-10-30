/**
 * @component HeroSection
 * @description Main hero section component that displays the introduction with a 3D dashboard visualization.
 * Implements performance optimizations, accessibility features, and smooth animations.
 * 
 * Features:
 * - Optimized image loading with lazy loading
 * - 3D perspective transforms with hardware acceleration
 * - Responsive design with mobile-first approach
 * - Accessible navigation and interactive elements
 * 
 * @author Diego Torres
 * @version 1.2.0
 */

import React, { memo } from 'react';
import Button from '../ui/Button';
import AnimatedHeadline from '../ui/AnimatedHeadline';
import { CTA_LINK, NAV_LINKS } from '../../data/navigation';


const HeroSection = memo(() => {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 md:pt-48 md:pb-32"
      aria-label="Sección de introducción"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-left">
          <div className="w-full max-w-3xl pl-6 mb-12">
            <AnimatedHeadline 
              text="Convierte tu data en beneficio económico"
              highlightText="beneficio económico"
              className="mb-6 mt-4"
              highlightClassName="text-accent-cyan italic font-serif"
            />
            <div 
              className="text-lg md:text-xl font-normal text-primary-subtle mb-8 text-left max-w-2xl"
              role="doc-subtitle"
            >
              Descubre algunos proyectos que lideré que generaron más de $100 millones de ahorros al año.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-left items-start">
              <Button 
                link={NAV_LINKS[0].href}
                text="Descubre mi portafolio" 
                variant="primary"
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 w-fit sm:w-auto" 
                aria-label="Portafolio"
              />
              <Button 
                link={CTA_LINK}
                text="Conversemos" 
                variant="secondary"
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300 w-fit sm:w-auto" 
                aria-label="Agendar una conversación"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;