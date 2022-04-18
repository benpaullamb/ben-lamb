import { DateTime } from 'luxon';
import me from '../me.json';
import Section from '../components/Section';
import { ReactComponent as IBMLogo } from '../assets/companies/IBM.svg';
import { ReactComponent as IglooLogo } from '../assets/companies/IglooEnergy.svg';
import { ReactComponent as ENSEKLogo } from '../assets/companies/ENSEK.svg';

export default function Experience() {
  const logos = [
    <ENSEKLogo className="w-16 pt-2" />,
    <IglooLogo className="w-16 pt-2 text-[#FF0099]" />,
    <IBMLogo className="w-16 pt-2" />,
  ];

  const formatDate = (isoDate) => {
    if (!isoDate) {
      return;
    }
    const date = DateTime.fromISO(isoDate);
    return date.toFormat('LLL y');
  };

  const formatDuration = (startIso, endIso) => {
    const startDate = DateTime.fromISO(startIso);
    const endDate = endIso ? DateTime.fromISO(endIso) : DateTime.now();
    const duration = endDate.diff(startDate);

    const totalMonths = Math.floor(duration.as('months'));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const output = [];
    if (years > 0) {
      output.push(`${years} yr${years > 1 ? 's' : ''}`);
    }
    if (months > 0) {
      output.push(`${months} mo${months > 1 ? 's' : ''}`);
    }

    return output.join(' ');
  };

  return (
    <Section title="Experience" className="bg-zinc-800">
      <div className="md:grid grid-cols-3 gap-8">
        {me.experience.map((job, i) => (
          <div className="mb-4 last:mb-0 grid grid-cols-[auto,1fr] gap-4" key={job.company}>
            {logos[i]}
            <div>
              <span className="block font-bold">{job.title}</span>
              <span className="block">{job.company}</span>
              <span>
                {formatDate(job.startDate)} - {formatDate(job.endDate) || 'Present'}
              </span>
              <span className="inline-block mx-1 font-bold">&middot;</span>
              <span>{formatDuration(job.startDate, job.endDate)}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
