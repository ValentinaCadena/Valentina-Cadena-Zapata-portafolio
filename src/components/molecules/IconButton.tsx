// src/components/molecules/IconButton.tsx
import React from 'react';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/iconText';

type IconButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({ icon, label, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
  <span className="flex items-center gap-2">
    <Icon name={icon} size={16} />
    <span>{label}</span>
  </span>
</Button>
);

export default IconButton;
