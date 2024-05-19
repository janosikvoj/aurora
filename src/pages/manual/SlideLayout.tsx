import { useParams } from 'react-router-dom';
import Text from '../../components/ui/Text';
import Button from '../../components/ui/Button';

import { slideAvailable } from '../../lib/moduleNavigation';
import { getModuleBySlug } from '../../lib/utils';
import {
  getModuleLength,
  getModuleProgress,
  getSlideLinearIndex,
} from '../../lib/moduleUtils';

// debug
const debugMode: boolean = false;

const TextTester = () => {
  return (
    <>
      <Text style="h1">Heading 1</Text>
      <Text style="h2">Heading 2</Text>
      <Text style="h3">Heading 3</Text>
      <Text style="h4">Heading 4</Text>
      <Text style="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui erat,
        consectetur quis porta sed, semper in dolor. Cras tempor, erat eu dictum
        semper, enim erat ornare orci, nec auctor erat diam vitae orci.
        Suspendisse tempus vel augue eu commodo. Etiam placerat dapibus felis,
        ut aliquam tortor venenatis non.
      </Text>
      <br />
      <Text style="lead">Základní info</Text>
      <br />
      <Text style="large">Knihovny</Text>
      <br />
      <Text style="small">PANTONE, Tailwind, Web safe</Text>
      <Button>
        <Text style="small" className="text-theme-1">
          Submit
        </Text>
      </Button>
      <br />
      <Text style="muted">Jak funguje Ladění.</Text>
      <br />
      <Text style="code">Název palety</Text>
      <br />
      <Text style="label">Label</Text>
      <br />
    </>
  );
};

const SlidePage = () => {
  const { moduleSlug, chapterId, slideId } = useParams();

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
      <div>
        <Text style="lead">Current slide</Text>
        <Text style="h1">
          {module?.chapters[Number(chapterId)].slides[Number(slideId)].title}
        </Text>
        <Text style="muted">module — </Text>
        <Text style="code">{module?.name}</Text>
        <br />
        <Text style="muted">chapter — </Text>
        <Text style="code">{module?.chapters[Number(chapterId)].title}</Text>
        <br />
        <Text style="muted">slide — </Text>
        <Text style="code">
          {module?.chapters[Number(chapterId)].slides[Number(slideId)].title}
        </Text>
        <br />
        {false && <TextTester />}
      </div>
    );
  } else {
    console.log('Slide unavailable!');
    return <Text style="code">Unavailable slide</Text>;
  }
};

export default SlidePage;
