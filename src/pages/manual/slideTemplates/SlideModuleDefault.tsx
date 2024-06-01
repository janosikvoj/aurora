import Text from '@/components/Text';
import { Chapter, Slide } from '@/types/ModulesTypes';

interface SlideModuleProps {
  slide: Slide;
  chapter: Chapter;
}

const SlideModuleDefault: React.FC<SlideModuleProps> = () => {
  return (
    <div className="absolute inset-16 w-1/3">
      <Text style="h1" className="mb-2">
        Empty slide template
      </Text>
      <Text style="lead">App is still in development</Text>
      <br />
      <br />
      <Text style="muted">
        Please go to the start of the module if you want to see slide templates.
      </Text>
    </div>
  );
};

export default SlideModuleDefault;
