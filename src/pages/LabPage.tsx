import { Outlet } from 'react-router-dom';
import ToolsNavBar from '../components/ToolsNavBar';
import { useState } from 'react';
import { tools } from '../data/tools';
import { Tool } from '../types/ToolsTypes';
import { getToolBySlug } from '../lib/toolUtils';
import Workspace from '../components/Workspace';
import { PalettesProvider } from '../contexts/PalettesContext';
import HelpButton from '../components/HelpButton';

export default function LabPage() {
  const [currentTool, setCurrentTool] = useState<Tool>(
    getToolBySlug(location.pathname.split('/')[2])
  );
  if (!currentTool) setCurrentTool(tools[0]);

  return (
    <main className="bg-theme-2 rounded-3xl flex flex-col grow overflow-hidden h-[calc(100vh-2.5rem)]">
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
              <div className="relative col-start-4 col-span-full min-h-96 p-16 overflow-auto">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
          <div className="mx-12 flex justify-end mt-4">
            <HelpButton>How does {currentTool.name} work?</HelpButton>
          </div>
        </div>
      </PalettesProvider>
    </main>
  );
}
