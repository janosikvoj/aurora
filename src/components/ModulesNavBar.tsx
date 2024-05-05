// * Base import
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
// Types import
import Module from '../types/Module';

// Components import
import Button from './ui/Button';
import Divider from './ui/Divider';

// Icons import
import { Book, BookCheck, BookOpen, Lightbulb, Dot } from 'lucide-react';

function progressToDisplay(inputProgress: number) {
  if (inputProgress === 0) return;
  if (inputProgress === 1) return;
  return (
    <>
      <br />
      <span className="font-mono font-medium text-sm leading-5 text-theme-9">
        {Math.round(inputProgress * 100)}&nbsp;%
      </span>
    </>
  );
}

interface ModulesNavBarProps {
  modules: Module[];
}

const ModulesNavBar: React.FC<ModulesNavBarProps> = ({ modules }) => {
  return (
    <div className="flex flex-row items-stretch gap-6">
      <div className="flex flex-col gap-2 grow">
        <Divider>Moduly</Divider>
        <nav aria-label="Modules menu" className="flex flex-row gap-6">
          {modules.map((module) => (
            <NavLink
              key={module.id}
              to={'/manual/' + module.slug}
              className={({ isActive }) =>
                cn(
                  'flex basis-1/5 flex-row items-start justify-between w-full h-full text-[0] rounded-md',
                  isActive ? 'bg-theme-5' : 'bg-theme-3 hover:bg-theme-4'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className="mx-4 my-2 flex flex-col items-start">
                    <span className="text-lg leading-6 font-medium">
                      {module.name}
                    </span>
                    {progressToDisplay(module.progress)}
                  </div>
                  <div className="m-4">
                    {isActive ? (
                      <BookOpen size={24} strokeWidth={1.75} />
                    ) : module.progress === 1 ? (
                      <BookCheck size={24} strokeWidth={1.75} />
                    ) : (
                      <Book size={24} strokeWidth={1.75} />
                    )}
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center">
        <Dot size={20} strokeWidth={1.75} />
      </div>
      <div>
        <Button variant="ghost" className="h-full">
          <Lightbulb size={24} strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
};

export default ModulesNavBar;
