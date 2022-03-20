import { ReactComponent as GitHubIcon } from '../assets/companies/GitHub.svg';
import { ReactComponent as LinkedInIcon } from '../assets/companies/LinkedIn.svg';
import Banner from '../components/Banner';
import sunsetImage from '../assets/backgrounds/japan-sunset-unsplash.jpg';

export default function Contact(props) {
  return (
    <>
      <Banner title="Contact" subtitle="Email | GitHub | LinkedIn" image={sunsetImage} />

      <div className="px-8 py-16 container mx-auto">
        <span className="mb-4 block text-lg">benpaullamb@gmail.com</span>

        <a href="https://github.com/benpaullamb" target="_blank" rel="noreferrer" className="mb-4 flex items-center">
          <GitHubIcon />
          <span className="ml-2 text-lg">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/ben-paul-lamb/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center">
          <LinkedInIcon className="text-[#0a66c2]" />
          <span className="ml-2 text-lg">LinkedIn</span>
        </a>
      </div>
    </>
  );
}
