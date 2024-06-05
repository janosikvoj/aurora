import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const SlideModuleIntro = () => {
  return (
    <div className="absolute inset-0">
      <ShaderGradientBackground fill className="-top-4 -bottom-4" />
      <div className="absolute z-10 inset-16 flex flex-col">
        <div className="grow flex flex-col justify-center">
          <div className="flex flex-row gap-16 justify-center items-center mb-8">
            <Text style="label">Module</Text>
            <Text
              style="h1"
              className="uppercase font-black text-9xl break-all flex min-w-0"
            >
              Obhajoba
            </Text>
            <Text style="label">Module</Text>
          </div>
          <Text style="h2" className="text-center">
            Webový nástroj pro kreativní jedince
          </Text>
        </div>
        <div className="flex flex-row text-center gap-12 justify-center text-theme-12">
          <div>
            <Text style="muted" className="text-inherit">
              Autor
            </Text>
            <br />
            <Text style="code" className="text-inherit">
              Vojtěch Janošík
            </Text>
          </div>
          <div>
            <Text style="muted" className="text-inherit">
              Vedoucí
            </Text>
            <br />
            <Text style="code" className="text-inherit">
              MgA. Michal Ščuglík
            </Text>
          </div>
          <div>
            <Text style="muted" className="text-inherit">
              Oponent
            </Text>
            <br />
            <Text style="code" className="text-inherit">
              MgA. Pavel Krutil
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideModuleIntro;
