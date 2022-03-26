import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import SkillSet from '../components/SkillSet';
import PrevNextButtons from '../components/PrevNextButtons';
import autumnImage from '../assets/backgrounds/japan-autumn-unsplash.jpg';

import { ReactComponent as AwsImage } from '../assets/dev/aws.svg';
import { ReactComponent as BootstrapImage } from '../assets/dev/bootstrap.svg';
import { ReactComponent as DockerImage } from '../assets/dev/docker.svg';
import { ReactComponent as ExpressImage } from '../assets/dev/express.svg';
import { ReactComponent as GraphqlImage } from '../assets/dev/graphql.svg';
import { ReactComponent as NodeImage } from '../assets/dev/node.svg';
import { ReactComponent as ReactImage } from '../assets/dev/react.svg';
import { ReactComponent as SassImage } from '../assets/dev/sass.svg';
import { ReactComponent as TailwindImage } from '../assets/dev/tailwind.svg';
import { ReactComponent as TypescriptImage } from '../assets/dev/typescript.svg';
import { ReactComponent as VercelImage } from '../assets/dev/vercel.svg';
import { ReactComponent as VueImage } from '../assets/dev/vue.svg';

export default function Skills(props) {
  const frontend = {
    main: [
      { name: 'React', image: ReactImage },
      { name: 'Vue', image: VueImage },
      { name: 'TypeScript', image: TypescriptImage },
      { name: 'Tailwind', image: TailwindImage },
      { name: 'Bootstrap', image: BootstrapImage },
      { name: 'Sass', image: SassImage },
    ],
    others: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Nuxt',
      'Vuex',
      'Webpack',
      'Vite',
      'CSS Modules',
      'Emotion',
      'Cypress',
      'Testing Library',
      'React Native',
      'Electron',
      'MJML Emails',
      'Chrome Extensions',
      'VS Code Extensions',
      'Microfrontends',
      'single-spa',
      'Responsive Design',
      'Prettier',
      'ESLint',
      'Socket.IO',
      'Handlebars',
      'AngularJs',
    ],
  };

  const backend = {
    main: [
      { name: 'Node', image: NodeImage },
      { name: 'Express', image: ExpressImage },
      { name: 'GraphQL', image: GraphqlImage },
    ],
    others: [
      'Microservices',
      'DynamoDB',
      'MongoDB',
      'TypeORM',
      'MySQL',
      'Jest',
      'Apollo',
      'Contentful',
      'Airtable',
      'Zendesk',
      'npm',
      'Sentry',
      'Python',
      'MS IIS',
    ],
  };

  const devOps = {
    main: [
      { name: 'AWS', image: AwsImage },
      { name: 'Vercel', image: VercelImage },
      { name: 'Docker', image: DockerImage },
    ],
    others: ['AWS CDK', 'Jira', 'Git', 'GitHub', 'Bitbucket', 'Azure DevOps', 'IBM Cloud'],
  };

  // Group other skills
  // 6 mains per
  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://ben-lamb.vercel.app/skills" />
        <title>Ben Lamb - Skills</title>
      </Helmet>

      <Banner title="Skills" subtitle="Languages &amp; Libraries" image={autumnImage} />

      <SkillSet name="Frontend" {...frontend} />

      <SkillSet name="Backend" dark {...backend} />

      <SkillSet name="DevOps" {...devOps} />

      <PrevNextButtons prev="/" prevLabel="Home" next="/experience" nextLabel="Experience" />
    </>
  );
}
