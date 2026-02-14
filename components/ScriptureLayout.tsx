import React from 'react';

interface ScriptureLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const ScriptureLayout = ({ children, className = '' }: ScriptureLayoutProps) => {
  return (
    <article className={`reading-column py-8 prose prose-invert prose-p:text-parchment/90 prose-headings:text-gold prose-headings:font-cinzel prose-strong:text-gold ${className}`}>
      {children}
    </article>
  );
};

export default ScriptureLayout;