import PaletteSettings from './PaletteSettings';
import Button from './Button';
import { Plus, Trash } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  PalettesContext,
  PalettesDispatchContext,
} from '@/contexts/PalettesContext';
import { useContext } from 'react';
import SwatchesContainer from './SwatchesContainer';
import { Palette as PaletteType } from '@/types/PalettesTypes';

const Workspace = () => {
  const palettesDispatch = useContext(PalettesDispatchContext);
  const palettes = useContext(PalettesContext);

  const editingPalette: PaletteType =
    palettes.find((palette) => palette.editing) || palettes[0];

  return (
    <div>
      <PaletteSettings editingPalette={editingPalette} />

      <div
        className={cn(
          'absolute inset-0 bottom-16 top-8 my-4 min-h-1',
          'rounded-md text-left overflow-y-auto scroll-smooth no-scrollbar'
        )}
      >
        <SwatchesContainer />
      </div>

      <div className="absolute bottom-0 w-full flex flex-row gap-2 h-16">
        <Button
          variant="secondary"
          className="h-full grow justify-center"
          onClick={() => {
            palettesDispatch({
              type: 'swatchDeleted',
              payload: {
                paletteID: editingPalette.id,
              },
            });
          }}
        >
          <Trash size={20} strokeWidth={1.75} />
        </Button>
        <Button
          variant="secondary"
          className="h-full grow justify-center"
          onClick={() => {
            palettesDispatch({
              type: 'swatchAdded',
              payload: {
                newColor: 'FFFFFF',
              },
            });
          }}
        >
          <Plus size={20} strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
};

export default Workspace;
