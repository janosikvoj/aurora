import Text from '@/components/Text';
import { Pipette } from 'lucide-react';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

const SlideModuleIntro = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 -top-4 -bottom-4">
        <ShaderGradientCanvas fov={35} pixelDensity={1}>
          <ShaderGradient
            control="props"
            color1="#F0F0F0"
            color2="#D9D9D9"
            color3="#8D8D8D"
            brightness={0}
            grain="off"
            uAmplitude={0.5}
            positionY={0.5}
            uDensity={2}
            uSpeed={0.4}
            cDistance={3}
            cPolarAngle={90}
            cAzimuthAngle={180}
            enableTransition={false}
          />
        </ShaderGradientCanvas>
        <div className="absolute inset-0 bg-theme-9 mix-blend-soft-light" />
      </div>
      <div className="absolute z-10 inset-16 flex flex-col">
        <div className="grow flex flex-col justify-center">
          <div className="flex flex-row gap-16 justify-center items-center mb-8">
            <Text style="label">Module</Text>
            <Text
              style="h1"
              className="uppercase font-black text-9xl break-all flex min-w-0"
            >
              Theory
            </Text>
            <Text style="label">Module</Text>
          </div>
          <Text style="h2" className="text-center">
            Basic knowledge about colors
          </Text>
        </div>
        <div className="flex flex-row text-center gap-12 justify-center text-theme-12">
          <div>
            <Text style="muted" className="text-inherit">
              Difficulty
            </Text>
            <br />
            <Text style="code" className="text-inherit">
              Beginner
            </Text>
          </div>
          <div>
            <Text style="muted" className="text-inherit">
              Length
            </Text>
            <br />
            <Text style="code" className="text-inherit">
              20 pages
            </Text>
          </div>
          <div>
            <Text style="muted" className="text-inherit">
              Unlocks
            </Text>

            <br />
            <span className="flex flex-row gap-1.5 items-center mt-1">
              <Pipette size={16} strokeWidth={1.75} />
              <Text style="code" className="text-inherit">
                Fine-tune
              </Text>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModuleIntro;
