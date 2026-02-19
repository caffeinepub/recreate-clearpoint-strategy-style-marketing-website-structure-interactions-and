import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'sm' | 'default' | 'lg';
}

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
          'bg-primary text-primary-foreground hover:bg-primary/90',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'default' && 'px-6 py-3 text-base',
          size === 'lg' && 'px-8 py-4 text-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
          size === 'sm' && 'px-4 py-2 text-sm',
          size === 'default' && 'px-6 py-3 text-base',
          size === 'lg' && 'px-8 py-4 text-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
SecondaryButton.displayName = 'SecondaryButton';
