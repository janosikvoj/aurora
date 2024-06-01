import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import Text from '../components/Text';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { cn } from '../lib/utils';
import Button from '../components/Button';
import ModuleCard from '../components/ModuleCard';
import { Link, ScrollRestoration } from 'react-router-dom';
import ArrowStarVector from '../components/ArrowStarVector';
import HelpButton from '../components/HelpButton';

// Debug
const debugMode: boolean = false;

export default function AuroraPage() {
  return (
    <div className={cn('flex flex-col min-h-screen justify-between')}>
      <ScrollRestoration />
      <NavBar />
      {debugMode && (
        <Button
          variant="secondary"
          className="fixed z-10 right-4 top-4"
          onClick={() => {
            sessionStorage.removeItem('loadingAnimationPlayed');
          }}
        >
          <Text style="code">Reset animation</Text>
        </Button>
      )}

      <main className="bg-theme-2 rounded-3xl flex flex-col overflow-hidden">
        <section className="relative justify-center flex flex-col items-center gap-8 w-full py-32 bg-theme-9">
          <div className="z-20 px-12 origin-bottom text-theme-12 flex flex-col items-center">
            <div className="flex flex-row gap-4 px-3 py-1.5 rounded-sm z-20">
              <Text style="small">
                <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
                  Aurora&nbsp;
                </span>
                Curator
              </Text>
            </div>
            <br />
            <h1 className="font-semibold text-8xl opacity-75 text-center">
              Master colors
              <br />
              with confidence.
            </h1>
          </div>

          <div className="absolute inset-0">
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
        </section>
        <section className="relative p-48 items-center flex flex-col gap-24">
          <ModuleCard content="theory" />
          <ModuleCard content="harmony" />
          <ModuleCard content="perception" />
          <ModuleCard content="design" />
          <ModuleCard content="accessibility" />
          <div className="z-10 flex flex-col items-center gap-3">
            <div className="flex flex-row gap-6">
              <Link to="/manual">
                <Button className="px-8 py-6">Open manual</Button>
              </Link>
              <Link to="/lab">
                <Button variant="secondary" className="px-8 py-6 bg-theme-1">
                  Begin work
                </Button>
              </Link>
            </div>
            <HelpButton className="text-theme-12">
              Learn more about the app concept
            </HelpButton>
          </div>
          <div
            className="absolute inset-0"
            style={{ clipPath: 'inset(0 0 0 0)' }}
          >
            <ArrowStarVector className="fixed inset-0" />
          </div>
          <div
            className="absolute bottom-0 h-[75vh] w-full"
            style={{
              maskImage:
                'linear-gradient(to bottom, transparent 0%, rgba(1,1,1,0.33) 50%, black 75%)',
            }}
          >
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
