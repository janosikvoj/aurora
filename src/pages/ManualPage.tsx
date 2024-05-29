// * Base imports
import {
  Outlet,
  useLoaderData,
  useParams,
  useNavigate,
} from 'react-router-dom';

// Types import
import { Module } from '../types/ModulesTypes';

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
import { getModuleBySlug } from '../lib/utils';

// Components import
import ModulesNavBar from '../components/ModulesNavBar';
import Stepper from '../components/stepper/Stepper';

// UI components import
import Button from '../components/ui/custom/Button.tsx';

// Icons import
import { ArrowBigRight, ArrowBigLeft, BookX } from 'lucide-react';

export default function ManualPage() {
  const { modules } = useLoaderData() as { modules: Module[] };
  const { moduleSlug, chapterId, slideId } = useParams();
  const navigate = useNavigate();

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
      <div className="pt-12 pb-16 h-full flex flex-col">
        <div className="mx-12">
          <ModulesNavBar modules={modules}></ModulesNavBar>
        </div>
        <div className="min-h-12" />
        <div className="mx-12 flex-1 min-h-0">
          <div className="grid gap-6 grid-cols-12 h-full">
            <Stepper module={module} />
            <div className="relative bg-theme-1 border border-theme-6 rounded-md col-start-3 col-span-full min-h-96 p-16">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="mx-12">
          <div className="grid gap-6 grid-cols-12">
            <div className="col-start-1 col-end-3"></div>
            <div className="col-start-3 col-span-full px-8 pt-3 flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    navigate(
                      slideToURL(module.slug, getPrevSlide(module.slug, slide))
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
    );
  }
  return <Outlet />;
}
