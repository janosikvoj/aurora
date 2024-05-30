import { GripVertical } from 'lucide-react';
import Text from './Text';
import { cn } from '@/lib/utils';
import { Swatch as SwatchType } from '@/types/PalettesTypes';
import { formatHex } from 'culori';
import { isLight } from '@/lib/paletteUtils';
import { useContext } from 'react';
import {
  PalettesContext,
  PalettesDispatchContext,
} from '@/contexts/PalettesContext';
import { Palette as PaletteType } from '@/types/PalettesTypes';

interface SwatchProps {
  swatch: SwatchType;
  checked?: boolean;
}

const Swatch: React.FC<SwatchProps> = ({ swatch, checked = false }) => {
  const palettes = useContext(PalettesContext);
  const PalettesDispatch = useContext(PalettesDispatchContext);

  const editingPalette: PaletteType =
    palettes.find((palette) => palette.editing) || palettes[0];

  if (!swatch.deleted) {
    return (
      <div className="bg-theme-3 hover:bg-theme-4 has-[:checked]:bg-theme-5 has-[:checked]:border border-theme-7 rounded-md group overflow-hidden relative h-24">
        <div className="flex flex-row gap-1 absolute inset-0 group-hover:inset-[0.375rem] has-[:checked]:inset-[0.375rem] transition-all">
          <GripVertical
            size={20}
            strokeWidth={1.75}
            className="min-w-5 text-theme-9 hidden group-has-[:checked]:block group-hover:block"
          />
          <label
            htmlFor={'swatch-' + swatch.id}
            className={cn(
              'relative rounded-sm w-full justify-start items-start px-3 py-1.5 overflow-hidden cursor-pointer peer'
            )}
          >
            <input
              type="checkbox"
              id={'swatch-' + swatch.id}
              className="hidden peer"
              checked={checked}
              onChange={() => {
                PalettesDispatch({
                  type: 'swatchSelectionToggled',
                  payload: {
                    paletteID: editingPalette.id,
                    swatchID: swatch.id,
                  },
                });
              }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: formatHex(swatch.color) }}
            />
            <Text
              style="code"
              className={cn(
                'relative z-10',
                isLight(swatch.color) ? 'text-theme-12' : 'text-theme-1'
              )}
            >
              {swatch.name}
            </Text>
          </label>
        </div>
      </div>
    );
  }
};

export default Swatch;
