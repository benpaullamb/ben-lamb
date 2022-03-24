import Banner from '../components/Banner';
import Section from '../components/Section';
import PrevNextButtons from '../components/PrevNextButtons';
import cityImage from '../assets/backgrounds/tokyo-city-unsplash.jpg';
import brunelCrest from '../assets/schools/brunel-crest.png';
import hewensLogo from '../assets/schools/hewens-college.png';

export default function Education(props) {
  const uniGrades = [
    {
      year: 4,
      modules: [
        {
          name: 'Artificial Intelligence',
          grade: 'A+',
        },
        {
          name: 'Dissertation',
          grade: 'A',
        },
        {
          name: 'Network Computing',
          grade: 'A',
        },
        {
          name: 'Advanced Topics',
          grade: 'A',
        },
        {
          name: 'Cybersecurity',
          grade: 'B',
        },
      ],
    },
    {
      year: 3,
      modules: [
        {
          name: 'Work Placement',
          grade: 'A*',
        },
      ],
    },
    {
      year: 2,
      modules: [
        {
          name: 'Group Project',
          grade: 'A*',
        },
        {
          name: 'Algorithms and their Applications',
          grade: 'A+',
        },
        {
          name: 'Networks and Operating Systems',
          grade: 'A+',
        },
        {
          name: 'Usability Engineering',
          grade: 'A+',
        },
        {
          name: 'Software Development and Management',
          grade: 'A',
        },
      ],
    },
    {
      year: 1,
      modules: [
        {
          name: 'Logic and Computation',
          grade: 'A*',
        },
        {
          name: 'Group Project',
          grade: 'A+',
        },
        {
          name: 'Information Systems and Organisations',
          grade: 'A+',
        },
        {
          name: 'Software Implementation',
          grade: 'A',
        },
        {
          name: 'Software Design',
          grade: 'A',
        },
        {
          name: 'Data and Information',
          grade: 'A',
        },
        {
          name: 'Fundamental Programming',
          grade: 'B+',
        },
      ],
    },
  ];

  const aLevelGrades = [
    {
      subject: 'Maths',
      grade: 'B',
    },
    {
      subject: 'Physics',
      grade: 'C',
    },
    {
      subject: 'Computing',
      grade: 'C',
    },
  ];

  const degreeClass = (grade) => (grade.startsWith('A') ? 1 : 2.1);

  return (
    <>
      <Banner title="Education" subtitle="1st in Computer Science" image={cityImage} />

      {/* Degree */}
      <Section>
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <img src={brunelCrest} alt="Brunel University Logo" className="w-16" />
          <div>
            <span className="mb-1 md:mb-0 block text-lg font-bold">Computer Science (1st)</span>
            <span className="mb-1 md:mb-0 block">
              Bachelor's Degree <br className="md:hidden" /> with First Class Honours
            </span>
            <span className="block">
              Brunel University London <br className="md:hidden" /> 2016-2020
            </span>
          </div>
        </div>

        <div className="mt-4 md:mt-8 grid md:grid-cols-[repeat(4,max-content)] gap-6 md:gap-8">
          {uniGrades.map(({ year, modules }) => (
            <div key={`uni-year-${year}`}>
              <span className="mb-1 block font-bold">Year {year}</span>
              {modules.map(({ name, grade }) => (
                <ul className="mb-2 last:mb-0" key={name}>
                  <li>
                    {name} ({degreeClass(grade)})
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <div className="px-8 container mx-auto">
        <hr />
      </div>

      {/* A Levels */}
      <Section>
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <img src={hewensLogo} alt="Hewens College Logo" className="w-16" />
          <div>
            <span className="block text-lg font-bold">A Levels</span>
            <span className="block">Hewens College 2014-2016</span>
          </div>
        </div>
        <ul className="mt-4">
          {aLevelGrades.map(({ subject, grade }) => (
            <li className="mb-2 last:mb-0" key={subject}>
              {subject} ({grade})
            </li>
          ))}
        </ul>
      </Section>

      <PrevNextButtons prev="/projects" prevLabel="Projects" next="/contact" nextLabel="Contact" />
    </>
  );
}
