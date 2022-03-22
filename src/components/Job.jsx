import { DateTime } from 'luxon';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Job({
  role,
  company,
  companyImage,
  startDate,
  endDate = 'present',
  tech,
  achievements,
  className,
}) {
  const [showAchieves, setShowAchieves] = useState(false);

  const start = DateTime.fromFormat(startDate, 'dd/MM/y');
  const end = DateTime.fromFormat(endDate, 'dd/MM/y');

  const formattedStart = start.toFormat('LLL y');
  const formattedEnd = end.toFormat('LLL y');

  const duration = end.diff(start);
  const years = Number(duration.toFormat('y'));
  const months = Number(duration.toFormat('M'));

  const formattedYears = `${years} year${years > 1 ? 's' : ''}`;
  const formattedMonths = `${months} month${months > 1 ? 's' : ''}`;

  return (
    <div onClick={() => setShowAchieves(!showAchieves)} className={`cursor-pointer ${className}`}>
      <div className="grid grid-cols-[auto_1fr] gap-8">
        <div className="pt-2">{companyImage}</div>

        <div>
          <span className="block text-lg md:text-xl font-bold">{role}</span>
          <span className="block md:text-lg">{company}</span>
          <span className="block md:text-lg">
            {formattedStart} - {endDate === 'present' ? 'Present' : formattedEnd}
            {endDate !== 'present' && ` (${years ? formattedYears : formattedMonths})`}
          </span>

          <div className="ml-8 mt-2">
            <ChevronDownIcon className="w-6" />
          </div>

          {/* Desktop/tablet */}
          {showAchieves && (
            <ul className="hidden md:block pl-6 mt-2 list-disc">
              {achievements.map((achieve) => (
                <li className="mb-2 last:mb-0">{achieve}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Mobile */}
      {showAchieves && (
        <ul className="md:hidden pl-6 mt-2 list-disc">
          {achievements.map((achieve) => (
            <li className="mb-2 last:mb-0">{achieve}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
