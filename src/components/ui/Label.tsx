import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <span className="font-semibold text-theme-12 uppercase text-xs tracking-wider">
      {children}
    </span>
  );
};

export default Label;
