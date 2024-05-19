import React from 'react';
import Text from './Text';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-theme-12 text-theme-1 hover:bg-theme-11 active:bg-theme-10',
  secondary: 'bg-theme-3 text-theme-12 hover:bg-theme-4 active:bg-theme-5',
  ghost: 'text-theme-12 hover:bg-theme-4 active:bg-theme-5',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-md font-medium',
        buttonVariantClasses[variant],
        className
      )}
      {...rest}
    >
      {children &&
        React.Children.map(children, (node) => {
          if (typeof node === 'string') {
            return (
              <Text style="small" className="text-inherit">
                {node}
              </Text>
            );
          } else {
            return node;
          }
        })}
    </button>
  );
};

export default Button;
