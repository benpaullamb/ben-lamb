import Section from '../components/Section';
import me from '../me.json';

export default function App() {
  return (
    <Section title="Summary" className="bg-black/60">
      <ul className="md:grid grid-cols-5">
        {me.summary.map((point) => (
          <li className="mb-2 last:mb-0 md:mb-0" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
}
