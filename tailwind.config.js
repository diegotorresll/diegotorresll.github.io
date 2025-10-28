/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        // Standardized Design System Colors
        'primary': '#FFFFFF',           // Pure white for main text
        'primary-muted': '#E2E8F0',     // Light gray for secondary text  
        'primary-subtle': '#94A3B8',    // Muted gray for descriptions
        
        // Accent Colors
        'accent-cyan': '#22D3EE',       // Cyan for highlights
        'accent-purple': '#6366F1',     // Deep purple for CTAs
        'accent-emerald': '#10B981',    // Emerald for success/positive
        
        // Background Colors
        'bg-primary': '#000000',        // Black background
        'bg-secondary': '#0F172A',      // Dark slate for sections
        'bg-accent': '#1E293B',         // Slightly lighter for cards
        
        // Currently Used Legacy Colors
        'off-white': '#FAFAFA',         // Used in CaseCard
        'soft-slate': '#64748B',        // Used in CaseCard
        'steel-blue': '#334155',        // Used in CaseCard
        'pale-sage': '#94A3B8',         // Used in Button
        'deep-purple': '#6366F1',       // Used in NavBar, Button, CaseCard
        'system-gray': '#E2E8F0',       // Used in Button, CaseCard
        'emerald-600': '#059669',       // Used in CaseDetail
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEWIiIiIiIiIiIiIiIiIiIiIiIhh4uDGAAAABnRSTlMAMDAwMDCXjpLYAAAAMElEQVQ4y2NgGAWjYBSMAkwQyMLACAdMDKMKRhWMKhhVMKpgVMGoggEXjIJRMApwAQAqogX5GkdvjwAAAABJRU5ErkJggg==')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

