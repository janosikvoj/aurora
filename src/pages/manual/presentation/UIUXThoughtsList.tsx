import Button from '@/components/Button';
import ShaderGradientBackground from '@/components/ShaderGradientBackground';
import Text from '@/components/Text';
import { changeTheme } from '@/lib/theme';

const UIUXThoughtsList = () => {
  return (
    <div className="absolute inset-0 p-16 flex flex-col">
      <ShaderGradientBackground
        fill
        className="-top-4 -bottom-4"
        mask="linear-gradient(45deg, transparent 50%, rgba(1,1,1,0.33) 80%, black 100%)"
      />
      <div className="grow">
        <Text style="h2">Informace k UI a UX aplikace</Text>
      </div>
      <div className="grid grid-cols-6 gap-8 items-start">
        <div className="col-span-2">
          <Text style="h4">Knihovny</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Komponenty shadcn</Text>
            </li>
            <li className="py-2">
              <Text style="p">Tailwind</Text>
            </li>
            <li className="py-2">
              <Text style="p">Ikony Lucide</Text>
            </li>
            <li className="pt-2">
              <Button
                variant="secondary"
                onClick={() => changeTheme(Math.floor(Math.random() * 30))}
              >
                Radix Colors
              </Button>
            </li>
          </ul>
        </div>
        <div className="col-span-2">
          <Text style="h4">Omezení</Text>
          <br />
          <ul className="divide-y divide-theme-3">
            <li className="pb-2">
              <Text style="p">Komplexní vizuály nazvládnu spracovat</Text>
            </li>
            <li className="pt-2">
              <Text style="p">
                Vybraný framework funguje na systému komponentů
              </Text>
            </li>
          </ul>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default UIUXThoughtsList;
