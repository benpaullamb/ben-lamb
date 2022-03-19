import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';
import classNames from 'classnames';

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const links = [
    {
      to: '/',
      label: 'Home',
    },
    {
      to: 'skills',
      label: 'Skills',
    },
    {
      to: 'experience',
      label: 'Experience',
    },
    {
      to: 'projects',
      label: 'Projects',
    },
    {
      to: 'education',
      label: 'Education',
    },
    {
      to: 'contact',
      label: 'Contact',
    },
    {
      to: 'interests',
      label: 'Interests',
    },
  ];

  return (
    <nav className="w-full p-8 absolute top-0">
      <div className="container mx-auto mb-2 md:mb-0 flex justify-end items-center">
        {/* Desktop/tablet menu */}
        <div className="hidden md:flex items-center">
          {links.map(({ to, label }, i) => (
            <Link to={to} key={to} className={classNames('text-xl text-white', { 'mr-8': i !== links.length - 1 })}>
              {label}
            </Link>
          ))}
        </div>

        <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="md:hidden">
          <MenuIcon className="w-6 text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="w-full flex md:hidden flex-wrap gap-2">
          {links.map(({ to, label }, i) => (
            <Link
              to={to}
              onClick={() => setShowMobileMenu(false)}
              key={to}
              className="px-2 border border-white text-xl text-white">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
