import { defaultPalettes } from '@/data/defaultPalettes';
import { getPaletteHistory, setPaletteHistory } from '@/lib/paletteHistory';
import { generateSwatch } from '@/lib/paletteUtils';
import { Palette } from '@/types/PalettesTypes';
import React, { createContext, useReducer } from 'react';

// Debug
const debugMode: boolean = false;

// Context creation with initial values
export const PalettesContext = createContext(defaultPalettes);
export const PalettesDispatchContext = createContext<
  React.Dispatch<currentPaletteReducerActions>
>(() => {});

interface PalettesProviderProps {
  children: React.ReactNode;
}

export const PalettesProvider: React.FC<PalettesProviderProps> = ({
  children,
}) => {
  const [palettes, palettesDispatch] = useReducer(
    palettesReducer,
    getPaletteHistory() || defaultPalettes
  );
  return (
    <PalettesContext.Provider value={palettes}>
      <PalettesDispatchContext.Provider value={palettesDispatch}>
        {children}
      </PalettesDispatchContext.Provider>
    </PalettesContext.Provider>
  );
};

// All action types with their payloads
type currentPaletteReducerActions =
  // Handling for palettes
  | {
      type: 'editingPaletteSwitch';
      payload: {
        paletteID: number;
      };
    }
  // Handling for swatches
  | {
      type: 'swatchAdded';
      payload: {
        paletteID: number;
        newColor: string;
      };
    }
  | {
      type: 'swatchSelectionToggled';
      payload: {
        paletteID: number;
        swatchID: number;
      };
    }
  | {
      type: 'swatchDeleted';
      payload: {
        paletteID: number;
      };
    };

function palettesReducer(
  palettes: Palette[],
  action: currentPaletteReducerActions
) {
  switch (action.type) {
    case 'swatchAdded': {
      debugMode && console.log('Swatch added');
      const newPalettes = [
        ...palettes.slice(0, action.payload.paletteID), // Copy up to paletteID
        {
          ...palettes[action.payload.paletteID], // Copy palette object
          swatches: [
            ...palettes[action.payload.paletteID].swatches,
            generateSwatch(
              action.payload.newColor,
              palettes[action.payload.paletteID].swatches.length
            ),
          ],
        },
        ...palettes.slice(action.payload.paletteID + 1), // Copy remaining palettes
      ];
      return newPalettes;
    }
    case 'swatchDeleted': {
      debugMode && console.log('Swatches deleted');
      const definedPalette = palettes[action.payload.paletteID];
      const newPalettes = [
        ...palettes.slice(0, action.payload.paletteID), // Copy up to paletteID
        {
          ...definedPalette, // Copy palette object
          swatches: definedPalette.swatches.map((swatch) => {
            return {
              ...swatch,
              deleted: swatch.selected ? true : false,
            };
          }),
        },
        ...palettes.slice(action.payload.paletteID + 1), // Copy remaining palettes
      ];
      setPaletteHistory(newPalettes);
      return newPalettes;
    }
    case 'swatchSelectionToggled': {
      debugMode && console.log('Swatch selection toggled');
      const definedPalette = palettes[action.payload.paletteID];
      const definedSwatch = definedPalette.swatches[action.payload.swatchID];
      const newPalettes = palettes.map((palette) => {
        return palette.id === action.payload.paletteID
          ? {
              ...palette, // Copy palette object
              swatches: [
                ...definedPalette.swatches.slice(0, action.payload.swatchID),
                {
                  ...definedSwatch,
                  selected: !definedSwatch.selected,
                },
                ...definedPalette.swatches.slice(action.payload.swatchID + 1),
              ],
            }
          : {
              ...palette, // Copy palette object
              editing: false,
            };
      });
      setPaletteHistory(newPalettes);
      return newPalettes;
    }
    case 'editingPaletteSwitch': {
      debugMode && console.log('Editing palette changed');
      const newPalettes = palettes.map((palette) => {
        return palette.id === action.payload.paletteID
          ? {
              ...palette, // Copy palette object
              editing: true,
            }
          : {
              ...palette, // Copy palette object
              editing: false,
            };
      });
      setPaletteHistory(newPalettes);
      return newPalettes;
    }
    default: {
      throw Error('Unknown action type in palettesReducer');
    }
  }
}
