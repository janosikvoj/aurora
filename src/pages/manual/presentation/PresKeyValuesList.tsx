import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const PresKeyValuesList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Klíčové body</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Výstup pro uživatele</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">
                Výstupem jsou kvalitní barevné palety, podložené získaným
                přehledem v daném oboru.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">
                Ten zajistí průchod populárně naučným manuálem.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Zvýšit povědomí o teorii barev</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li>
              <Text style="p">
                Jediný způsob, jak bojovat proti vizuálnímu smogu je edukovat
                zájemce o tvoření grafiky.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Příjemné UX a UI</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Konzistentní design</Text>
            </li>
            <li className="py-2">
              <Text style="p">Pochopitelná, jednoduchá a obratná navigace</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Možnost používat nástroj i *profesionálněji*.
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresKeyValuesList;
