import { useParams } from 'react-router-dom';
import { Chapter, Module, SlideLocation } from '../../types/ModulesTypes';
import { slideAvailable } from '../../lib/moduleNavigation';
import { StepperItem } from './StepperItem';
import SlideLink from './SlideLink';
import Text from '../Text';
import { cn } from '../../lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getModuleHistory } from '../../lib/moduleHistory';

interface ChapterAccordionItemProps {
  module: Module;
  chapter: Chapter;
  fullscreen?: boolean;
}
const AccordionItem: React.FC<ChapterAccordionItemProps> = ({
  module,
  chapter,
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
    const chapterLength = chapter.slides.length;

    const isActiveChapter: boolean = chapter.id === Number(chapterId);

    const furthestSlideLocation: SlideLocation = getModuleHistory(
      module.slug
    ).furthestSlide;

    const isCompletedChapter: boolean =
      chapter.id < furthestSlideLocation.chapterId ||
      (chapter.id === furthestSlideLocation.chapterId &&
        furthestSlideLocation.slideId ===
          chapter.slides[chapter.slides.length - 1].id);

    const completedSlidesInChapter: number = isCompletedChapter
      ? chapter.slides.length
      : chapter.id === furthestSlideLocation.chapterId
      ? furthestSlideLocation.slideId + 1
      : 0;

    return (
      <details
        open={Number(chapterId) === chapter.id}
        className={cn(
          'rounded-md hover:bg-theme-3 group/chapter',
          isActiveChapter && 'bg-theme-3'
        )}
      >
        <summary className="list-none">
          <div className="group/item min-h-8 rounded-md flex flex-row text-left bg-inherit cursor-pointer">
            <div className="w-8 min-w-8 h-8 flex items-center justify-center">
              <div
                className={cn(
                  'bg-theme-2 size-6 rounded-full flex items-center justify-center border-theme-6 border text-theme-11',
                  isCompletedChapter && 'bg-theme-6'
                )}
              >
                <ChevronUp
                  size={16}
                  strokeWidth={2}
                  className="mb-0.5 hidden group-open/chapter:block"
                />
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 group-open/chapter:hidden"
                />
              </div>
              {/* <div
                className={cn(
                  'bg-theme-6 rounded-sm rounded-tl-lg w-3 h-0.5',
                  'transition-all duration-500 ease-in-out',
                  'group-open/chapter:h-3 group-open/chapter:rounded-br-sm group-open/chapter:rotate-45'
                )}
              /> */}
            </div>

            {!fullscreen && (
              <div className="mx-2 mt-1.5 mb-1 leading-tight">
                <Text style="small" className="text-theme-11">
                  {chapter.title}
                </Text>
                <div className="group-open/chapter:hidden">
                  <Text style="code" className="text-theme-8">
                    {completedSlidesInChapter}/{chapterLength}{' '}
                    {chapterLength === 1 ? 'slide' : 'slides'}
                  </Text>
                </div>
              </div>
            )}
          </div>
        </summary>

        {chapter.slides.map((slide) => {
          return (
            <SlideLink
              key={slide.id}
              module={module}
              slide={{ chapterId: chapter.id, slideId: slide.id }}
            >
              <StepperItem
                module={module}
                chapter={chapter}
                slide={slide}
                fullscreen={fullscreen}
              />
            </SlideLink>
          );
        })}
      </details>
    );
  }
};

export default AccordionItem;
