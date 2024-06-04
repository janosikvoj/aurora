import { PalettesDispatchContext } from '@/contexts/PalettesContext';
import { isLight } from '@/lib/paletteUtils';
import { cn } from '@/lib/utils';
import { Color, formatHex } from 'culori';
import { Plus, Clipboard } from 'lucide-react';
import React, { useContext, useState } from 'react';

interface ColorOutputProps {
  color: Color | undefined;
  className?: string;
  rotated?: boolean;
}

const ColorOutput: React.FC<ColorOutputProps> = ({
  color,
  className,
  rotated = false,
}) => {
  const palettesDispatch = useContext(PalettesDispatchContext);

  const [state, setState] = useState('default');

  const defaultColor: Color = { mode: 'rgb', r: 1, g: 0, b: 0 };
  const outputColor: Color = color || defaultColor;

  function handleClick() {
    setState('clicked');
    palettesDispatch({
      type: 'swatchAdded',
      payload: { newColor: formatHex(outputColor) },
    });
  }
  async function handleDoubleClick() {
    setState('default');
    try {
      await navigator.clipboard.writeText(formatHex(outputColor));
      alert('Color copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <div
      className={cn(
        'min-h-8 min-w-8 size-8 bg-theme-3 hover:bg-theme-4 active:bg-theme-5 rounded-md group/container overflow-hidden relative',
        rotated && 'rotate-45',
        isLight(color) && 'border-2 border-theme-6',
        className
      )}
    >
      <div className="flex absolute inset-0 group-hover/container:inset-[0.25rem] transition-all">
        <button
          onClick={() => {
            state === 'default' ? handleClick() : handleDoubleClick();
          }}
          onMouseLeave={() => {
            setState('default');
          }}
          className={cn(
            'group/color relative size-full rounded-sm flex justify-center items-center overflow-hidden',
            isLight(outputColor) ? 'text-theme-10' : 'text-theme-3'
          )}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: formatHex(outputColor) }}
          />
          {state === 'default' ? (
            <Plus
              size={20}
              strokeWidth={1.75}
              className={cn(
                'min-w-6 z-10 opacity-0 group-hover/color:opacity-100 transition-opacity',
                rotated && '-rotate-45'
              )}
            />
          ) : (
            <Clipboard
              size={20}
              strokeWidth={1.75}
              className={cn('min-w-6 z-10', rotated && '-rotate-45')}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default ColorOutput;
