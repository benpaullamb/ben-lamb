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
    <nav className="p-4 relative bg-primary-900 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="shrink-0 text-white text-2xl">
          Ben Lamb
        </Link>

        {/* Desktop/tablet menu */}
        <div className="hidden md:flex items-center text-white">
          {links.map(({ to, label }, i) => (
            <Link to={to} key={to} className={classNames({ 'mr-4': i !== links.length - 1 })}>
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
        <div className="w-full p-4 absolute top-full left-0 flex flex-col z-10 bg-primary-100 shadow-lg md:hidden">
          {links.map(({ to, label }, i) => (
            <Link
              to={to}
              onClick={() => setShowMobileMenu(false)}
              key={to}
              className={classNames('text-lg', { 'mb-4': i !== links.length - 1 })}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
