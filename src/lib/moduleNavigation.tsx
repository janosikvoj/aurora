import { getModuleBySlug } from './utils';

// Debug
const debugMode: boolean = false;

// Converts slide to absolute URL
export function slideToURL(
  module: string,
  slide: { chapterId: number; slideId: number }
) {
  return `/manual/${module}/${slide.chapterId}/${slide.slideId}`;
}

// Checks if slide is available
export function slideAvailable(
  module: string,
  slide: { chapterId: number; slideId: number }
): boolean {
  if (
    getModuleBySlug(module)?.chapters[slide.chapterId]?.slides[slide.slideId]
  ) {
    debugMode &&
      console.log(`Slide ${slide.chapterId}, ${slide.slideId} is available.`);
    return true;
  } else {
    debugMode &&
      console.log(
        `Slide ${slide.chapterId}, ${slide.slideId} is not available!`
      );
    return false;
  }
}

// Relative slide
export function relativeSlide(
  module: string,
  slide: { chapterId: number; slideId: number },
  direction: 'next' | 'prev'
) {
  if (direction === 'next') {
    return getNextSlide(module, slide);
  }
  if (direction === 'prev') {
    return getPrevSlide(module, slide);
  }
}

// Logic for getting the next slide
export function getNextSlide(
  module: string,
  slide: { chapterId: number; slideId: number }
) {
  const nextSlideInChapter = {
    chapterId: slide.chapterId,
    slideId: slide.slideId + 1,
  };
  const nextChapterSlide = {
    chapterId: slide.chapterId + 1,
    slideId: 0,
  };

  if (slideAvailable(module, nextSlideInChapter)) {
    return nextSlideInChapter;
  } else if (slideAvailable(module, nextChapterSlide)) {
    return nextChapterSlide;
  }
  debugMode && console.log('You reached the end of the module.');
  return slide;
}

// Logic for getting the previous slide
export function getPrevSlide(
  module: string,
  slide: { chapterId: number; slideId: number }
) {
  const prevSlideInChapter = {
    chapterId: slide.chapterId,
    slideId: slide.slideId - 1,
  };

  if (slideAvailable(module, prevSlideInChapter)) {
    return prevSlideInChapter;
  } else if (getModuleBySlug(module)?.chapters[slide.chapterId - 1]?.slides) {
    const currentModuleSlides =
      getModuleBySlug(module).chapters[slide.chapterId - 1].slides;
    const prevChapterSlide = {
      chapterId: slide.chapterId - 1,
      slideId: currentModuleSlides[currentModuleSlides.length - 1].id,
    };
    if (slideAvailable(module, prevChapterSlide)) {
      return prevChapterSlide;
    }
  }

  debugMode && console.log('You are on the begging and can not go back.');
  return slide;
}
