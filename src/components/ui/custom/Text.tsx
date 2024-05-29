import React from 'react';
import { cn } from '../../../lib/utils';

type TextStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'code'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted'
  | 'label';

interface TextProps {
  style: TextStyle;
  elementType?: React.ElementType;
  children?: React.ReactNode;
  className?: string;
}

const TextStyles: Record<
  TextStyle,
  { classes: string; defaultElement: React.ElementType | null | undefined }
> = {
  h1: {
    classes: 'font-sans text-5xl font-semibold tracking-tight text-theme-12',
    defaultElement: 'h1',
  },
  h2: {
    classes: 'font-sans text-3xl font-bold tracking-tight text-theme-12',
    defaultElement: 'h2',
  },
  h3: {
    classes: 'font-sans text-2xl font-bold tracking-tight text-theme-12',
    defaultElement: 'h3',
  },
  h4: {
    classes: 'font-sans text-xl font-semibold tracking-tight text-theme-12',
    defaultElement: 'h4',
  },
  p: {
    classes: 'font-sans text-base font-normal tracking-normal text-theme-12',
    defaultElement: 'p',
  },
  code: {
    classes: 'font-mono text-sm font-medium tracking-normal text-theme-11',
    defaultElement: 'code',
  },
  lead: {
    classes: 'font-sans text-xl font-normal tracking-normal text-theme-12',
    defaultElement: 'span',
  },
  large: {
    classes: 'font-sans text-lg font-medium tracking-normal text-theme-12',
    defaultElement: 'span',
  },
  small: {
    classes: 'font-sans text-sm font-medium tracking-normal text-theme-12',
    defaultElement: 'span',
  },
  muted: {
    classes: 'font-sans text-sm font-normal tracking-normal text-theme-9',
    defaultElement: 'small',
  },
  label: {
    classes:
      'font-sans text-xs font-semibold tracking-wider uppercase text-theme-12',
    defaultElement: 'span',
  },
};

const Text: React.FC<TextProps> = ({
  elementType,
  style,
  className,
  children,
}) => {
  // Set the element type that renders
  let renderedElement: React.ElementType = 'div';
  if (elementType) {
    renderedElement = elementType;
  } else if (TextStyles[style].defaultElement) {
    renderedElement = TextStyles[style].defaultElement as React.ElementType;
  }
  const Element = renderedElement;

  return (
    <Element className={cn(TextStyles[style].classes, className)}>
      {children}
    </Element>
  );
};

export default Text;
