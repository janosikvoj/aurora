// Imports
import modules from '../data/modules.json';
import { slideAvailable } from './moduleNavigation';

// Debug
const debugMode: boolean = false;

// Interface setup
interface SlideHistory {
  chapterId: number;
  slideId: number;
}
interface ModuleHistoryInterface {
  lastSlide: SlideHistory;
  furthestSlide: SlideHistory;
}

// Variable setup
const modulesSlugsArr = modules.map((module) => {
  return module.slug;
});
const defaultModuleHistory: ModuleHistoryInterface = {
  lastSlide: {
    chapterId: 0,
    slideId: 0,
  },
  furthestSlide: {
    chapterId: 0,
    slideId: 0,
  },
};

// Keys setup
const lastModuleKey = 'lastModule';
const moduleHistoryKey = (module: string) => {
  return `module${module.charAt(0).toUpperCase() + module.slice(1)}`;
};

// Initialization function
export function initModuleHistory() {
  // Setup for lastModule
  if (localStorage.getItem(lastModuleKey)) {
    debugMode &&
      console.log(
        `localStorage: lastModule is defined as ${localStorage.getItem(
          lastModuleKey
        )}`
      );
  } else {
    if (!localStorage.getItem(lastModuleKey)) {
      localStorage.setItem(lastModuleKey, modules[0].slug);
      debugMode &&
        console.log(
          `localStorage: undefined lastModule and was automatically set to ${modules[0].slug}`
        );
    }
    if (!modulesSlugsArr.includes(localStorage.getItem(lastModuleKey) || '')) {
      localStorage.setItem(lastModuleKey, modules[0].slug);
      debugMode &&
        console.log(
          `localStorage: lastModule did not match any available modules and was automatically set to ${modules[0].slug}`
        );
    }
  }
  // Setup for module histories
  modules.forEach((module) => {
    if (
      !localStorage.getItem(moduleHistoryKey(module.slug)) ||
      localStorage.getItem(moduleHistoryKey(module.slug)) == 'undefined'
    ) {
      localStorage.setItem(
        moduleHistoryKey(module.slug),
        JSON.stringify(defaultModuleHistory)
      );
      debugMode &&
        console.log(
          `localStorage: undefined ${module.slug} history and was automatically reset`
        );
    } else {
      if (localStorage.getItem(moduleHistoryKey(module.slug))) {
        debugMode &&
          console.log(
            `localStorage: ${
              module.slug
            } history is defined as ${localStorage.getItem(
              moduleHistoryKey(module.slug)
            )}`
          );
      }
    }
  });
}

// Function that resets the history
export function resetModuleHistory() {
  console.log('Module history reset');
  localStorage.clear();
  initModuleHistory();
}

export function getLastModule() {
  initModuleHistory();
  return localStorage.getItem(lastModuleKey);
}

export function setLastModule(module: string) {
  initModuleHistory();
  debugMode && console.log(`localStorage: lastModuleKey was set to ${module}`);
  return localStorage.setItem(lastModuleKey, module);
}

export function getModuleHistory(module: string): ModuleHistoryInterface {
  initModuleHistory();
  return JSON.parse(localStorage.getItem(moduleHistoryKey(module)) || '');
}

// Automatically sets the furthest slide
export function setModuleHistory(module: string, slide: SlideHistory) {
  initModuleHistory();
  const moduleHistory = getModuleHistory(module);
  const currentSlide = slide;
  let newFurthestSlide: SlideHistory = moduleHistory.furthestSlide;
  if (slideAvailable(module, slide)) {
    // Is current chapter is greater than furthest set a new furthest
    if (currentSlide.chapterId > moduleHistory.furthestSlide.chapterId) {
      debugMode && console.log('New furthest slide detected!');
      newFurthestSlide = {
        chapterId: currentSlide.chapterId,
        slideId: currentSlide.slideId,
      };
    }
    // Is current chapter is equal to the furthest check for slide
    else if (currentSlide.chapterId === moduleHistory.furthestSlide.chapterId) {
      if (currentSlide.slideId > moduleHistory.furthestSlide.slideId) {
        debugMode && console.log('New furthest slide detected!');
        newFurthestSlide = {
          chapterId: currentSlide.chapterId,
          slideId: currentSlide.slideId,
        };
      }
    }
    debugMode &&
      console.log(
        `localStorage: ${module} history was set to ${JSON.stringify({
          lastSlide: currentSlide,
          furthestSlide: newFurthestSlide,
        })}`
      );

    return localStorage.setItem(
      moduleHistoryKey(module),
      JSON.stringify({
        lastSlide: currentSlide,
        furthestSlide: newFurthestSlide,
      })
    );
  }
}
