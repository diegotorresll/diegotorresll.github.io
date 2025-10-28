import React from 'react';

const CompanyCard = ({ company }) => (
  <a 
    href={company.linkedIn}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center h-16 md:h-24 transition-all group"
  >
    <div className="flex items-center justify-center">
      <img 
        src={company.logo}
        alt={`${company.name} logo`} 
        className="max-w-[100px] md:max-w-[120px] h-[36px] md:h-[48px] object-contain invert brightness-0 contrast-40 opacity-40 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
  </a>
);

export default CompanyCard;