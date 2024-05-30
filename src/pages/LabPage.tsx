import { Outlet } from 'react-router-dom';
import ToolsNavBar from '../components/ToolsNavBar';
import { CircleHelp } from 'lucide-react';
import Text from '@/components/Text';
import { useState } from 'react';
import { tools } from '@/data/tools';
import { Tool } from '@/types/ToolsTypes';
import { getToolBySlug } from '@/lib/toolUtils';
import Workspace from '@/components/Workspace';
import { PalettesProvider } from '@/contexts/PalettesContext';

export default function LabPage() {
  const [currentTool, setCurrentTool] = useState<Tool>(
    getToolBySlug(location.pathname.split('/')[2])
  );
  if (!currentTool) setCurrentTool(tools[0]);

  return (
    <PalettesProvider>
      <div className="pt-12 pb-16 h-full flex flex-col">
        <div className="mx-12">
          <ToolsNavBar setCurrentTool={setCurrentTool} />
        </div>
        <div className="min-h-12" />
        <div className="mx-12 flex-1 min-h-0">
          <div className="grid gap-6 grid-cols-12 h-full">
            <div className="relative col-start-1 col-end-4 my-4 min-h-0 max-h-full">
              <Workspace />
            </div>
            <div className="relative bg-theme-1 border border-theme-6 rounded-md col-start-4 col-span-full min-h-96 p-16">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
        <div className="mx-12 flex justify-end mt-4">
          <div className="flex flex-row gap-1 text-theme-9">
            <CircleHelp size={20} strokeWidth={1.75} />
            <Text style="muted" className="text-inherit">
              How does {currentTool.name} work?
            </Text>
          </div>
        </div>
      </div>
    </PalettesProvider>
  );
}
