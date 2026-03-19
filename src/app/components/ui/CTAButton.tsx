import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export function CTAButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  fullWidth = false
}: CTAButtonProps) {
  
  const baseStyles = "group relative overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40",
    secondary: "bg-white/80 backdrop-blur-sm text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl shadow-lg",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-lg"
  };
  
  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative flex items-center justify-center gap-2">
        {children}
        {Icon ? (
          <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        ) : (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </motion.button>
  );
}
