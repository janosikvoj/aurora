import { Module } from '../../types/ModulesTypes';
import AccordionItem from './AccordionItem';
import Text from '../Text';
import { Lock, LockOpen } from 'lucide-react';
import { getModuleHistory } from '../../lib/moduleHistory';
import { getNextSlide } from '../../lib/moduleNavigation';
import { cn } from '../../lib/utils';

interface StepperProps {
  module: Module;
  fullscreen?: boolean;
}

const Stepper: React.FC<StepperProps> = ({ module, fullscreen }) => {
  const isCompletedModule: boolean =
    getNextSlide(module.slug, getModuleHistory(module.slug).furthestSlide)
      .chapterId === getModuleHistory(module.slug).furthestSlide.chapterId &&
    getNextSlide(module.slug, getModuleHistory(module.slug).furthestSlide)
      .slideId === getModuleHistory(module.slug).furthestSlide.slideId;

  return (
    <div
      className={cn(
        'relative my-4 min-h-0 max-h-full',
        !fullscreen && 'col-start-1 col-end-3'
      )}
    >
      <div
        className={cn(
          'absolute w-[calc(100%-1rem)] ml-4 h-full border-l border-theme-6',
          !fullscreen && 'border-y rounded-l-2xl'
        )}
      />
      {/* <div className="absolute w-[calc(100%-1rem)] ml-[calc(1rem-1px)] h-4 border-l-2 border-t-2 border-theme-6 rounded-tl-2xl" /> */}
      {!fullscreen && (
        <div className="absolute -translate-y-1/2	right-0 bg-theme-2 pl-4 rounded-md">
          <Text style="label">Progress</Text>
        </div>
      )}
      <div
        className={cn(
          'absolute top-0 bottom-12 my-4 rounded-md text-left overflow-y-auto scroll-smooth no-scrollbar',
          !fullscreen && 'inset-0'
        )}
      >
        {/* <div className="absolute w-[calc(100%-1rem)] ml-[calc(1rem-1px)] h-4 max-h-full border-l-2 border-theme-6 pointer-events-none" /> */}
        <div className="space-y-4">
          {module.chapters.map((chapter) => {
            return (
              <AccordionItem
                fullscreen={fullscreen}
                module={module}
                chapter={chapter}
                key={chapter.id}
              />
            );
          })}
        </div>
        <br />
        <br />
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-theme-2 via-theme-2 to-transparent" />

      <div
        className={cn(
          'absolute bottom-0 rounded-md flex flex-row text-theme-8',
          isCompletedModule && 'text-theme-11'
        )}
      >
        <div className="w-8 min-w-8 h-8 flex items-center justify-center">
          {isCompletedModule ? (
            <LockOpen size={16} strokeWidth={2} className="min-w-4" />
          ) : (
            <Lock size={16} strokeWidth={2} className="min-w-4" />
          )}
        </div>
        {!fullscreen && (
          <div className="mx-2 mt-1.5 mb-1 leading-tight">
            <Text style="muted" className="text-inherit">
              {module.unlock}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepper;
