import { ButtonHTMLAttributes, forwardRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
  accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
  outline: 'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'right',
      fullWidth = false,
      className = '',
      as: Component = 'button',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const widthClass = fullWidth ? 'w-full' : '';
    const iconSpacing = children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : '';
    
    const iconElement = icon && (
      <span className={`inline-flex items-center ${iconSpacing}`}>
        {icon}
      </span>
    );

    return (
      <Component
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthClass} ${className}`}
        {...props}
      >
        {iconPosition === 'left' && iconElement}
        {children}
        {iconPosition === 'right' && (icon || <FiArrowRight className="ml-2" />)}
      </Component>
    );
  }
);

Button.displayName = 'Button';

export default Button;
