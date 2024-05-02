import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';

export default function AuroraPage() {
  return (
    <>
      <section className="relative flex flex-col items-center gap-8 w-full bg-gray-6">
        <div
          className={
            'flex flex-row gap-4 px-3 py-1.5 mt-24 rounded-sm text-gray-12 font-sans text-sm font-medium z-10'
          }
        >
          <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
            Aurora
          </span>
          Kurátor
        </div>
        <div className="mix-blend-overlay z-10 px-12 mb-24 contrast-125">
          <h1 className="font-semibold text-8xl text-gray-12 text-center">
            Ovládněte barvy
            <br />
            jako profesionál
          </h1>
        </div>

        <div className="absolute w-full h-full">
          <ShaderGradientCanvas fov={35} pixelDensity={1}>
            <ShaderGradient
              control="props"
              color1="#F0F0F0"
              color2="#8D8D8D"
              color3="#646464"
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
        <div className="text-lg">Úvodní stránka</div>
      </section>
    </>
  );
}
