import Section from '../components/Section';
import Project from '../components/Project';

export default function Projects(props) {
  const projects = [
    {
      title: 'Amazon Extension 2.0',
      description:
        'A Chrome Extension that provides more search/filter/sort functionality on Amazon search results pages.',
      image: 'https://github.com/benpaullamb/amazon-extension-2.0/raw/main/screenshot.png',
    },
  ];

  return (
    <div>
      <Section>
        <h1 className="mb-2 text-3xl">Projects</h1>

        <a
          href="https://github.com/benpaullamb/"
          className="mb-4 inline-block text-lg underline"
          target="_blank"
          rel="noreferrer">
          My GitHub
        </a>

        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Section>
    </div>
  );
}
