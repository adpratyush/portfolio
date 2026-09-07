import React from 'react';

const About = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">About Me</h2>
      
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          I am a dedicated software engineer with a strong foundation in building modern, scalable web applications. My journey into programming started with a fascination for creating interactive interfaces and has grown into a deep understanding of full-stack development.
        </p>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          When I'm not coding, you can find me exploring new technologies, contributing to open source, or finding inspiration in design patterns. I believe that good software should not only work flawlessly but also provide an intuitive and beautiful experience.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="glass-card" style={{ background: 'rgba(59, 130, 246, 0.05)', borderLeft: '3px solid var(--accent-primary)' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Years Experience</h3>
          <p style={{ fontSize: '2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>3+</p>
        </div>
        <div className="glass-card" style={{ background: 'rgba(59, 130, 246, 0.05)', borderLeft: '3px solid var(--accent-secondary)' }}>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Projects Completed</h3>
          <p style={{ fontSize: '2rem', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>20+</p>
        </div>
      </div>
    </section>
  );
};

export default About;
