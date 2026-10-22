import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { Highlights } from './components/Highlights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-accent-indigo/30 selection:text-slate-100 flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationCertifications />
        <Highlights />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
