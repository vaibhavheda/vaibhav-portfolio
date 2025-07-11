import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconProp;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const buttonClass = `
    button 
    button--${variant} 
    button--${size} 
    ${disabled ? 'button--disabled' : ''} 
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <FontAwesomeIcon icon={icon} className="button__icon button__icon--left" />
      )}
      <span className="button__text">{children}</span>
      {icon && iconPosition === 'right' && (
        <FontAwesomeIcon icon={icon} className="button__icon button__icon--right" />
      )}
    </button>
  );
};

export default Button; 