import Banner from '../components/Banner';
import SkillSet from '../components/SkillSet';
import autumnImage from '../assets/backgrounds/japan-autumn-unsplash.jpg';

import { ReactComponent as ReactImage } from '../assets/dev/react.svg';
import { ReactComponent as VueImage } from '../assets/dev/vue.svg';
import { ReactComponent as TailwindImage } from '../assets/dev/tailwind.svg';
import { ReactComponent as SassImage } from '../assets/dev/sass.svg';
import { ReactComponent as StorybookImage } from '../assets/dev/storybook.svg';
import { ReactComponent as ElectronImage } from '../assets/dev/electron.svg';
import { ReactComponent as WebpackImage } from '../assets/dev/webpack.svg';
import { ReactComponent as FigmaImage } from '../assets/dev/figma.svg';

import { ReactComponent as ExpressImage } from '../assets/dev/express.svg';
import { ReactComponent as GraphqlImage } from '../assets/dev/graphql.svg';
import { ReactComponent as AmplifyImage } from '../assets/dev/amplify.svg';
import { ReactComponent as LambdaImage } from '../assets/dev/lambda.svg';

import { ReactComponent as AwsImage } from '../assets/dev/aws.svg';
import { ReactComponent as VercelImage } from '../assets/dev/vercel.svg';
import { ReactComponent as GitImage } from '../assets/dev/git.svg';
import { ReactComponent as AzureImage } from '../assets/dev/azure.svg';

export default function Skills(props) {
  const frontendGroups = [
    {
      name: 'JS',
      color: 'bg-sky-100',
      main: [
        { name: 'React', image: ReactImage },
        { name: 'Vue', image: VueImage },
      ],
      others: ['HTML5', 'JavaScript', 'Nuxt', 'Vuex', 'Socket.IO', 'Handlebars', 'AngularJs'],
    },
    {
      name: 'Styling',
      color: 'bg-sky-200',
      main: [
        { name: 'Tailwind', image: TailwindImage },
        { name: 'Sass', image: SassImage },
      ],
      others: ['CSS3', 'Bootstrap', 'CSS Modules', 'Emotion'],
    },
    {
      name: 'Platforms',
      color: 'bg-sky-300',
      main: [
        { name: 'Storybook', image: StorybookImage },
        { name: 'Electron', image: ElectronImage },
      ],
      others: ['React Native', 'MJML Emails', 'Chrome Extensions', 'VS Code Extensions'],
    },
    {
      name: 'Dev Tools',
      color: 'bg-sky-400',
      main: [
        { name: 'Webpack', image: WebpackImage },
        { name: 'Figma', image: FigmaImage },
      ],
      others: [
        'Cypress',
        'Testing Library',
        'Vite',
        'Responsive Design',
        'Prettier',
        'ESLint',
        'Monorepos',
        'Lerna',
        'Microfrontends',
        'single-spa',
      ],
    },
  ];

  const backendGroups = [
    {
      name: 'Node.js',
      color: 'bg-cyan-100',
      main: [
        { name: 'Express', image: ExpressImage },
        { name: 'GraphQL', image: GraphqlImage },
      ],
      others: [
        'TypeORM',
        'MongoDB',
        'MySQL',
        'Apollo',
        'Jest',
        'Contentful',
        'Airtable',
        'Zendesk',
        'Microservices',
        'Python',
      ],
    },
    {
      name: 'AWS',
      color: 'bg-cyan-200',
      main: [
        { name: 'Amplify', image: AmplifyImage },
        { name: 'Lambda', image: LambdaImage },
      ],
      others: ['AWS S3', 'DynamoDB', 'CloudFront', 'API Gateway', 'AWS SES', 'AWS SQS', 'Lightsail'],
    },
  ];

  const devOpGroups = [
    {
      name: 'Deployment',
      color: 'bg-indigo-100',
      main: [
        { name: 'AWS', image: AwsImage },
        { name: 'Vercel', image: VercelImage },
      ],
      others: ['Docker', 'AWS CDK', 'AWS IAM', 'CloudWatch', 'Sentry', 'IBM Cloud', 'MS IIS'],
    },
    {
      name: 'VCS',
      color: 'bg-indigo-200',
      main: [
        { name: 'Git', image: GitImage },
        { name: 'Azure Pipelines', image: AzureImage },
      ],
      others: ['GitHub', 'Bitbucket', 'Azure DevOps', 'Jira'],
    },
  ];

  return (
    <>
      <Banner title="Skills" subtitle="Languages &amp; Libraries" image={autumnImage} id="skills" />

      <SkillSet skillGroups={frontendGroups} name="Frontend" />

      <SkillSet skillGroups={backendGroups} name="Backend" reverse />

      <SkillSet skillGroups={devOpGroups} name="DevOps" />
    </>
  );
}
