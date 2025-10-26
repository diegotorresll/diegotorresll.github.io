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
import { CTA_LINK } from '../../data/navigation';


const HeroSection = memo(() => {
  return (
    <section 
      id="hero" 
      className="pt-20 pb-12 md:pt-32 md:pb-24"
      aria-label="Sección de introducción"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-left">
          <div className="w-full max-w-3xl pl-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight text-left mb-6 mt-4">
              Convierte tu data en valor financiero
            </h1>
            <div 
              className="text-xl md:text-2xl font-semibold text-deep-purple mb-8 text-left max-w-2xl"
              role="doc-subtitle"
            >
              Soy científico de datos, puedo ayudarte a resolver problemas de negocio con data.
            </div>
            <div className="flex justify-left">
              <Button 
                link={CTA_LINK}
                text="Agéndame un espacio" 
                variant="primary"
                className="shadow-xl hover:shadow-2xl transition-shadow duration-300" 
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