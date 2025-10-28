/**
 * @component Button
 * @description A versatile button component that supports both regular links and file downloads.
 * Implements accessibility features, keyboard navigation, and loading states.
 * 
 * @typedef {Object} ButtonProps
 * @property {string} text - Button text content
 * @property {'primary' | 'secondary'} [variant='primary'] - Visual style variant
 * @property {string} [className] - Additional CSS classes
 * @property {string} [link] - URL for regular links
 * @property {string} [href] - URL for downloadable files
 * @property {string} [download] - Filename for download
 * @property {boolean} [isLoading] - Loading state
 * @property {string} [ariaLabel] - Accessible label
 * @property {React.ReactNode} [icon] - Optional icon element
 * @property {() => void} [onClick] - Click handler
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Button = memo(({ 
  text, 
  variant = 'primary', 
  className = '', 
  link,
  href,
  download,
  isLoading = false,
  ariaLabel,
  icon,
  onClick,
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-lg transition-all duration-200 whitespace-nowrap text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-purple disabled:opacity-60 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: 'bg-system-gray hover:bg-cyan-400 text-black shadow-lg hover:shadow-xl active:transform active:scale-95 border border-gray-200 hover:border-cyan-400',
    secondary: 'bg-transparent border border-system-gray hover:border-pale-sage text-gray-300 hover:text-pale-sage active:transform active:scale-95'
  };

  const commonProps = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    'aria-label': ariaLabel || text,
    'aria-disabled': isLoading,
    onClick: !isLoading ? onClick : undefined,
    role: 'button',
  };

  const content = (
    <>
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin mr-2" 
          aria-hidden="true"
        />
      ) : icon ? (
        <span className="mr-2" aria-hidden="true">{icon}</span>
      ) : null}
      <span>{text}</span>
    </>
  );

  // Download link
  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        download={download}
        tabIndex={isLoading ? -1 : 0}
      >
        {content}
      </a>
    );
  }

  // Regular link
  if (link) {
    const isInternalLink = link.startsWith('#') || link.startsWith('/');
    return (
      <a
        {...commonProps}
        href={link}
        target={isInternalLink ? '_self' : '_blank'}
        rel={isInternalLink ? undefined : 'noopener noreferrer'}
        tabIndex={isLoading ? -1 : 0}
      >
        {content}
      </a>
    );
  }

  // Button element for onClick handlers
  return (
    <button
      {...commonProps}
      type="button"
      disabled={isLoading}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  link: PropTypes.string,
  href: PropTypes.string,
  download: PropTypes.string,
  isLoading: PropTypes.bool,
  ariaLabel: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button; 