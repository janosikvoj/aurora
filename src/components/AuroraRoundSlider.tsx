import { RoundSlider, ISettingsPointer } from 'mz-react-round-slider';
import { useEffect, useRef, useState } from 'react';
import Text from './Text';
import ColorOutput from './ColorOutput';
import { Color, formatHex, hsl } from 'culori';
import './styles/AuroraRoundSlider.css';

interface AuroraRoundSliderProps {
  variant: 'default' | 'hue' | 'saturation' | 'lightness';
  currentColor: Color;
  setCurrentColor: React.Dispatch<React.SetStateAction<Color>>;
}

const AuroraRoundSlider: React.FC<AuroraRoundSliderProps> = ({
  variant,
  currentColor,
  setCurrentColor,
}) => {
  const initialValue =
    variant === 'hue'
      ? Math.round(hsl(currentColor).h || 0)
      : variant === 'saturation'
      ? Math.round(hsl(currentColor).s * 100 || 0)
      : variant === 'lightness'
      ? Math.round(hsl(currentColor).l * 100 || 0)
      : 0;

  const [pointers, setPointers] = useState<ISettingsPointer[]>([
    { value: initialValue },
  ]);

  const [pathRadius, setPathRadius] = useState(
    window.innerWidth / 16 < 80 ? 80 : window.innerWidth / 16
  );
  window.addEventListener('resize', () => {
    setPathRadius(window.innerWidth / 16 < 80 ? 80 : window.innerWidth / 16);
  });

  useEffect(() => {
    setPointers([{ value: initialValue }]);
  }, [initialValue]);

  const currentColorHsl = hsl(currentColor) || {
    mode: 'hsl',
    h: 0,
    s: 0,
    l: 0,
  };

  function handleChange(pointersOutput: ISettingsPointer[]) {
    setCurrentColor({
      mode: 'hsl',
      h:
        variant === 'hue' ? Number(pointersOutput[0].value) : currentColorHsl.h,
      s:
        variant === 'saturation'
          ? Number(pointersOutput[0].value) / 100
          : currentColorHsl.s,
      l:
        variant === 'lightness'
          ? Number(pointersOutput[0].value) / 100
          : currentColorHsl.l,
    });
  }

  const colorOutput =
    variant === 'hue'
      ? {
          mode: 'hsl',
          h: Number(pointers[0].value),
          s: 1,
          l: 0.5,
        }
      : variant === 'saturation'
      ? {
          mode: 'hsl',
          h: currentColorHsl.h,
          s: Number(pointers[0].value) / 100,
          l: 0.5,
        }
      : variant === 'lightness'
      ? {
          mode: 'hsl',
          h: currentColorHsl.h,
          s: 1,
          l: Number(pointers[0].value) / 100,
        }
      : {
          mode: 'hsl',
          h: currentColorHsl.h,
          s: currentColorHsl.s,
          l: currentColorHsl.l,
        };

  const containerRef = useRef<HTMLDivElement>(null);
  containerRef.current?.style.setProperty(
    '--aurora-stroke',
    formatHex(colorOutput as Color)
  );

  return (
    <div className="aurora-curator-hue relative" ref={containerRef}>
      <RoundSlider
        pointers={pointers}
        onChange={(pointersOutput) => {
          setPointers(pointersOutput);
          handleChange(pointersOutput);
        }}
        pathStartAngle={90 + 45}
        pathEndAngle={45}
        hideText={true}
        min={0}
        max={variant === 'hue' ? 360 : 100}
        animateOnClick={true}
        pathRadius={pathRadius}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <Text style="h2" className="pointer-events-auto">
          {pointers[0].value}
        </Text>
        <Text style="lead" className="text-theme-11">
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Text>
        <ColorOutput
          color={colorOutput as Color}
          className="size-8 pointer-events-auto absolute bottom-2"
          rotated
        />
      </div>
    </div>
  );
};

export default AuroraRoundSlider;
