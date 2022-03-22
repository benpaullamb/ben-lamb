import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function PrevNextButtons({ prev, prevLabel, next, nextLabel, className }) {
  return (
    <div className={`mt-12 md:mt-16 md:flex justify-center ${className}`}>
      <div className="md:w-4/6 flex justify-between">
        <Link to={prev}>
          <div className="flex items-center">
            <ChevronLeftIcon className="w-6 mr-2" />
            <span>Previous</span>
          </div>
          <span className="mt-2 block text-3xl">{prevLabel}</span>
        </Link>

        <Link to={next}>
          <div className="flex justify-end items-center">
            <span>Next</span>
            <ChevronRightIcon className="w-6 ml-2" />
          </div>
          <span className="mt-2 block text-3xl">{nextLabel}</span>
        </Link>
      </div>
    </div>
  );
}
