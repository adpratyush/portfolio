import React from 'react';
import resort from '../../assets/resort.png';
import food from '../../assets/food.png';
import mycart from '../../assets/mycart.png';
import { ExternalLink, Github } from 'lucide-react';

// ✅ Project Card Component
const ProjectCard = ({ title, description, image, imageColor, tags, liveLink, githubLink }) => (
  <div
    className="glass-card project-card"
    style={{
      padding: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}
  >

    {/* ✅ Image / Fallback Section */}
    <div
      style={{
        height: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="project-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
        />
      ) : (
        <div style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${imageColor}, var(--bg-primary))`
        }} />
      )}

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.2)',
        // backdropFilter: 'blur(2px)'
      }}></div>
    </div>

    {/* ✅ Content */}
    <div
      style={{
        padding: '1.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
        {title}
      </h3>

      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginBottom: '1.5rem',
          flexGrow: 1
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}
      >
        {tags.map(tag => (
          <span
            key={tag}
            style={{
              fontSize: '0.75rem',
              padding: '0.2rem 0.6rem',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              color: 'var(--text-secondary)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.9rem',
            color: 'var(--accent-primary)'
          }}
        >
          <ExternalLink size={16} /> Live Demo
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.9rem',
            color: 'var(--text-primary)'
          }}
        >
          <Github size={16} /> Code
        </a>
      </div>
    </div>
  </div>
);

// ✅ Main Projects Section
const Projects = () => {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Featured Projects</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(250px, 100%, 300px), 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}
      >

        {/* Project 1 */}
        <ProjectCard
          title="Resort Booking System"
          description="Our hotel booking system revolutionizes the way users interact with hospitality services online. Seamlessly integrating eSewa and Stripe for secure payment processing."
          image={resort}
          imageColor="var(--accent-primary)"
          tags={['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Stripe', 'ESEWA']}
          liveLink="https://snowpal.com.np"
          githubLink="https://github.com/adpratyush/Resort"
        />

        {/* Project 2 */}
        <ProjectCard
          title="Food Ordering App"
          description="Integrated with Stripe for payment processing, users can navigate restaurant menus, place orders, and track deliveries with ease."
          image={food}
          imageColor="var(--accent-secondary)"
          tags={['React', 'MongoDB', 'Express', 'Node.js', 'Stripe']}
          liveLink="#"
          githubLink="https://github.com/adpratyush/MERN"
        />

        {/* Project 3 */}
        <ProjectCard
          title="Messaging App"
          description="**Kura** is a modern messaging application designed to make communication simple, fast, and convenient. It allows users to send real-time messages, share photos, communicate through private chats, and interact in group conversations. Built with a focus on seamless communication and a user-friendly experience, Kura provides a reliable platform for connecting with friends, family, and communities anytime, anywhere."
          image={mycart}
          imageColor="#10B981"
          tags={['Next.js', 'React', 'Express', 'Node JS', 'MongoDB', 'PostgreSQL']}
          liveLink="https://kura-khaki.vercel.app"
          githubLink="https://github.com/adpratyush/kura"
        />

      </div>
    </section>
  );
};

export default Projects;