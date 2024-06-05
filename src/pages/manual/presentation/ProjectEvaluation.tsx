import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const ProjectEvaluation = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Zhodnocení projektu</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Shrnutí</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Navrhnutý kompletní koncept aplikace</Text>
            </li>
            <li className="py-2">
              <Text style="p">Vytvořený základní funkční prototyp</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">+</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Komplexní komponenty</Text>
            </li>
            <li className="py-2">
              <Text style="p">Variabilní barevný mód</Text>
            </li>
            <li className="py-2">
              <Text style="p">Systematičnost</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Škálovatelnost</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">-</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Time management</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Přílišná standardizace</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectEvaluation;
