import React from 'react';
import { Input } from '@/components/ui/input';
import Text from '@/components/Text';
import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'group relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-theme-3 group-hover:h-6 transition-all">
      <SliderPrimitive.Range className="absolute h-full bg-theme-12" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        'peer block size-6 rounded-full border-[6px] border-theme-1 bg-theme-12 cursor-pointer',
        'group-hover:size-[1.875rem] hover:border-[3px] transition-all',
        'disabled:pointer-events-none disabled:opacity-50'
      )}
    />
  </SliderPrimitive.Root>
));

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
            'h-auto w-auto px-3 py-2 border-none text-center',
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
