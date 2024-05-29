import { useParams } from 'react-router-dom';
import Text from '../../components/ui/custom/Text.tsx';

import { slideAvailable } from '../../lib/moduleNavigation.ts';
import { getModuleBySlug } from '../../lib/utils';
import {
  getModuleLength,
  getModuleProgress,
  getSlideLinearIndex,
} from '../../lib/moduleUtils';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// debug
const debugMode: boolean = false;

const SlidePage = () => {
  const { moduleSlug, chapterId, slideId } = useParams();

  // const slideContainerRef = useRef(null);

  // useGSAP(() => {
  //   gsap.from(slideContainerRef.current, {
  //     y: '1.5rem',
  //     opacity: 0,
  //     delay: 0.2,
  //     duration: 1,
  //     ease: 'power4.out',
  //   });
  // }, [slideContainerRef.current, moduleSlug, chapterId, slideId]);

  // Check if url is defined and slide is available
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

    if (moduleSlug && debugMode) {
      console.log(
        `The number of slides in ${moduleSlug} is ${getModuleLength(
          getModuleBySlug(moduleSlug)
        )}`
      );
      console.log(
        `The linear index of this slide is ${getSlideLinearIndex(
          getModuleBySlug(moduleSlug),
          { chapterId: Number(chapterId), slideId: Number(slideId) }
        )}`
      );
      console.log(
        `This slide relative progress is ${getModuleProgress(
          getModuleBySlug(moduleSlug)
        )}`
      );
    }

    return (
      <AnimatePresence>
        <motion.div
          key={chapterId + '/' + slideId}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Text style="lead">Current slide</Text>
            <Text style="h1">
              {
                module?.chapters[Number(chapterId)].slides[Number(slideId)]
                  .title
              }
            </Text>
            <br />
            <Text style="label">chapter — </Text>
            <Text style="code">
              {module?.chapters[Number(chapterId)].title}
            </Text>
            <br />
            <br />
            <br />
            <Text style="muted">slide type</Text>
            <br />
            <Text style="large">
              {module?.chapters[Number(chapterId)].slides[Number(slideId)].type}
            </Text>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    console.log('Slide unavailable!');
    return <Text style="code">Unavailable slide</Text>;
  }
};

export default SlidePage;
