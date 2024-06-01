// * Base imports
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigate,
} from 'react-router-dom';

// Types import
import { Module } from '../types/ModulesTypes.ts';

// Libs import
import {
  getNextSlide,
  getPrevSlide,
  slideAvailable,
  slideToURL,
} from '../lib/moduleNavigation.ts';
import {
  getModuleHistory,
  resetModuleHistory,
  setModuleHistory,
} from '../lib/moduleHistory';
import { cn, getModuleBySlug } from '../lib/utils';

// Components import
import ModulesNavBar from '../components/ModulesNavBar';
import Stepper from '../components/stepper/Stepper';

// UI components import
import Button from '../components/Button';

// Icons import
import {
  ArrowBigRight,
  ArrowBigLeft,
  BookX,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { useState } from 'react';

export default function ManualPage() {
  const { modules } = useLoaderData() as { modules: Module[] };
  const { moduleSlug, chapterId, slideId } = useParams();
  const navigate = useNavigate();

  const [fullscreen, setFullscreen] = useState(false);

  if (
    moduleSlug &&
    typeof Number(chapterId) === 'number' &&
    typeof Number(slideId) === 'number' &&
    slideAvailable(moduleSlug as string, {
      chapterId: Number(chapterId),
      slideId: Number(slideId),
    })
  ) {
    const module = getModuleBySlug(moduleSlug);
    const slide = {
      chapterId: Number(chapterId),
      slideId: Number(slideId),
    };
    // Update module history to match current slide
    setModuleHistory(module.slug, slide);
    return (
      <main className="bg-theme-2 rounded-3xl flex flex-col grow overflow-hidden h-[calc(100vh-2.5rem)]">
        <div className="pt-12 pb-16 h-full flex flex-col">
          <div className={cn('mx-12', fullscreen && 'hidden')}>
            <ModulesNavBar modules={modules}></ModulesNavBar>
          </div>
          <div className={cn('min-h-12', fullscreen && 'hidden')} />
          <div className="mx-12 flex-1 min-h-0">
            <div className={cn('grid gap-6 grid-cols-12 h-full')}>
              <Stepper module={module} fullscreen={fullscreen} />
              <div
                className={cn(
                  'relative bg-theme-1 border border-theme-6 rounded-md min-h-96 overflow-hidden col-start-3 col-span-full',
                  fullscreen && 'col-start-2'
                )}
              >
                <Button
                  variant="icon"
                  className="absolute right-2 top-2 z-10 bg-theme-3 hover:bg-theme-4 active:bg-theme-5"
                  onClick={() => setFullscreen(!fullscreen)}
                >
                  {fullscreen ? (
                    <Minimize2 size={20} strokeWidth={1.75} />
                  ) : (
                    <Maximize2 size={20} strokeWidth={1.75} />
                  )}
                </Button>
                <Outlet />
              </div>
            </div>
          </div>
          <div className="mx-12">
            <div className="grid gap-6 grid-cols-12">
              <div
                className={cn(
                  'col-start-3 col-span-full px-8 pt-3 flex flex-row justify-between',
                  fullscreen && 'col-start-2'
                )}
              >
                <div className="flex flex-row gap-2">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(
                        slideToURL(
                          module.slug,
                          getPrevSlide(module.slug, slide)
                        )
                      );
                    }}
                  >
                    <ArrowBigLeft size={20} strokeWidth={1.75} />
                    Back
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      resetModuleHistory();
                      navigate(
                        slideToURL(
                          modules[0].slug,
                          getModuleHistory(modules[0].slug).furthestSlide
                        )
                      );
                    }}
                  >
                    <BookX size={20} strokeWidth={1.75} />
                    Reset progress
                  </Button>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate(
                      slideToURL(module.slug, getNextSlide(module.slug, slide))
                    );
                  }}
                >
                  Next
                  <ArrowBigRight size={20} strokeWidth={1.75} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return <Outlet />;
}
