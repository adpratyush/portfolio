import React from 'react';
import { Target, Zap, Globe } from 'lucide-react';

const GoalCard = ({ icon, title, description, delay }) => {
  const Icon = icon;
  return (
  <div className="glass-card" style={{ 
    display: 'flex', 
    gap: '1.5rem', 
    alignItems: 'flex-start',
    animationDelay: `${delay}s`
  }}>
    <div style={{ 
      padding: '1rem', 
      background: 'rgba(59, 130, 246, 0.1)', 
      borderRadius: '12px',
      color: 'var(--accent-primary)'
    }}>
      <Icon size={24} />
    </div>
    <div>
      <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{description}</p>
    </div>
  </div>
  );
};

const Goals = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Future Goals</h2>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
        I believe in continuous growth and setting ambitious targets. Here are my main professional and personal objectives for the near future.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <GoalCard 
          icon={Target}
          title="Master System Design"
          description="Deepen my understanding of designing scalable, highly available systems and distributed architectures capable of handling millions of users."
          delay={0.1}
        />
        <GoalCard 
          icon={Globe}
          title="Contribute to Major Open Source"
          description="Become an active contributor to prominent open-source projects (like React or Node.js) to give back to the community that I learn so much from."
          delay={0.2}
        />
        <GoalCard 
          icon={Zap}
          title="Build an AI-Driven Product"
          description="Launch a SaaS product leveraging machine learning to solve real-world productivity challenges for developers."
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default Goals;
