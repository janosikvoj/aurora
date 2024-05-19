import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

import Text from './ui/Text';

export default function NavBar() {
  const links: { id: number; title: string; path: string }[] = [
    {
      id: 1,
      title: 'Manual',
      path: '/manual',
    },
    {
      id: 2,
      title: 'Laboratory',
      path: '/lab',
    },
    {
      id: 3,
      title: 'About',
      path: '/about',
    },
  ];

  const buttonClasses = {
    default: 'px-3 py-1.5 rounded-sm',
    inactive: 'hover:bg-theme-4 ease-out duration-150',
    active: 'bg-theme-2 text-theme-12',
  };

  return (
    <header className="px-12 py-4">
      <nav aria-label="Application tabs" className="flex flex-row">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            cn(
              'flex flex-row gap-4',
              buttonClasses.default,
              isActive ? buttonClasses.active : buttonClasses.inactive
            )
          }
        >
          <Text style="small">
            <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
              Aurora&nbsp;
            </span>
            Curator
          </Text>
        </NavLink>

        <div className="bg-theme-6 w-px mx-4"></div>

        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              cn(
                'flex flex-row gap-4 text-theme-11',
                buttonClasses.default,
                isActive ? buttonClasses.active : buttonClasses.inactive
              )
            }
          >
            <Text style="small" className="text-inherit">
              {link.title}
            </Text>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
