import Section from './Section';

export default function SkillSet({ name, main, others, dark = false }) {
  return (
    <Section dark={dark}>
      <h2 className="text-center text-2xl font-bold uppercase">{name}</h2>

      <div className="mt-4 grid grid-cols-3 gap-4 md:flex md:justify-evenly items-center">
        {main.map(({ name, image: Image }) => (
          <div className="flex flex-col items-center" key={name}>
            <Image className="w-16 h-16" />
            <span className="mt-2 block font-bold">{name}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-center">{others.join(' | ')}</p>
    </Section>
  );
}
