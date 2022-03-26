import { Routes, Route } from 'react-router-dom';

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
