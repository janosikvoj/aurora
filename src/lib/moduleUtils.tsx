import { Module, SlideLocation } from '../types/ModulesTypes';
import { getModuleHistory } from './moduleHistory';
import { getNextSlide } from './moduleNavigation';

// debug
const debugMode: boolean = false;

//Function that returns progress of a module from furthest slide
export function getModuleProgress(module: Module): number {
  const furthestSlide = getModuleHistory(module.slug).furthestSlide;
  return getSlideRelativeProgress(module, furthestSlide);
}

// Function that returns relative progress of a slide in module
export function getSlideRelativeProgress(module: Module, slide: SlideLocation) {
  const slideLinearIndex = getSlideLinearIndex(module, slide);
  const moduleLength = getModuleLength(module);
  return +(slideLinearIndex / (moduleLength - 1)).toFixed(2);
}

// Function that returns length of a module
export function getModuleLength(module: Module): number {
  let counter = 0;
  module.chapters.forEach((chapter) => {
    counter += chapter.slides.length;
  });
  return counter;
}

// Function that returns the linear index of a slide
export function getSlideLinearIndex(
  module: Module,
  slide: SlideLocation
): number {
  let index = 0;
  let currentSlide: SlideLocation = { chapterId: 0, slideId: 0 };
  debugMode && console.log(getSlidesEquality(slide, currentSlide));

  if (!getSlidesEquality(slide, currentSlide)) {
    do {
      index++;
      currentSlide = getNextSlide(module.slug, currentSlide);
    } while (!getSlidesEquality(slide, currentSlide));
  }

  return index;
}

// Function that returns if a two slidesLocation objects are the same
export function getSlidesEquality(
  slide1: SlideLocation,
  slide2: SlideLocation
): boolean {
  if (
    slide1.chapterId === slide2.chapterId &&
    slide1.slideId === slide2.slideId
  ) {
    return true;
  } else return false;
}
