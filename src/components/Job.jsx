import { DateTime } from 'luxon';

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
    <div className={`${className}`}>
      <div className="grid grid-cols-[auto_1fr] gap-8">
        <div className="pt-2">{companyImage}</div>

        <div>
          <span className="block text-lg font-bold">{role}</span>
          <span className="block">{company}</span>
          <span className="block">
            {formattedStart} - {endDate === 'present' ? 'Present' : formattedEnd}
            <br className="md:hidden" />
            {endDate !== 'present' && ` (${years ? formattedYears : formattedMonths})`}
          </span>
        </div>
      </div>
    </div>
  );
}
