import { setLastTool } from '@/lib/toolHistory';
import { Tool } from '@/types/ToolsTypes';
import { tools } from '@/data/tools';
import ColorOutput from '@/components/ColorOutput';
import Button from '@/components/Button';
import { Shuffle } from 'lucide-react';
import { useState } from 'react';
import Divider from '@/components/Divider';
import AuroraSlider from '../../components/AuroraSlider';
import { generateRandomColors } from '@/lib/paletteUtils';
import { InputWithLabel } from '../../components/InputWithLabel';

const GenerateTool = () => {
  const tool: Tool = tools[0];
  setLastTool(tool.slug);

  const [outputCount, setOutputCount] = useState(5);
  const [outputColors, setOutputColors] = useState(
    generateRandomColors(outputCount)
  );

  function handleInputChange(value: string) {
    // Parse the input to a number (ignoring leading zeros)
    const parsedValue = parseInt(value, 10);

    // Handle empty input setting to 0 (special case)
    if (value === '') {
      setOutputCount(0);
      // setOutputColors(generateRandomColors(1));
      return;
    }

    // Validate and update state only if parsed value is a number between 1 and 10 (no leading zeros)
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setOutputCount(parsedValue);
      // setOutputColors(generateRandomColors(parsedValue));
    } else if (!isNaN(parsedValue) && parsedValue > 10) {
      setOutputCount(10);
      // setOutputColors(generateRandomColors(10));
    } else {
      console.log(
        'Invalid input: value must be between 1 and 10 (no leading zeros)'
      );
    }
  }

  return (
    <div className="flex flex-col gap-6 min-h-full">
      <div className="flex flex-row gap-4 grow items-stretch">
        {outputColors.map((outputColor, index) => {
          return (
            <ColorOutput
              color={outputColor}
              className="grow h-auto"
              key={index}
            />
          );
        })}
      </div>
      <div className="bg-theme-1 border border-theme-6 rounded-md p-4 flex flex-row gap-4">
        <InputWithLabel label="Number of outputs" className="grow">
          <AuroraSlider
            outputCount={outputCount}
            handleChange={handleInputChange}
          />
        </InputWithLabel>
        <Divider orientation="vertical" />

        <Button
          variant="primary"
          onClick={() => {
            setOutputColors(generateRandomColors(outputCount));
          }}
          className="grow"
        >
          <Shuffle size={20} strokeWidth={1.75} className="min-w-6" />
          Generate
        </Button>
      </div>
    </div>
  );
};

export default GenerateTool;
