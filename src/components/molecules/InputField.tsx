// src/components/molecules/InputField.tsx
import React from 'react';
import Label from '@/components/atoms/Label';
import Input from '@/components/atoms/Input';

type InputFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  placeholder = '',
  type = 'text',
  error,
  onChange,
}) => (
  <div className="space-y-1">
    <Label htmlFor={id} text={label} />
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default InputField;
