import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const ConceptPointsList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Koncept</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Funkce a obsah</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Pravidelné konzultace</Text>
            </li>
            <li className="py-2">
              <Text style="p">Online rešerše</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Vlastní potřeby a potřeby kamarádů designérů
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Použité nástroje</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Notion</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Gemini</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Vysvětlení jazyku</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Návrh v ČJ</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Funkční prototyp v AJ</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConceptPointsList;
