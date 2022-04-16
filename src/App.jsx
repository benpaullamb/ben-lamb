import me from './me.json';
import Header from './components/Header';
import Summary from './sections/Summary';
import Section from './components/Section';
import SkillGroup from './components/SkillGroup';
import { ReactComponent as ReactImage } from './assets/dev/react.svg';
import { ReactComponent as VueImage } from './assets/dev/vue.svg';
import { ReactComponent as NodeImage } from './assets/dev/node.svg';
import { ReactComponent as ExpressImage } from './assets/dev/express.svg';
import { ReactComponent as AWSImage } from './assets/dev/aws.svg';
import { ReactComponent as AzureImage } from './assets/dev/azure.svg';

export default function App() {
  return (
    <div className="h-full">
      <Header />
      <Summary />

      <Section>
        <div className="md:grid grid-cols-3 gap-8">
          <SkillGroup
            title="Frontend"
            highlights={[
              {
                name: 'React',
                image: <ReactImage className="w-16 h-16" />,
              },
              {
                name: 'Vue',
                image: <VueImage className="w-16 h-16" />,
              },
            ]}
            groups={me.skills.frontend.groups}
          />

          <SkillGroup
            title="Backend"
            className="mt-8 md:mt-0"
            highlights={[
              {
                name: 'Node.js',
                image: <NodeImage className="w-16 h-16" />,
              },
              {
                name: 'Express',
                image: <ExpressImage className="w-16 h-16 text-white" />,
              },
            ]}
            groups={me.skills.backend.groups}
          />

          <SkillGroup
            title="DevOps"
            className="mt-8 md:mt-0"
            highlights={[
              {
                name: 'AWS',
                image: <AWSImage className="w-16 h-16" />,
              },
              {
                name: 'Azure Pipelines',
                image: <AzureImage className="w-16 h-16" />,
              },
            ]}
            groups={me.skills.devOps.groups}
          />
        </div>
      </Section>
    </div>
  );
}
