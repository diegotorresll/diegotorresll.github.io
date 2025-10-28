/**
 * @component AnimatedHeadline
 * @description Custom animated headline component with text highlighting effect
 * Similar to shadcn headline-06 with "beneficio económico" highlighting
 * 
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeadline = ({ 
  text, 
  highlightText = "beneficio económico", 
  className = "",
  highlightClassName = "bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Split text by highlight text
  const parts = text.split(new RegExp(`(${highlightText})`, 'gi'));

  return (
    <motion.h1
      className={`text-4xl md:text-5xl font-bold text-white leading-tight text-left ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {parts.map((part, index) => {
        const isHighlight = part.toLowerCase() === highlightText.toLowerCase();
        
        if (isHighlight) {
          return (
            <motion.span
              key={index}
              className={highlightClassName}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isVisible ? 1 : 0, 
                scale: isVisible ? 1 : 0.8 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              {part}
            </motion.span>
          );
        }
        
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2 + (index * 0.1)
            }}
          >
            {part}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimatedHeadline;
