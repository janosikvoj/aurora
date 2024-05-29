// * Base imports
import { useParams, Navigate, Outlet } from 'react-router-dom';

// Debug
const debugMode: boolean = false;

// Libs import
import { getModuleBySlug } from '../../lib/utils';
import {
  getLastModule,
  setLastModule,
  getModuleHistory,
} from '../../lib/moduleHistory';
import { slideToURL } from '../../lib/moduleNavigation.ts';

const ModuleHandler = () => {
  const { moduleSlug, chapterId, slideId } = useParams();

  // Check if current slug is available
  if (!getModuleBySlug(moduleSlug as string)) {
    debugMode &&
      console.log('navigate: slug does not match any available modules');
    return <Navigate to={'/manual/' + getLastModule()} />;
  }

  // Check if current slug is different from the last module slug
  if (moduleSlug !== getLastModule()) {
    debugMode && console.log(`navigate: open the module ${moduleSlug}`);
    // Update last module
    setLastModule(moduleSlug as string);
  }

  // Checks for slide
  if ((!chapterId || !slideId) && moduleSlug) {
    debugMode &&
      console.log(
        'navigate: no slide was chosen, redirected to last slide visited'
      );
    const lastSlide = getModuleHistory(moduleSlug).lastSlide;
    return <Navigate to={slideToURL(moduleSlug, lastSlide)} />;
  }

  return <Outlet />;
};

export default ModuleHandler;
