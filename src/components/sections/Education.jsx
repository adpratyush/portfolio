import React from 'react';
import { BookOpen, Award, GraduationCap} from 'lucide-react';

const EducationItem = ({ degree, institution, year, description, cgpa }) => (
  <div className="glass-card education-item" style={{ position: 'relative', paddingLeft: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
    <div className="education-icon-container" style={{
      position: 'absolute',
      left: 'calc(-16px - var(--timeline-offset, 0px))',
      top: '24px',
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      background: 'var(--bg-primary)',
      border: '2px solid var(--accent-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1
    }}>
      <BookOpen size={14} color="var(--accent-primary)" />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
      <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.3rem' }}>{degree}</h3>
      <span style={{
        background: 'rgba(59, 130, 246, 0.1)',
        color: 'var(--accent-primary)',
        padding: '0.25rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: '500'
      }}>{year}</span>
    </div>
    <h4 style={{ color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Award size={16} /> {institution}
    </h4>
    <h4 style={{ color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <GraduationCap size={16} /> {cgpa }
    </h4>
    <p style={{ color: 'var(--text-muted)' }}>{description}</p>
  </div>
);

const Education = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Education Journey</h2>

      <div style={{ position: 'relative', marginTop: '2rem', paddingLeft: '1rem' }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '0',
          bottom: '0',
          width: '2px',
          background: 'var(--border-color)'
        }}></div>

        <EducationItem
          degree="Masters in Business Administration"
          institution="School of Management of TU"
          year="2026 - Present"
          description="Focus on Statistics , Economic and Business."
          cgpa="Ongoing"
        />

        <EducationItem
          degree="Bachelor in Computer Science Engineering"
          institution="CMR Institute of Technology"
          year="2021 - 2025"
          description="Graduated with honors. Specialization in Software Engineering and Artificial Intelligence. Led the university coding club and participated in numerous hackathons."
          cgpa="CGPA: 8.24/10.0"
        />

        <EducationItem
          degree="High School Diploma"
          institution="Trinity International College"
          year="2018 - 2020"
          description="Focus on Mathematics and Computer Science. Participated in national science fairs and math olympiads."
          cgpa="CGPA: 3.08/4.0"
        />
      </div>
    </section>
  );
};

export default Education;
