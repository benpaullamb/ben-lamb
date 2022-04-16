export default function SkillGroup({ title, highlights, groups, className }) {
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

      {groups.map(({ name, tech }, i) => (
        <div key={name || i}>
          {name && (
            <h3 className="mt-2 mb-1 inline-block bg-gradient-to-r from-red-600 to-amber-300 bg-clip-text text-transparent text-lg">
              {name}
            </h3>
          )}
          <ul className="flex flex-wrap gap-1">
            {tech.map((tool) => (
              <li className="px-2 bg-red-900 rounded-full" key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
