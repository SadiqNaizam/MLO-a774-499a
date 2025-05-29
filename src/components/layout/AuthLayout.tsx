import React from 'react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  /**
   * Optional className to be applied to the main content container (the card).
   */
  className?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
      <main
        className={cn(
          // Styles for the main content area, effectively the 'card' for authentication forms
          // Based on Layout Requirements: mainContent: { layout: "w-[350px] bg-surface rounded-md shadow-md p-6" }
          // 'bg-surface' translates to 'bg-card' based on tailwind.config.ts and index.css variables.
          // 'rounded-md' will use the definition from tailwind.config.ts (calc(var(--radius) - 2px)).
          'w-[350px]',
          'bg-card',
          'text-card-foreground',
          'rounded-md',
          'shadow-md',
          'p-6',
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
