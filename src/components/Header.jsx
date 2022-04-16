import abstractBg from '../assets/backgrounds/red-abstract.jpg';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Header() {
  return (
    <header
      style={{ backgroundImage: `url("${abstractBg}")` }}
      className="h-full p-8 flex flex-col justify-center md:items-center bg-center bg-no-repeat bg-cover">
      <h1 className="text-8xl md:text-9xl">Ben Lamb</h1>
      <span className="mt-4 text-xl md:text-2xl">Fullstack Software Engineer</span>

      <div className="w-full p-8 absolute bottom-0 left-0 flex justify-center">
        <ChevronDownIcon className="w-8 md:w-12" />
      </div>
    </header>
  );
}
