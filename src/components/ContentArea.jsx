import React, { useEffect, useRef } from 'react';
import './ContentArea.css';

// Import all sections
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Goals from './sections/Goals';
import Hobbies from './sections/Hobbies';

const ContentArea = ({ setActiveSection }) => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // Setup Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.5, // 50% of the section must be visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  const setSectionRef = (el, index) => {
    sectionsRef.current[index] = el;
  };

  return (
    <main className="main-content" ref={containerRef}>
      <div id="home" ref={(el) => setSectionRef(el, 0)}>
        <Home />
      </div>
      <div id="about" ref={(el) => setSectionRef(el, 1)}>
        <About />
      </div>
      <div id="education" ref={(el) => setSectionRef(el, 2)}>
        <Education />
      </div>
      <div id="skills" ref={(el) => setSectionRef(el, 3)}>
        <Skills />
      </div>
      <div id="projects" ref={(el) => setSectionRef(el, 4)}>
        <Projects />
      </div>
      <div id="goals" ref={(el) => setSectionRef(el, 5)}>
        <Goals />
      </div>
      <div id="hobbies" ref={(el) => setSectionRef(el, 6)}>
        <Hobbies />
      </div>
    </main>
  );
};

export default ContentArea;
