import Header from './components/Header';
import Summary from './sections/Summary';
import Skills from './sections/Skills';
import Experience from './sections/Experience';

export default function App() {
  return (
    <div className="h-full">
      <Header />
      <Summary />
      <Skills />
      <Experience />
    </div>
  );
}
