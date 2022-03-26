import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

export default function NavBar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const links = [
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
  ];

  const touchOffMobileMenu = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setShowMobileMenu(false);
    }
  };

  return (
    <nav className="w-full absolute top-0 bg-gray-100/50 shadow-md">
      {/* App bar */}
      <div className="w-full p-4 backdrop-blur container mx-auto">
        {/* Desktop menu */}
        <div className="hidden md:flex justify-between items-center">
          <Link to="/" className="text-gray-800 text-lg font-medium">
            Ben Lamb
          </Link>

          <div>
            {links.map(({ to, label }, i) => (
              <Link to={to} key={to} className="mr-8 last:mr-0 uppercase text-gray-800 font-medium">
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden justify-between items-center">
          <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <MenuIcon className="w-6 text-gray-800" />
          </button>

          <Link to="/" className="text-gray-800 text-lg font-medium">
            Ben Lamb
          </Link>
        </div>
      </div>

      {/* Mobile menu links */}
      {showMobileMenu && (
        <div
          onClick={touchOffMobileMenu}
          className="w-full h-full md:hidden 
            fixed top-0 left-0 z-10 overflow-hidden 
            bg-gray-500/50">
          <div className="p-8 z-20 shadow-xl bg-white">
            <button onClick={() => setShowMobileMenu(false)} className="absolute top-8 right-8 z-20">
              <XIcon className="w-6" />
            </button>

            {links.map(({ to, label }, i) => (
              <Link to={to} onClick={() => setShowMobileMenu(false)} key={to} className="mb-4 last:mb-0 block text-xl">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
