/**
 * @component ContactSection
 * @description A responsive contact section with three equal parts that stack vertically on mobile
 * and display horizontally on desktop.
 * 
 * Features:
 * - Optimized image loading with lazy loading and proper sizing
 * - Responsive layout with mobile-first approach
 * - Accessible buttons and interactive elements
 * - Direct PDF downloads from public directory
 * 
 * @author Diego Torres
 * @version 1.2.1
 */

import React, { memo } from 'react';
import profileHero from '../../assets/images/hero/profile-hero.png';
import Button from '../ui/Button';
import { CTA_LINK } from '../../data/navigation';

const ContactSection = memo(() => (
  <section id="contact" className="py-24 sm:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <div className="rounded-[16px] w-full mx-auto bg-gradient-to-br from-[hsla(60,5%,44%,0.65)] to-[hsla(30,5%,25%,0.80)] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 flex items-center justify-center p-16 lg:p-16">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Genera valor con tu data
              </h2>
              <p className="text-lg md:text-xl font-normal text-primary-subtle">
                Agéndame un espacio para conversar cómo lograrlo.
              </p>
            </div>
          </div>

          {/* Profile Image - Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="relative w-[280px] h-[280px]">
              <img
                src={profileHero}
                alt="Diego Torres - Data Science & ML Engineering"
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{
                  transform: 'scale(1.01)',
                  willChange: 'transform'
                }}
              />
            </div>
          </div>

          {/* Buttons and Mobile Image */}
          <div className="flex-1 flex flex-col items-center justify-center pb-16 lg:p-8">
            {/* Mobile Profile Image */}
            <div className="lg:hidden relative w-48 h-48 mb-5">
              <img
                src={profileHero}
                alt="Diego Torres - Data Science & ML Engineering"
                className="w-full h-full object-contain object-bottom"
                loading="lazy"
                decoding="async"
                style={{
                  transform: 'scale(1.2)',
                  willChange: 'transform'
                }}
              />
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
              <Button
                link={CTA_LINK}
                text="Conversemos"
                variant="primary"
                className="w-3/4 mx-auto"
                ariaLabel="Agendar una conversación"
              />
              <Button
                href="/assets/pdf/Resume_Diego_Torres_ESP.pdf"
                text="Descarga mi CV"
                variant="secondary"
                className="w-3/4 mx-auto"
                download="Resume_Diego_Torres_ESP.pdf"
                ariaLabel="Descargar CV en Español"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

ContactSection.displayName = 'ContactSection';

export default ContactSection;