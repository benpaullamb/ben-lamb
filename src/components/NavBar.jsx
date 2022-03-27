import { useState } from 'react';
import { Link, animateScroll } from 'react-scroll';
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
      to: 'education',
      label: 'Education',
    },
    {
      to: 'projects',
      label: 'Projects',
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

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <nav className="w-full fixed top-0 z-20 bg-gray-100/50 shadow-md">
      {/* App bar */}
      <div className="w-full p-4 backdrop-blur container mx-auto">
        {/* Desktop menu */}
        <div className="hidden md:flex justify-between items-center">
          <button onClick={scrollToTop} className="text-gray-800 text-lg font-medium">
            Ben Lamb
          </button>

          <div>
            {links.map(({ to, label }, i) => (
              <Link
                to={to}
                smooth
                key={to}
                className="mr-8 last:mr-0 cursor-pointer uppercase text-gray-800 font-medium">
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

          <button onClick={scrollToTop} className="cursor-pointer text-gray-800 text-lg font-medium">
            Ben Lamb
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {showMobileMenu && (
        <div
          onClick={touchOffMobileMenu}
          className="w-full h-full md:hidden 
            fixed top-0 left-0 z-30 overflow-hidden 
            bg-gray-500/50">
          <div className="p-8 z-40 shadow-xl bg-white">
            <button onClick={() => setShowMobileMenu(false)} className="absolute top-8 right-8 z-20">
              <XIcon className="w-6" />
            </button>

            {links.map(({ to, label }, i) => (
              <Link
                to={to}
                smooth
                onClick={() => setShowMobileMenu(false)}
                key={to}
                className="mb-4 last:mb-0 block cursor-pointer text-xl">
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
