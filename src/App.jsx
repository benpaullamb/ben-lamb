import Home from './pages/Home';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';

import NavBar from './components/NavBar';

export default function App() {
  return (
    <div className="h-full">
      <NavBar />

      <Home />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
