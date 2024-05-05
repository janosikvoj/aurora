import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function NavBar() {
  const links: { id: number; title: string; path: string }[] = [
    {
      id: 1,
      title: 'Manuál',
      path: '/manual',
    },
    {
      id: 2,
      title: 'Laboratoř',
      path: '/lab',
    },
    {
      id: 3,
      title: 'Koncept',
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
      <nav
        aria-label="Application tabs"
        className="text-theme-11 font-sans text-sm font-medium flex flex-row"
      >
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
          <span className="font-black tracking-[0.5em] mr-[-0.5em] uppercase">
            Aurora
          </span>
          Kurátor
        </NavLink>

        <div className="bg-theme-6 w-px mx-4"></div>

        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className={({ isActive }) =>
              cn(
                'flex flex-row gap-4',
                buttonClasses.default,
                isActive ? buttonClasses.active : buttonClasses.inactive
              )
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
