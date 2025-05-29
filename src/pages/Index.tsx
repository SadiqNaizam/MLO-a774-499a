import React from 'react';
import AuthLayout from '../components/layout/AuthLayout';
import LoginForm from '../components/Login/LoginForm';

// The LoginPage component renders the main login user interface.
// It uses AuthLayout for the overall page structure (like centering and background)
// and LoginForm for the actual form elements and interactions.
const LoginPage: React.FC = () => {
  return (
    // AuthLayout provides the full-screen centering and background.
    // By default, AuthLayout's main content area is styled like a card.
    // Since LoginForm is already a self-contained, styled Card component
    // that meets the visual requirements for the login card (dimensions, padding, shadow, rounding),
    // we pass specific utility classes to AuthLayout.
    // These classes neutralize AuthLayout's main content area's card-like styles (padding, background, shadow, border, radius),
    // thus preventing a "card-within-a-card" appearance and ensuring LoginForm is the single visual card.
    <AuthLayout
      className="p-0 bg-transparent shadow-none border-none rounded-none"
    >
      {/* 
        LoginForm is a pre-built component that renders as a Shadcn Card.
        It encapsulates all necessary styling for the login card itself:
        - Width: w-[350px]
        - Background: bg-card (from Shadcn Card default)
        - Padding: Handled internally by CardHeader and CardContent (typically p-6)
        - Shadow: shadow-md
        - Border Radius: rounded-lg (which, per tailwind.config.ts, maps to var(--radius) or 0.375rem, matching PRD's 'rounded-md' value)
        This ensures the login form appears as specified in the project requirements.
      */}
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
