// src/components/atoms/Heading.tsx
import React from "react";

type HeadingProps = {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const headingMap = {
  1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props} />,
  2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
  3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 {...props} />,
  4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h4 {...props} />,
  5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h5 {...props} />,
  6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h6 {...props} />,
};

export default function Heading({ text, level = 1 }: HeadingProps) {
  const Component = headingMap[level];

  return <Component className="text-xl font-semibold text-gray-900">{text}</Component>;
}

