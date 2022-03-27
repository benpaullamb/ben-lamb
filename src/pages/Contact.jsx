import Banner from '../components/Banner';
import Section from '../components/Section';
import { ReactComponent as GitHubImage } from '../assets/contact/github.svg';
import { ReactComponent as LinkedInImage } from '../assets/contact/linkedin.svg';
import { ReactComponent as GmailImage } from '../assets/contact/gmail.svg';
import sunsetImage from '../assets/backgrounds/japan-sunset-unsplash.jpg';

export default function Contact(props) {
  const contacts = [
    {
      label: 'benpaullamb@gmail.com',
      image: GmailImage,
      link: 'mailto:benpaullamb@gmail.com',
    },
    {
      label: 'GitHub',
      image: GitHubImage,
      link: 'https://github.com/benpaullamb',
    },
    {
      label: 'LinkedIn',
      image: LinkedInImage,
      link: 'https://www.linkedin.com/in/ben-paul-lamb/',
    },
  ];

  return (
    <>
      <Banner title="Contact" subtitle="Email | GitHub | LinkedIn" image={sunsetImage} id="contact" />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {contacts.map(({ label, image: Image, link }) => (
            <a href={link} target="_blank" rel="noreferrer" key={label} className="flex flex-col items-center">
              <Image className="w-16" />
              <span className="mt-2 block text-lg">{label}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
