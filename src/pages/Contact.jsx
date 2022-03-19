import { ReactComponent as GitHubIcon } from '../assets/GitHub.svg';
import { ReactComponent as LinkedInIcon } from '../assets/LinkedIn.svg';

export default function Contact() {
  return (
    <div>
      <h1 className="mb-4 text-3xl">Contact</h1>

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
  );
}
