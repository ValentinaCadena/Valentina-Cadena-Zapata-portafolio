// src/components/molecules/Badge.tsx
import React from 'react';
import Icon from '@/components/atoms/Icon';
import clsx from 'clsx';

type BadgeProps = {
  text: string;
  icon?: string;
  variant?: 'success' | 'warning' | 'error' | 'info';
};

const variantStyles: Record<Required<BadgeProps>['variant'], string> = {
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error:   'bg-red-100 text-red-800',
  info:    'bg-blue-100 text-blue-800',
};

const Badge: React.FC<BadgeProps> = ({ text, icon, variant = 'info' }) => (
  <span
    className={clsx(
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
      variantStyles[variant]
    )}
  >
    {icon && <Icon name={icon} size={12} />}
    {text}
  </span>
);

export default Badge;

