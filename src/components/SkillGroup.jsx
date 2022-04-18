export default function SkillGroup({ title, highlights, groups, className }) {
  const groupOpacities = ['opacity-90', 'opacity-60', 'opacity-30'];

  return (
    <div className={className}>
      <h2 className="mb-4 text-4xl">{title}</h2>

      <div className="mb-4 flex justify-evenly">
        {highlights.map(({ name, image }) => (
          <div className="flex flex-col items-center" key={name}>
            {image}
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>

      <ul className="flex flex-wrap gap-1">
        {groups.map((group, i) =>
          group.map((tech) => (
            <li className={`px-2 border border-white ${groupOpacities[i]}`} key={tech}>
              {tech}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
