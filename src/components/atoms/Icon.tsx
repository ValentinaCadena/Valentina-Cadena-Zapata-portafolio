// src/components/atoms/Icon.tsx
import React from 'react';

type IconProps = {
  name: string; // Nombre del ícono, por ejemplo, 'search', 'user', etc.
  size?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} fill={color} aria-hidden="true">
    <use xlinkHref={`#icon-${name}`} />
  </svg>
);

export default Icon;
