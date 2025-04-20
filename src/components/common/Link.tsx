import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-gray-800 hover:text-teal-600 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};