import { useParams } from 'react-router-dom';
import { getModuleHistory } from '../../lib/moduleHistory';
import { getSlideLinearIndex, getSlidesEquality } from '../../lib/moduleUtils';
import { cn } from '../../lib/utils';
import {
  Chapter,
  Module,
  Slide,
  SlideLocation,
} from '../../types/ModulesTypes';
import Text from '../Text';
import { slideAvailable } from '../../lib/moduleNavigation';

interface StepperItemProps {
  module: Module;
  chapter: Chapter;
  slide: Slide;
  fullscreen?: boolean;
}
export const StepperItem: React.FC<StepperItemProps> = ({
  chapter,
  slide,
  module,
  fullscreen,
}) => {
  const { moduleSlug, chapterId, slideId } = useParams();
  if (
    moduleSlug &&
    typeof Number(chapterId) === 'number' &&
    typeof Number(slideId) === 'number' &&
    slideAvailable(moduleSlug as string, {
      chapterId: Number(chapterId),
      slideId: Number(slideId),
    })
  ) {
    const currentSlideLocation: SlideLocation = {
      chapterId: Number(chapterId),
      slideId: Number(slideId),
    };
    const furthestSlideLocation: SlideLocation = getModuleHistory(
      module.slug
    ).furthestSlide;

    const linkSlideLocation: SlideLocation = {
      chapterId: chapter.id,
      slideId: slide.id,
    };

    const isCompleted: boolean =
      getSlideLinearIndex(module, linkSlideLocation) <=
      getSlideLinearIndex(module, furthestSlideLocation);

    const isActive: boolean = getSlidesEquality(
      linkSlideLocation,
      currentSlideLocation
    );

    return (
      <div className="group/item min-h-8 rounded-md flex flex-row text-left bg-inherit hover:bg-theme-4 cursor-pointer">
        <div className="w-8 min-w-8 h-8 flex items-center justify-center">
          <div
            className={cn(
              'bg-theme-6 size-2.5 rounded-md',
              'transition-all duration-300 ease-in-out',
              'group-hover/item:bg-theme-11 group-hover/item:rounded-sm',
              isCompleted && 'bg-theme-8 rounded-sm rotate-45',
              isActive && 'bg-theme-12 rounded-sm rotate-45'
            )}
          />
        </div>
        {!fullscreen && (
          <div className="mx-2 my-1 leading-tight mt-1.5 mb-1">
            {isActive ? (
              <Text style="small" className="text-theme-12">
                {slide.title}
              </Text>
            ) : (
              <Text
                style="muted"
                className={cn('text-theme-11 group-hover/item:text-theme-12')}
              >
                {slide.title}
              </Text>
            )}
          </div>
        )}
      </div>
    );
  }
};
