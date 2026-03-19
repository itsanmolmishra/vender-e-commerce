import React from 'react';

interface LogoProps {
  variant?: 'icon' | 'full' | 'horizontal' | 'stacked';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

const logoSrc = '/src/assets/logo.png';

const sizeStyles = {
  sm: 'h-16',
  md: 'h-20',
  lg: 'h-24',
  xl: 'h-32'
} as const;

const markSizeStyles = {
  sm: 'h-16 w-16',
  md: 'h-20 w-20',
  lg: 'h-24 w-24',
  xl: 'h-32 w-32'
} as const;

export function Logo({
  variant = 'full',
  size = 'md'
}: LogoProps) {
  if (variant === 'icon') {
    return (
      <img
        src={logoSrc}
        alt="CEUKI India Pvt. Ltd."
        className={`${markSizeStyles[size]} object-contain`}
      />
    );
  }

  return (
    <img
      src={logoSrc}
      alt="CEUKI India Pvt. Ltd."
      className={`${sizeStyles[size]} w-auto object-contain`}
    />
  );
}

export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="CEUKI India logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
