import React from 'react';
import { CircleHelp } from 'lucide-react';
import Text from '../components/Text';
import { cn } from '../lib/utils';

interface HelpButtonProps {
  children: React.ReactNode;
  className?: string;
}

const HelpButton: React.FC<HelpButtonProps> = ({ children, className }) => {
  return (
    <button
      className={cn('flex flex-row gap-1 text-theme-8 px-3 py-1.5', className)}
    >
      <CircleHelp size={20} strokeWidth={1.75} />
      <Text style="muted" className="text-inherit">
        {children}
      </Text>
    </button>
  );
};

export default HelpButton;
