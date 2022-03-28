import classNames from 'classnames';

export default function SkillGroup({ name, main, others, color }) {
  return (
    <div className={classNames('p-8', color)}>
      <span className="block text-center text-3xl">{name}</span>

      <div className="mt-4 flex justify-evenly gap-8">
        {main.map(({ image: Image, name: skillName }) => (
          <div key={skillName} className="flex flex-col items-center">
            <Image className="w-16 h-16" />
            <span className="mt-2 block font-bold">{skillName}</span>
          </div>
        ))}
      </div>

      <ul className="mt-4 grid grid-cols-2 gap-x-4">
        {others.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
