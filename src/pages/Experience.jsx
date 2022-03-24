import Banner from '../components/Banner';
import Section from '../components/Section';
import Job from '../components/Job';
import kyotoImage from '../assets/backgrounds/kyoto-unsplash.jpg';
import { ReactComponent as IBMImage } from '../assets/companies/IBM.svg';
import { ReactComponent as IglooImage } from '../assets/companies/IglooEnergy.svg';
import { ReactComponent as ENSEKImage } from '../assets/companies/ENSEK.svg';
import PrevNextButtons from '../components/PrevNextButtons';

export default function Experience(props) {
  const jobs = [
    {
      role: 'Software Engineer',
      company: 'ENSEK',
      companyImage: <ENSEKImage className="w-24" />,
      startDate: '01/11/2021',
      tech: [
        {
          name: '',
          image: '',
        },
      ],
      achievements: ['Built multiple items of a new component library in Storybook.'],
    },
    {
      role: 'Full-Stack Engineer',
      company: 'Igloo Energy',
      companyImage: <IglooImage className="w-24 text-[#f09]" />,
      startDate: '01/12/2020',
      endDate: '01/11/2021',
      tech: [
        {
          name: '',
          image: '',
        },
      ],
      achievements: [
        'Developed dynamic, responsive web pages working with designers, product managers, and stakeholders up to the director level. Wrote frontend tests, cross-browser tested, and maintained these pages.',
        'Built microservices/servers that integrated with multiple CRM services, unit tested, and used an ORM with a SQL database. Automated deployment with AWS CDK.',
        'Designed and created a dynamic system that allowed marketing staff to construct web pages in a CMS, saving staff hours/days of work for each page.',
        'Played a key role in building a digital customer journey that is paramount to the sale of heat pumps, resulting in a 300% increase in conversion.',
        'Discovered and set a standard for building email templates. Automated sending emails.',
        'Agile team (remote) using both Kanban and Scrum. Performed code reviews and pair programming.',
      ],
    },
    {
      role: 'Rapid Prototype Developer',
      company: 'IBM',
      companyImage: <IBMImage className="w-24 text-[#0f62fe]" />,
      startDate: '01/06/2018',
      endDate: '01/06/2019',
      tech: [
        {
          name: '',
          image: '',
        },
      ],
      achievements: [
        'Agile team using Scrum.',
        'Developed a “smart EV charging” mobile-first web app.',
        'Built a frontend for a large accounting firms transcript analyser.',
        'Created and maintained a production CRM tool (>100 users).',
        'Made a visitor registration system prototype that I presented to a Chief Executive.',
        'Re-built my own teams internal website.',
        'Worked independently with two external clients and on three IBM internal projects.',
        'Participated in, and taught on, multiple IBM technical bootcamps.',
      ],
    },
  ];

  return (
    <>
      <Banner title="Experience" subtitle="IBM | Igloo | ENSEK" image={kyotoImage} />

      <Section className="flex justify-center">
        <div>
          {jobs.map((job, i) => (
            <Job key={`${job.role}-${job.company}`} {...job} className="mb-8 last:mb-0" />
          ))}
        </div>
      </Section>

      <PrevNextButtons prev="/skills" prevLabel="Skills" next="/projects" nextLabel="Projects" />
    </>
  );
}
