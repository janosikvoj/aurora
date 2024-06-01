import Text from '@/components/Text';
import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

const SlideQAndA = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col justify-center gap-8">
      <div className="grid grid-cols-6">
        <div className="relative col-span-4 p-8 z-10">
          <Text style="h2" className="relative z-10 text-theme-1">
            "What's your favorite color?"
          </Text>
          <Text style="lead" className="relative z-10 text-theme-1">
            — A casual child
          </Text>
          <div className="absolute inset-0">
            <div className="h-full w-full invert">
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
            </div>
            <div className="absolute inset-0 bg-theme-9 mix-blend-soft-light" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-3 col-span-4 bg-theme-3 p-8">
          <Text style="h3">Live reaction</Text>
          <Text style="p">
            The other child might answer blue, red, yellow, or green. Colors are
            a pretty simple thing that even 4-year-olds can debate about. So why
            even bother with color theory?
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SlideQAndA;
