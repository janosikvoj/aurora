import React from 'react';
import { cn } from '../lib/utils';
import Text from './Text';

type DividerOrientation = 'horizontal' | 'vertical';

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
      <div className={cn('flex gap-4 items-center')}>
        <div className="bg-theme-3 grow h-px"></div>
        <Text style="label">{children}</Text>
        <div className="bg-theme-3 grow h-px"></div>
      </div>
    );
  else if (orientation === 'horizontal') {
    return <div className={cn('bg-theme-3 h-px')}></div>;
  } else {
    return <div className={cn('bg-theme-3 w-px')}></div>;
  }
};

export default Divider;
