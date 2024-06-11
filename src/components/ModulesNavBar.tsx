// * Base import
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

// Types import
import { Module } from '../types/ModulesTypes';

// Components import
import Button from './Button';
import Divider from './Divider';
import Text from './Text';

// Icons import
import { Book, BookCheck, BookOpen, Lightbulb, Dot } from 'lucide-react';
import { getModuleProgress } from '../lib/moduleUtils';

function progressToDisplay(
  inputProgress: number,
  forceDisplay: boolean = false
) {
  if (!forceDisplay) {
    if (inputProgress === 0) return;
    if (inputProgress === 1) return;
  }
  return (
    <>
      <Text style="code">{Math.round(inputProgress * 100)}&nbsp;%</Text>
    </>
  );
}

interface ModulesNavBarProps {
  modules: Module[];
}

const ModulesNavBar: React.FC<ModulesNavBarProps> = ({ modules }) => {
  return (
    <div className="flex flex-row items-stretch gap-6 overflow-x-auto no-scrollbar">
      <div className="flex flex-col gap-2 grow">
        <Divider>Modules</Divider>
        <nav aria-label="Modules menu" className="flex flex-row gap-6">
          {modules.map((module) => {
            if (module.slug === 'thesis') {
              return;
            }
            return (
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
                      <Text style="large">{module.name}</Text>
                      <Text style="code">
                        {isActive
                          ? progressToDisplay(getModuleProgress(module), true)
                          : progressToDisplay(getModuleProgress(module))}
                      </Text>
                    </div>
                    <div className="m-4">
                      {isActive ? (
                        <BookOpen size={24} strokeWidth={1.75} />
                      ) : getModuleProgress(module) === 1 ? (
                        <BookCheck size={24} strokeWidth={1.75} />
                      ) : (
                        <Book size={24} strokeWidth={1.75} />
                      )}
                    </div>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center">
        <Dot size={20} strokeWidth={1.75} />
      </div>
      <div>
        <Button variant="disabled" disabled className="h-full">
          <Lightbulb size={24} strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
};

export default ModulesNavBar;
