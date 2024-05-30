import { useContext } from 'react';
import Swatch from './Swatch';
import {
  Palette as PaletteType,
  Swatch as SwatchType,
} from '@/types/PalettesTypes';
import { PalettesContext } from '@/contexts/PalettesContext';

const SwatchesContainer = () => {
  const palettes = useContext(PalettesContext);

  const editingPalette: PaletteType =
    palettes.find((palette) => palette.editing) || palettes[0];

  return (
    <div className="space-y-4">
      {editingPalette.swatches.map((swatch: SwatchType) => {
        return (
          <Swatch key={swatch.id} swatch={swatch} checked={swatch.selected} />
        );
      })}
    </div>
  );
};

export default SwatchesContainer;
