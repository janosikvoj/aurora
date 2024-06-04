import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const SlideQAndA = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col justify-center gap-8">
      <div className="grid grid-cols-6">
        <div className="relative col-span-4 p-8 z-10">
          <Text style="h2" className="relative z-10 text-theme-1">
            "What's your favorite color?"
          </Text>
          <Text style="lead" className="relative z-10 text-theme-1">
            — A casual child
          </Text>
          <ShaderGradientBackground fill invert />
        </div>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-start-3 col-span-4 bg-theme-3 p-8">
          <Text style="h3">Live reaction</Text>
          <Text style="p">
            The other child might answer blue, red, yellow, or green. Colors are
            a pretty simple thing that even 4-year-olds can debate about. So why
            even bother with color theory?
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SlideQAndA;
