'use client';

import React, { useRef, useEffect } from 'react';

interface ScriptureTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  dropCap?: boolean; // if true, apply drop cap styling
}

const ScriptureText = ({ children, className = '', dropCap, ...props }: ScriptureTextProps) => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Automatically detect first paragraph inside a section and add drop cap
    if (!dropCap && pRef.current) {
      // Check if this is the first paragraph inside an article or section
      const parent = pRef.current.parentElement;
      if (parent) {
        const firstP = parent.querySelector('p');
        if (firstP === pRef.current) {
          pRef.current.classList.add('scripture-dropcap');
        }
      }
    }
  }, [dropCap]);

  return (
    <p
      ref={pRef}
      className={`font-garamond text-lg leading-relaxed mb-4 ${dropCap ? 'scripture-dropcap' : ''} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default ScriptureText;