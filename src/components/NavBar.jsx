import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
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
      <div className="container mx-auto">
        {/* Desktop/tablet menu */}
        <div className="hidden md:flex justify-end items-center">
          <div className="bg-gray-400/50">
            <div className="p-4 border-2 border-white backdrop-blur">
              {links.map(({ to, label }, i) => (
                <Link
                  to={to}
                  key={to}
                  className={classNames('text-xl text-white font-bold', { 'mr-5': i !== links.length - 1 })}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile burger menu */}
        <div className="flex md:hidden justify-start items-center">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MenuIcon className="w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div
          className="w-full p-8 md:hidden 
            absolute top-0 left-0 z-10 
            shadow-xl bg-white">
          <button onClick={() => setShowMobileMenu(false)} className="absolute top-8 right-8 z-20">
            <XIcon className="w-6" />
          </button>

          {links.map(({ to, label }, i) => (
            <Link
              to={to}
              onClick={() => setShowMobileMenu(false)}
              key={to}
              className={classNames('block text-xl', { 'mb-4': i !== links.length - 1 })}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
