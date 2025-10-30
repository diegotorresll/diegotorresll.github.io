/**
 * @fileoverview Company partnerships and client data
 * @description Defines the list of companies and organizations that have been clients
 * or partners, including their logos, descriptions, and relevant metrics.
 * 
 * @typedef {Object} Company
 * @property {string} name - Company name
 * @property {string} logo - Path to company logo image
 * @property {string} description - Brief description of partnership/engagement
 * @property {Object} metrics - Key performance metrics
 * @property {string} metrics.value - Numerical value of the metric
 * @property {string} metrics.label - Description of what the metric represents
 * 
 * @type {Company[]}
 */

// Import company logos
import alicorpLogo from '../assets/images/logos/alicorp.png';
import vitaproLogo from '../assets/images/logos/vitapro.png';
import gloriaLogo from '../assets/images/logos/grupogloria.png';
import saviaLogo from '../assets/images/logos/savia.png';
import diacsaLogo from '../assets/images/logos/diacsa.png';

export const companies = [
  {
    name: "Grupo Gloria",
    logo: gloriaLogo,
    metrics: { value: "28%", label: "Revenue Growth" },
    linkedIn: "https://www.linkedin.com/company/grupogloria1"
  },
  {
    name: "Alicorp",
    logo: alicorpLogo,
    metrics: { value: "46%", label: "Efficiency Improvement" },
    linkedIn: "https://www.linkedin.com/company/alicorpoficial"
  },
  {
    name: "Vitapro",
    logo: vitaproLogo,
    metrics: { value: "32%", label: "Cost Reduction" },
    linkedIn: "https://www.linkedin.com/company/vitapro-s.a."
  },
  {
    name: "Savia",
    logo: saviaLogo,
    metrics: { value: "75%", label: "Process Automation" },
    linkedIn: "https://www.linkedin.com/company/savia-peru"
  },
  {
    name: "Diacsa",
    logo: diacsaLogo,
    metrics: { value: "3.2x", label: "ROI" },
    linkedIn: "https://www.linkedin.com/company/diacsa-perú"
  }
];

export const COMPANIES_DATA = companies; // Alias for backward compatibility