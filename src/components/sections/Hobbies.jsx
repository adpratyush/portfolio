import React from 'react';
import { Volleyball, Gamepad2, Headphones, Map } from 'lucide-react';

const HobbyCard = ({ icon, title, imageColor }) => {
  const Icon = icon;
  return (
  <div className="glass-card" style={{ 
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    padding: '2rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      background: `linear-gradient(135deg, ${imageColor}20, transparent)`,
      zIndex: 0
    }}></div>
    
    <div style={{ zIndex: 1, color: imageColor }}>
      <Icon size={48} strokeWidth={1.5} />
    </div>
    
    <h3 style={{ zIndex: 1, color: 'var(--text-primary)', margin: 0 }}>{title}</h3>
  </div>
  );
};

const Hobbies = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Beyond Coding</h2>
      
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
        When I step away from the keyboard, I engage in activities that keep me balanced, inspired, and energized.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem' 
      }}>
        <HobbyCard 
          icon={Volleyball}
          title="Football"
          imageColor="var(--accent-primary)"
        />
        <HobbyCard 
          icon={Headphones}
          title="Music"
          imageColor="var(--accent-secondary)"
        />
        <HobbyCard 
          icon={Map}
          title="Traveling & Trekking"
          imageColor="#10B981"
        />
        <HobbyCard 
          icon={Gamepad2}
          title="Gaming"
          imageColor="#F59E0B"
        />
      </div>
    </section>
  );
};

export default Hobbies;
