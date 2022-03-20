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
    <div className={className}>
      <div className="mb-4 grid grid-cols-[auto_1fr] gap-4">
        <div className="pt-2">{companyImage}</div>
        <div>
          <span className="block font-bold">{role}</span>
          <span className="block text-sm">{company}</span>
          <span className="block text-sm">
            {formattedStart} - {endDate === 'present' ? 'Present' : formattedEnd}
            {endDate !== 'present' && ` - ${years ? formattedYears : formattedMonths}`}
          </span>
        </div>
      </div>

      <div>
        {tech.map(({ name, image }) => (
          <div key={name}>
            {image}
            <span>{name}</span>
          </div>
        ))}
      </div>

      <ul className="pl-4 list-disc">
        {achievements.map((point, i) => (
          <li key={`point-${i}`} className="mb-2">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
