import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  variant?: 'default' | 'muted' | 'gradient';
  className?: string;
}

export default function Section({ children, variant = 'default', className }: SectionProps) {
  return (
    <section
      className={cn(
        'relative',
        variant === 'muted' && 'bg-muted',
        variant === 'gradient' && 'bg-gradient-to-br from-background via-muted/30 to-background',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
