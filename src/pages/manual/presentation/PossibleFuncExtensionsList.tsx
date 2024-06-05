import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const PossibleFuncExtensionsList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2" className="text-center">
          Nápady na další funkcionalitu a rozšíření
        </Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2"></div>
        <div className="col-span-2">
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">
                Cloudové úložiště a systém pro přenášení uživatelem uložených
                palet mezi zařízeními.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">
                Propracovaná mobilní verze pro případné testování barev na malé
                obrazovce a zlepšení UX manuálu.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">Lokalizace do více jazyků.</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Zdokonalení funkcí pro práci se sadami barev.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default PossibleFuncExtensionsList;
