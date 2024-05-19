import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import Text from '../components/ui/Text';

export default function AuroraPage() {
  return (
    <>
      <section className="relative flex flex-col items-center gap-8 w-full bg-theme-6">
        <div
          className={
            'flex flex-row gap-4 px-3 py-1.5 mt-24 rounded-sm text-theme-12 font-sans text-sm font-medium z-20'
          }
        >
          <Text style="small">
            <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
              Aurora&nbsp;
            </span>
            Curator
          </Text>
        </div>
        <div className="mix-blend-multiply z-20 px-12 mb-24">
          <h1 className="font-semibold text-8xl text-theme-9 opacity-75 text-center">
            Ovládněte barvy
            <br />
            jako profesionál
          </h1>
        </div>

        <div className="absolute w-full h-full">
          <div className="absolute w-full h-full bg-theme-9 z-10 mix-blend-soft-light" />
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
      </section>
      <section className="p-12">
        <Text style="lead">Landing page</Text>
      </section>
    </>
  );
}
