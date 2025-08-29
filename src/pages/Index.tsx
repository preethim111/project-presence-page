import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Awards from '@/components/portfolio/Awards';
import Skills from '@/components/portfolio/Skills';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
