import React from 'react';

const variants = {
  success: 'bg-emerald-100 text-emerald-700',
  danger:  'bg-red-100 text-red-600',
  warning: 'bg-amber-100 text-amber-700',
  info:    'bg-blue-100 text-blue-700',
  neutral: 'bg-slate-100 text-slate-600',
};

export default function StatusBadge({ label, variant = 'neutral', dot = false }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${
          variant === 'success' ? 'bg-emerald-500' :
          variant === 'danger'  ? 'bg-red-500' :
          variant === 'warning' ? 'bg-amber-500' :
          variant === 'info'    ? 'bg-blue-500' : 'bg-slate-400'
        }`} />
      )}
      {label}
    </span>
  );
}
