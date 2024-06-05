import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';

const PresMotivationList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2" className="text-right">
          Tak co
        </Text>
        <Text style="h2" className="mr-8 text-right">
          teda budu dělat
        </Text>
        <Text style="h2" className="mr-16 text-right">
          na tu bakalářku?
        </Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Chci se naučit něco nového!</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">
                Kódovat v nějakém aktuálním JavaSkriptovém frameworku.
              </Text>
            </li>
            <li className="py-2">
              <Text style="p">Time management</Text>
            </li>
            <li className="pt-2">
              <Text style="p">*Zvládat stress*</Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Nemám úplně dobrý cit pro barevnost</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Chci porozumět více barevné teorii.</Text>
            </li>
            <li className="py-2">
              <Text style="p">
                Zkouším různé webové nástroje, ale nic mi osobně úplně
                nevyhovuje.
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Je mi nepříjemný vizuální smog</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Plakátové plochy ve městech</Text>
            </li>
            <li className="py-2">
              <Text style="p">Online prostředí různých FYP</Text>
            </li>
            <li className="pt-2">
              <Text style="p">Zhoršená schopnost pozornosti</Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresMotivationList;
