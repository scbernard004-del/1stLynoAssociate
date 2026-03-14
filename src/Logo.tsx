import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark' }) => {
  // strict requirement: use uploaded image, no generated graphics.
  // variant prop is kept for interface compatibility but image is invariant to preserve brand colors.
  
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Lyno Associate" 
        className="h-12 w-auto object-contain"
        onError={(e) => {
          // If the uploaded logo is unavailable, leave the space empty as per instructions
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
};

export default Logo;