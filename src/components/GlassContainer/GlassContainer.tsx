import React from 'react';
import './GlassContainer.scss';

interface GlassContainerProps {
  children: React.ReactNode;
  variant?: 'default' | 'enhanced' | 'card';
  className?: string;
  onClick?: () => void;
}

const GlassContainer: React.FC<GlassContainerProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const containerClass = `
    glass-container 
    glass-container--${variant} 
    ${onClick ? 'glass-container--clickable' : ''}
    ${className}
  `.trim();

  return (
    <div className={containerClass} onClick={onClick}>
      {children}
    </div>
  );
};

export default GlassContainer; 