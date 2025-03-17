
import { useEffect } from 'react';
import MainLayout from '@/layout/MainLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "John Doe | Cloud & DevOps Engineer";
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Index;
