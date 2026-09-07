import React from 'react';
import resume from '../../assets/resume.pdf';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section className="section-wrapper">
      <div style={{ maxWidth: '800px' }}>
        <h4 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Welcome to my portfolio
        </h4>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '700', lineHeight: '1.1', marginBottom: '1.5rem' }}>
          Hi, I'm <span style={{ color: 'var(--accent-primary)' }}>Pratyush</span>.<br />
          I build digital experiences.
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.8' }}>
          I am a passionate software engineer specializing in building premium and responsive web applications. I focus on creating extraordinary user experiences with a keen eye for design and performance.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work <ArrowRight size={18} />
          </button>

          <a href={resume} download="My_Resume.pdf">
            <button className="btn btn-outline">
              Download Resume <ArrowDown size={18} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
