import Banner from '../components/Banner';
import Section from '../components/Section';
import autumnImage from '../assets/backgrounds/japan-autumn-unsplash.jpg';

import { ReactComponent as AirtableImage } from '../assets/dev/airtable.svg';
import { ReactComponent as AwsImage } from '../assets/dev/aws.svg';
import { ReactComponent as AzureImage } from '../assets/dev/azure.svg';
import { ReactComponent as BitbucketImage } from '../assets/dev/bitbucket.svg';
import { ReactComponent as BootstrapImage } from '../assets/dev/bootstrap.svg';
import { ReactComponent as ChromeImage } from '../assets/dev/chrome.svg';
import { ReactComponent as CssImage } from '../assets/dev/css.svg';
import { ReactComponent as DockerImage } from '../assets/dev/docker.svg';
import { ReactComponent as ElectronImage } from '../assets/dev/electron.svg';
import { ReactComponent as ExpressImage } from '../assets/dev/express.svg';
import { ReactComponent as GitImage } from '../assets/dev/git.svg';
import { ReactComponent as GithubImage } from '../assets/dev/github.svg';
import { ReactComponent as GraphqlImage } from '../assets/dev/graphql.svg';
import { ReactComponent as HtmlImage } from '../assets/dev/html.svg';
import { ReactComponent as JavascriptImage } from '../assets/dev/javascript.svg';
import { ReactComponent as JestImage } from '../assets/dev/jest.svg';
import { ReactComponent as JiraImage } from '../assets/dev/jira.svg';
import { ReactComponent as MjmlImage } from '../assets/dev/mjml.svg';
import { ReactComponent as MysqlImage } from '../assets/dev/mysql.svg';
import { ReactComponent as NodeImage } from '../assets/dev/node.svg';
import { ReactComponent as NpmImage } from '../assets/dev/npm.svg';
import { ReactComponent as NuxtImage } from '../assets/dev/nuxt.svg';
import { ReactComponent as ReactNativeImage } from '../assets/dev/react-native.svg';
import { ReactComponent as ReactImage } from '../assets/dev/react.svg';
import { ReactComponent as SassImage } from '../assets/dev/sass.svg';
import { ReactComponent as SentryImage } from '../assets/dev/sentry.svg';
import { ReactComponent as TailwindImage } from '../assets/dev/tailwind.svg';
import { ReactComponent as TypescriptImage } from '../assets/dev/typescript.svg';
import { ReactComponent as VercelImage } from '../assets/dev/vercel.svg';
import { ReactComponent as ViteImage } from '../assets/dev/vite.svg';
import { ReactComponent as VscodeImage } from '../assets/dev/vs-code.svg';
import { ReactComponent as VueImage } from '../assets/dev/vue.svg';
import { ReactComponent as WebpackImage } from '../assets/dev/webpack.svg';
import { ReactComponent as ZendeskImage } from '../assets/dev/zendesk.svg';

export default function Skills(props) {
  const frontend = [
    { name: 'Bootstrap', image: <BootstrapImage className="w-16 h-16" /> },
    { name: 'Chrome', image: <ChromeImage className="w-16 h-16" /> },
    { name: 'CSS', image: <CssImage className="w-16 h-16" /> },
    { name: 'Electron', image: <ElectronImage className="w-16 h-16" /> },
    { name: 'HTML', image: <HtmlImage className="w-16 h-16" /> },
    { name: 'JavaScript', image: <JavascriptImage className="w-16 h-16" /> },
    { name: 'Mjml', image: <MjmlImage className="w-16 h-16" /> },
    { name: 'Nuxt', image: <NuxtImage className="w-16 h-16" /> },
    { name: 'React Native', image: <ReactNativeImage className="w-16 h-16" /> },
    { name: 'React', image: <ReactImage className="w-16 h-16" /> },
    { name: 'Sass', image: <SassImage className="w-16 h-16" /> },
    { name: 'Tailwind', image: <TailwindImage className="w-16 h-16" /> },
    { name: 'TypeScript', image: <TypescriptImage className="w-16 h-16" /> },
    { name: 'Vite', image: <ViteImage className="w-16 h-16" /> },
    { name: 'VS Code', image: <VscodeImage className="w-16 h-16" /> },
    { name: 'Vue', image: <VueImage className="w-16 h-16" /> },
    { name: 'Webpack', image: <WebpackImage className="w-16 h-16" /> },
  ];

  const backend = [
    { name: 'Airtable', image: <AirtableImage className="w-16 h-16" /> },
    { name: 'Express', image: <ExpressImage className="w-16 h-16" /> },
    { name: 'GraphQL', image: <GraphqlImage className="w-16 h-16" /> },
    { name: 'Jest', image: <JestImage className="w-16 h-16" /> },
    { name: 'MySQL', image: <MysqlImage className="w-16 h-16" /> },
    { name: 'Node', image: <NodeImage className="w-16 h-16" /> },
    { name: 'Npm', image: <NpmImage className="w-16 h-16" /> },
    { name: 'Sentry', image: <SentryImage className="w-16 h-16" /> },
    { name: 'Zendesk', image: <ZendeskImage className="w-16 h-16" /> },
  ];

  const devOps = [
    { name: 'AWS', image: <AwsImage className="w-16 h-16" /> },
    { name: 'Azure', image: <AzureImage className="w-16 h-16" /> },
    { name: 'Bitbucket', image: <BitbucketImage className="w-16 h-16" /> },
    { name: 'Docker', image: <DockerImage className="w-16 h-16" /> },
    { name: 'Git', image: <GitImage className="w-16 h-16" /> },
    { name: 'Github', image: <GithubImage className="w-16 h-16" /> },
    { name: 'Jira', image: <JiraImage className="w-16 h-16" /> },
    { name: 'Vercel', image: <VercelImage className="w-16 h-16" /> },
  ];

  return (
    <>
      <Banner title="Skills" subtitle="Languages &amp; Libraries" image={autumnImage} />

      <Section>
        <h2>Frontend</h2>
        <span>
          Bootstrap, Chrome Extensions, CSS3, Cypress, Electron, HTML5, JavaScript, MJML, NHS Styling, Nuxt, React,
          React Router, Sass, Tailwind, TypeScript, Vue, Webpack, Vite
        </span>
      </Section>

      <Section>
        <h2>Backend</h2>
        <span>Airtable, Contentful, Express, GraphQL, Jest, MySQL, Node, NPM, Sentry, TypeORM, Zendesk</span>
      </Section>

      <Section>
        <h2>DevOps</h2>
        <span>AWS, Azure DevOps, Bitbucket, Jira, Docker, Git, GitHub, IBM Cloud, Vercel, VS Code</span>
      </Section>
    </>
  );
}
