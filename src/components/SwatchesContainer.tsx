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

  const renderedSwatches: SwatchType[] = editingPalette.swatches.filter(
    (swatch: SwatchType) => !swatch.deleted
  );

  return (
    <div className="space-y-4">
      {renderedSwatches.map((swatch: SwatchType, index) => {
        return (
          <Swatch
            key={swatch.id}
            swatch={swatch}
            checked={swatch.selected}
            height={index === 0 ? 'lg' : 'md'}
          />
        );
      })}
    </div>
  );
};

export default SwatchesContainer;
