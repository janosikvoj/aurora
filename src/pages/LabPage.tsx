import { Outlet } from 'react-router-dom';
import { ToolsNavBar } from '../components/ToolsNavBar';
import { Plus, Trash } from 'lucide-react';
import Button from '../components/ui/custom/Button';

import PaletteSettings from '@/components/PaletteSettings';

export default function LabPage() {
  return (
    <div className="pt-12 pb-16 h-full flex flex-col">
      <div className="mx-12">
        <ToolsNavBar />
      </div>
      <div className="min-h-12" />
      <div className="mx-12 flex-1 min-h-0">
        <div className="grid gap-6 grid-cols-12 h-full">
          <div className="relative col-start-1 col-end-4 my-4 min-h-0 max-h-full">
            <PaletteSettings />
            <div>workspace</div>
            <div className="absolute bottom-0 w-full flex flex-row gap-2 h-16">
              <Button
                variant="secondary"
                className="h-full grow justify-center"
              >
                <Trash size={20} strokeWidth={1.75} />
              </Button>
              <Button
                variant="secondary"
                className="h-full grow justify-center"
              >
                <Plus size={20} strokeWidth={1.75} />
              </Button>
            </div>
          </div>
          <div className="relative bg-theme-1 border border-theme-6 rounded-md col-start-4 col-span-full min-h-96 p-16">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="mx-12">
        <div className="grid gap-6 grid-cols-12">
          <div className="col-start-1 col-end-3"></div>
          <div className="col-start-3 col-span-full px-8 pt-3 flex flex-row justify-between">
            <div className="flex flex-row gap-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
