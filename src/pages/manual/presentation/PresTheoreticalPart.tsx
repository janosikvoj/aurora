import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const PresTheoreticalPart = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Teoretická část</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Barva</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Teorie barev</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Psychologie barev a kontext vizuální komunikace
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Webové technologie</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Základy = HTML, CSS, JS</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Frameworky = React, Angular, Vue, …</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Webové nástroje</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Různé typy</Text>
            </li>
            <li className="py-2">
              <Text style="p">Všechno se přesouvá do cloudu</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Nástroje pro designéry</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresTheoreticalPart;
