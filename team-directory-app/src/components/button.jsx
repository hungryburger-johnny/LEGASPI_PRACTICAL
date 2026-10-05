import React from 'react';

export default function Button({ label, onClick, variant = 'primary', children, className = '' }) {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-all focus:outline-none shadow-sm active:scale-95';
  
  const variants = {
    primary: 'bg-amber-800 hover:bg-amber-900 text-white dark:bg-blue-600 dark:hover:bg-blue-700',
    secondary: 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-blue-200 dark:border-slate-700',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white border border-rose-700 dark:bg-rose-700 dark:hover:bg-rose-800',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {label || children}
    </button>
  );
}