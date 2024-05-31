import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import Text from '@/components/Text';
import { cn } from '@/lib/utils';

interface AuroraSliderProps {
  handleChange: (value: string) => void;
  outputCount: number;
}

const AuroraSlider: React.FC<AuroraSliderProps> = ({
  handleChange,
  outputCount,
}) => {
  return (
    <div className="bg-theme-2 rounded-md flex flex-row grow">
      <Text style="code">
        <Input
          type="number"
          value={outputCount.toString()}
          min={1}
          max={10}
          step={1}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          className={cn(
            'h-auto w-auto px-3 py-1.5 border-none text-center',
            'invalid:text-theme-8',
            'focus-visible:bg-theme-1 focus-visible:ring-1 focus-visible:ring-offset-0'
          )}
        />
      </Text>
      <Slider
        value={[outputCount]}
        min={1}
        max={10}
        step={1}
        onValueChange={(value) => {
          handleChange(String(value[0]));
        }}
        className={cn('mx-3 my-1.5 min-w-32')}
      />
    </div>
  );
};

export default AuroraSlider;
