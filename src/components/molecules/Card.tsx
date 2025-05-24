// src/components/molecules/Card.tsx
import React from 'react';
import Heading from '@/components/atoms/Heading';

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="rounded-lg border border-gray-200 shadow-sm p-4 bg-white">
    <Heading text={title} level={3} />
    <div className="mt-2">{children}</div>
  </div>
);

export default Card;
