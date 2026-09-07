import React from 'react';

const SkillBar = ({ name, level, color }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>{name}</span>
      <span style={{ color: 'var(--text-secondary)' }}>{level}%</span>
    </div>
    <div style={{ height: '8px', background: 'var(--bg-primary)', borderRadius: '4px', overflow: 'hidden' }}>
      <div style={{ 
        width: `${level}%`, 
        height: '100%', 
        background: `linear-gradient(90deg, ${color}, rgba(255,255,255,0.8))`,
        borderRadius: '4px',
        transition: 'width 1.5s ease-out'
      }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Technical Skills</h2>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
        I've worked with a variety of programming languages and frameworks over the years. Here is a snapshot of my proficiency in different areas.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(200px, 100%, 300px), 1fr))', gap: '3rem' }}>
        {/* Frontend Skills */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Frontend</h3>
          <SkillBar name="React & Redux" level={90} color="var(--accent-primary)" />
          <SkillBar name="JavaScript / TypeScript" level={85} color="#F59E0B" />
          <SkillBar name="HTML & CSS/SCSS" level={95} color="#10B981" />
          <SkillBar name="Framer Motion" level={70} color="#EC4899" />
        </div>

        {/* Backend & Tools Skills */}
        <div className="glass-card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Backend & Tools</h3>
          <SkillBar name="Node.js & Express" level={80} color="#10B981" />
          <SkillBar name="Python / Django" level={75} color="var(--accent-primary)" />
          <SkillBar name="SQL & MongoDB" level={85} color="#F59E0B" />
          <SkillBar name="Git & CI/CD" level={90} color="#EC4899" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
