import React from 'react';
import { cn } from '../../lib/utils';
import Label from './Label';

type DividerOrientation = 'horizontal';

const dividerOrientationClasses: Record<DividerOrientation, string> = {
  horizontal: '',
};

interface DividerProps {
  children?: React.ReactNode;
  orientation?: DividerOrientation;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  children,
  orientation = 'horizontal',
}) => {
  const hasChildren = React.Children.count(children) > 0;

  if (hasChildren)
    return (
      <div
        className={cn(
          'flex gap-4 items-center',
          dividerOrientationClasses[orientation]
        )}
      >
        <div className="bg-theme-3 grow h-px"></div>
        <Label>{children}</Label>
        <div className="bg-theme-3 grow h-px"></div>
      </div>
    );
  else
    return (
      <div
        className={cn(
          'flex gap-4 items-center',
          dividerOrientationClasses[orientation]
        )}
      >
        <div className="bg-theme-3 grow h-px"></div>
      </div>
    );
};

export default Divider;
