import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

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
    <nav className="w-full absolute top-0 bg-gray-100/50 shadow-md">
      <div className="w-full p-4 backdrop-blur">
        <div className="container mx-auto">
          {/* Desktop/tablet menu */}
          <div className="hidden md:flex justify-end items-center">
            {links.map(({ to, label }, i) => (
              <Link to={to} key={to} className="mr-5 last:mr-0 uppercase text-gray-800 font-medium">
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile burger menu */}
          <div className="flex md:hidden justify-start items-center">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <MenuIcon className="w-6 text-gray-800" />
            </button>
          </div>
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
            <Link to={to} onClick={() => setShowMobileMenu(false)} key={to} className="mb-4 last:mb-0 block text-xl">
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
