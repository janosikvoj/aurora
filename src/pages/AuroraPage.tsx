import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import Text from '../components/Text';
import {
  motion,
  // useMotionValueEvent,
  // useScroll,
  // useTransform,
} from 'framer-motion';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import ModuleCard from '../components/ModuleCard';
import { ScrollRestoration } from 'react-router-dom';

// Debug
const debugMode: boolean = false;
const alwaysPlayAnimation: boolean = false;

const animationsStepsDistance = [
  0.5, // ? Starts revealing gradient and changes height of the container
  3, // ? Changes logo background and position
  0.2, // ? Reveals the text
  1,
  1,
];

const animationStepsDelay = animationsStepsDistance.map((_, index) => {
  let delay = 0;
  for (let i = 0; i <= index; i++) {
    delay += animationsStepsDistance[i];
  }
  return delay;
});

export default function AuroraPage() {
  const hasPlayedLoadingAnimation = alwaysPlayAnimation
    ? false
    : Boolean(sessionStorage.getItem('loadingAnimationPlayed'));

  const screenRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // const { scrollY } = useScroll();
  // const heroYOffset = useTransform(() =>
  //   scrollY.get() > 64 ? scrollY.get() / 1.2 - 64 : 0
  // );

  // let heroClientHeight = heroRef.current?.clientHeight;
  // window.addEventListener('resize', function () {
  //   heroClientHeight = heroRef.current?.clientHeight;
  // });

  // const heroHeight = useTransform(() => {
  //   let newHeight = 0;
  //   if (heroClientHeight) {
  //     newHeight = heroClientHeight + scrollY.get();
  //   }
  //   return newHeight;
  // });

  // const heroOpacity = useTransform(() =>
  //   scrollY.get() > 64 ? scrollY.get() / 10 : 1
  // );

  // useMotionValueEvent(heroHeight, 'change', (latest) => {
  //   console.log('heroHeight changed to', latest);
  // });

  return (
    <motion.div
      className={cn(
        'flex flex-col min-h-screen justify-between',
        !hasPlayedLoadingAnimation && 'h-screen overflow-hidden'
      )}
      ref={screenRef}
      initial={
        !hasPlayedLoadingAnimation && { backgroundColor: 'var(--theme-1)' }
      }
      animate={{ backgroundColor: 'var(--theme-3)' }}
      transition={{
        duration: 2,
        delay: animationStepsDelay[3],
        ease: 'easeInOut',
      }}
      onAnimationComplete={() => {
        sessionStorage.setItem('loadingAnimationPlayed', String(true));
      }}
    >
      <ScrollRestoration />
      <motion.div
        initial={!hasPlayedLoadingAnimation && { y: -64, height: 0 }}
        animate={{ y: 0, height: 'auto' }}
        transition={{
          duration: 2,
          delay: animationStepsDelay[3],
          ease: 'easeInOut',
        }}
      >
        <NavBar />
      </motion.div>
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
        <motion.div
          ref={heroRef}
          initial={!hasPlayedLoadingAnimation && { height: '75vh' }}
          animate={{ height: 'auto' }}
          transition={{
            duration: 3,
            delay: animationStepsDelay[0],
            ease: 'easeInOut',
          }}
        >
          <section className="relative justify-center flex flex-col items-center gap-8 h-full w-full py-32 bg-theme-9">
            <motion.div
              initial={
                !hasPlayedLoadingAnimation && {
                  backgroundColor: 'var(--theme-1)',
                  y: 192 / 2,
                }
              }
              animate={{ backgroundColor: 'rgba(252,252,252,0)', y: 0 }}
              transition={{
                duration: 1.25,
                delay: animationStepsDelay[1],
                ease: 'anticipate',
              }}
              className={
                'flex flex-row gap-4 px-3 py-1.5 rounded-sm text-theme-12 bg-transparent font-sans text-sm font-medium z-20'
              }
            >
              <Text style="small">
                <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
                  Aurora&nbsp;
                </span>
                Curator
              </Text>
            </motion.div>
            <div className="mix-blend-multiply z-20 px-12 origin-bottom">
              <motion.h1
                className="font-semibold text-8xl opacity-75 text-center text-theme-9"
                initial={
                  !hasPlayedLoadingAnimation && { opacity: 0, y: '2rem' }
                }
                animate={{ opacity: 1, y: '0rem' }}
                transition={{
                  delay: animationStepsDelay[2],
                  duration: 1.5,
                  ease: 'anticipate',
                }}
              >
                Ovládněte barvy
                <br />
                jako profesionál
              </motion.h1>
            </div>

            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{
                duration: 1,
                delay: !hasPlayedLoadingAnimation ? animationStepsDelay[0] : 0,
                ease: 'easeIn',
              }}
            >
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
            </motion.div>
          </section>
        </motion.div>

        <motion.div
          initial={!hasPlayedLoadingAnimation && { height: 0 }}
          animate={{ height: 'auto' }}
          transition={{
            duration: 2,
            delay: animationStepsDelay[4],
            ease: 'easeInOut',
          }}
        >
          <section className="p-12 pt-96 z-100">
            <ModuleCard content="theory" />
            <ModuleCard content="harmony" />
            <ModuleCard content="perception" />
            <ModuleCard content="design" />
            <ModuleCard content="accessibility" />
          </section>
        </motion.div>
      </main>

      <motion.div
        initial={!hasPlayedLoadingAnimation && { opacity: 0, height: 0 }}
        animate={{ opacity: 100, height: 'auto' }}
        transition={{
          duration: 2,
          delay: animationStepsDelay[3],
          ease: 'easeInOut',
        }}
        onAnimationComplete={() => {
          if (screenRef.current) {
            screenRef.current.classList.remove('h-screen', 'overflow-hidden');
          }
          // screenRef.current.element.classList.remove;
        }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}
