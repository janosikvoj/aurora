import { NavLink } from 'react-router-dom';
import Divider from './Divider';
import { tools } from '../data/tools';
import { cn } from '../lib/utils';
import Button from './Button';
import { Tool } from '@/types/ToolsTypes';

interface ToolsNavBarProps {
  setCurrentTool: React.Dispatch<React.SetStateAction<Tool>>;
}

const ToolsNavBar: React.FC<ToolsNavBarProps> = ({ setCurrentTool }) => {
  return (
    <div className="flex flex-col gap-2 grow">
      <Divider>Tools</Divider>
      <nav aria-label="Tools menu" className="flex flex-row gap-6">
        {tools.map((tool) =>
          tool.disabled ? (
            <div
              key={tool.id}
              className="flex basis-1/5 flex-row items-start justify-between w-full h-full text-[0] rounded-md"
            >
              <Button
                variant="disabled"
                className="w-full bg-inherit outline-theme-6 outline-dashed	outline-offset-[-1px] outline-1	"
                disabled
              >
                <tool.icon size={20} strokeWidth={1.75} className="min-w-5" />
                {tool.name}
              </Button>
            </div>
          ) : (
            <NavLink
              key={tool.id}
              to={'/lab/' + tool.slug}
              onClick={() => setCurrentTool(tool)}
              className={({ isActive }) =>
                cn(
                  'flex basis-1/5 flex-row items-start justify-between w-full h-full text-[0] rounded-md',
                  isActive ? 'bg-theme-5' : 'bg-theme-3 hover:bg-theme-4'
                )
              }
            >
              <Button variant="secondary" className="w-full bg-inherit">
                <tool.icon size={20} strokeWidth={1.75} className="min-w-5" />
                {tool.name}
              </Button>
            </NavLink>
          )
        )}
      </nav>
    </div>
  );
};

export default ToolsNavBar;
