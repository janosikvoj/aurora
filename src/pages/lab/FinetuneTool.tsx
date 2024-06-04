import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';
import { ArrowUpLeft } from 'lucide-react';
import ColorOutput from '@/components/ColorOutput';
import {
  PalettesContext,
  PalettesDispatchContext,
} from '@/contexts/PalettesContext';
import { useContext, useEffect, useState } from 'react';
import { Palette as PaletteType, Swatch } from '../../types/PalettesTypes';
import Text from '@/components/Text';
import AuroraRoundSlider from '@/components/AuroraRoundSlider';
import { Color, hsl } from 'culori';

const FinetuneTool = () => {
  // Last tool history update
  const tool: Tool = tools[1];
  setLastTool(tool.slug);

  // Palette constants definition
  const palettes = useContext(PalettesContext);
  const palettesDispatch = useContext(PalettesDispatchContext);

  const editingPalette: PaletteType =
    palettes.find((palette) => palette.editing) || palettes[0];

  // Swatch definition
  const firstSelectedSwatch: Swatch =
    editingPalette.swatches.find((swatch) => swatch.selected) ||
    editingPalette.swatches[0];

  const [selectedSwatchName, setSelectedSwatchName] = useState(
    firstSelectedSwatch.customName || firstSelectedSwatch.generatedName
  );

  const [currentColor, setCurrentColor] = useState<Color>(
    firstSelectedSwatch.color || (hsl('#FFFFFF') as Color)
  );

  useEffect(() => {
    setCurrentColor(firstSelectedSwatch.color || (hsl('#FFFFFF') as Color));
    setSelectedSwatchName(
      firstSelectedSwatch.customName || firstSelectedSwatch.generatedName
    );
  }, [firstSelectedSwatch]);

  return (
    <div className="flex flex-col gap-6 min-h-full">
      <div className="flex flex-row">
        <ColorOutput color={currentColor} className="w-12 h-auto" />
        <div className="ml-4">
          <Text style="h1">
            <input
              className="bg-transparent rounded-md w-full outline-none"
              value={String(selectedSwatchName)}
              onChange={(e) => {
                setSelectedSwatchName(e.currentTarget.value);
                if (e.currentTarget.value !== '') {
                  firstSelectedSwatch &&
                    palettesDispatch({
                      type: 'swatchEdited',
                      payload: {
                        paletteID: editingPalette.id,
                        swatchID: firstSelectedSwatch.id,
                        newSwatch: {
                          ...firstSelectedSwatch,
                          customName: e.currentTarget.value,
                        },
                      },
                    });
                }
              }}
            />
          </Text>
          <div className="flex flex-row items-center gap-4">
            <Text style="lead">{firstSelectedSwatch.generatedName}</Text>
            {!firstSelectedSwatch?.customName && (
              <span className="flex flex-row gap-1 h-fit text-theme-8">
                <ArrowUpLeft size={20} strokeWidth={1.75} />
                <Text style="muted" className="text-inherit">
                  Click to rename
                </Text>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="bg-theme-1 border border-theme-6 rounded-md px-8 py-16 flex flex-row justify-center gap-4 overflow-auto">
        <AuroraRoundSlider
          variant="hue"
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <AuroraRoundSlider
          variant="saturation"
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <AuroraRoundSlider
          variant="lightness"
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
      </div>
    </div>
  );
};

export default FinetuneTool;
