/**
 * @component CompaniesSection
 * @description Displays a section of company logos with different behaviors for mobile and desktop:
 * - Mobile: Infinite horizontal scroll animation
 * - Desktop: Static single row centered layout
 * 
 * The component uses a double array of companies for mobile to ensure smooth infinite scrolling,
 * while desktop view shows the original array in a single row.
 */
import React from 'react';
import { COMPANIES_DATA } from '../../data/companies';
import CompanyCard from '../ui/CompanyCard';

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
          Experiencia en empresas líderes de Latinoamérica
        </h2>
        <p className="text-lg md:text-xl font-normal text-center mb-12 max-w-3xl mx-auto text-primary-subtle">
          Combino tecnología y finanzas para resolver problemas de negocio con data.
        </p>
        
        <div className="overflow-hidden">
          {/* Mobile scrolling view - Uses doubled array for smooth infinite scroll */}
          <div className="md:hidden">
            <div className="companies-scroll">
              {[...COMPANIES_DATA, ...COMPANIES_DATA].map((company, index) => (
                <div 
                  key={`${company.name}-${index}`} 
                  className="flex-shrink-0 w-[160px]"
                >
                  <CompanyCard company={company} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Desktop single row view - Static centered layout */}
          <div className="hidden md:flex justify-center items-center gap-8">
            {COMPANIES_DATA.map((company) => (
              <div 
                key={company.name} 
                className="flex-shrink-0 w-[180px]"
              >
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;