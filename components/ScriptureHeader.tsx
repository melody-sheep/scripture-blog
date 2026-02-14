import React from 'react';

interface ScriptureHeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const ScriptureHeader = ({ level = 1, children, className = '', ...props }: ScriptureHeaderProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseClasses = 'font-cinzel text-gold scroll-m-20';
  const sizeClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl mt-8 mb-4',
    2: 'text-3xl md:text-4xl mt-6 mb-3',
    3: 'text-2xl md:text-3xl mt-4 mb-2',
    4: 'text-xl md:text-2xl mt-3 mb-1',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  return (
    <HeadingTag className={`${baseClasses} ${sizeClasses[level]} ${className}`} {...props}>
      {children}
    </HeadingTag>
  );
};

export default ScriptureHeader;