import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const PrototypeInfoList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Co to vůbec znamená?</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Obsahuje</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">
                Důležité screeny a komponenty, díky kterým je možno testovat a
                zdokonalovat návrh lépe než jen ve Figmě, kde jsou omezené
                nástroje.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">
                Základní verzi nástroje Generate a Fine-tune
              </Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Templatové slidy pro užití do prezentací v modulech.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Neobsahuje</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Obsah jednotlivých modulů v manuálu.</Text>
            </li>
            <li className="py-2">
              <Text style="p">
                Složitější funkcionalitu časově a komplexitou náročnou na vývoj.
              </Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Podstránku About, kde bude postupně doplněné vysvětlení konceptu
                a pozadí aplikace pro případné uživatele.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default PrototypeInfoList;
