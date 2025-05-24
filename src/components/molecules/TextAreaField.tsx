// src/components/molecules/TextAreaField.tsx
import React from 'react';
import Label from '@/components/atoms/Label';

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  rows?: number;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  placeholder = '',
  rows = 4,
  error,
  onChange,
}) => (
  <div className="space-y-1">
    <Label htmlFor={id} text={label} />
    <textarea
      id={id}
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

export default TextAreaField;
