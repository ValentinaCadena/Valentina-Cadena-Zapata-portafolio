// src/components/atoms/Label.tsx
import React from 'react';

type LabelProps = {
  htmlFor: string;
  text: string;
};

const Label: React.FC<LabelProps> = ({ htmlFor, text }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {text}
  </label>
);

export default Label;
