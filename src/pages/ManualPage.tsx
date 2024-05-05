// * Base imports
import { Outlet, useLoaderData } from 'react-router-dom';

// Types import
import Module from '../types/Module';

// Components import
import ModulesNavBar from '../components/ModulesNavBar';

// UI components import
import Button from '../components/ui/Button';
import Label from '../components/ui/Label';

// Icons import
import { ArrowBigRight, ArrowBigLeft } from 'lucide-react';

export default function ManualPage() {
  const { modules } = useLoaderData() as { modules: Module[] };
  console.log(modules);

  return (
    <div className="my-12 text-theme-12">
      <div className="mx-12">
        <ModulesNavBar modules={modules}></ModulesNavBar>
      </div>
      <div className="h-12" />
      <div className="mx-12">
        <div className="grid gap-6 grid-cols-12">
          <div className="relative col-start-1 col-end-3 my-4">
            <div className="absolute w-[calc(100%-1rem)] ml-4 h-full border-l border-y border-theme-6 rounded-l-2xl" />
            <div className="absolute w-[calc(100%-1rem)] ml-[calc(1rem-1px)] h-[2rem] max-h-[calc(100%-2rem)] border-l-2 border-t-2 border-theme-6 rounded-tl-2xl" />
            <div className="absolute -translate-y-1/2	right-0 bg-theme-2 pl-4">
              <Label>Průběh</Label>
            </div>
            <div className="relative h-full py-4">
              <button className="min-h-8 rounded-md flex flex-row hover:bg-theme-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="bg-theme-11 h-2 w-2 rounded-full" />
                </div>
                <div className="mx-2 my-1">
                  <div className="mt-0.5 text-sm text-theme-11">
                    Barvy kolem nás
                  </div>
                </div>
              </button>

              <div className="bg-red-3">Barvy kolem nás</div>
              <div className="bg-red-3">Barvy kolem nás</div>
            </div>
          </div>
          <div className="bg-theme-1 border border-theme-6 rounded-md col-start-3 col-span-full min-h-96"></div>
        </div>
      </div>
      <div className="mx-12">
        <div className="text-lg">Manuál</div>
        <Button variant="primary">
          Pokračovat
          <ArrowBigRight size={20} strokeWidth={1.75} />
        </Button>
        <Button variant="secondary">
          <ArrowBigLeft size={20} strokeWidth={1.75} />
          Vrátit se
        </Button>
        <Outlet />
      </div>
    </div>
  );
}
