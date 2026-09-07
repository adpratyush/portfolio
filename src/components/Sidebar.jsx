import React, { useState } from 'react';
import './Sidebar.css';
import pratyush from '../assets/pratyush1.png';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Menu, X, Facebook } from 'lucide-react';

const MENU_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'goals', label: 'Goals' },
  { id: 'hobbies', label: 'Hobbies' },
];

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false); // Close menu on mobile after clicking
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <aside className="sidebar">
      {/* Mobile Header Toolbar */}
      <div className="mobile-header">
        <div className="mobile-profile-mini">
          <img
            src={pratyush}
            alt="Profile"
            className="mobile-avatar"
          />
          <h2 className="mobile-name">Pratyush</h2>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
        </button>
      </div>

      <div className={`sidebar-content ${isMenuOpen ? 'mobile-open' : ''}`}>
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image-container">
            <img
              src={pratyush}
              alt="Profile"
              className="profile-image"
            />
            <div className="glow-ring"></div>
          </div>
          <h2 className="profile-name">Pratyush Adhikari</h2>
          <p className="profile-title">Software Engineer</p>
        </div>

        {/* Contact Details */}
        <div className="contact-section">
          <div className="contact-item">
            <Phone size={16} className="contact-icon" />
            <span>+977-9813841152</span>
          </div>
          <div className="contact-item">
            <Mail size={16} className="contact-icon" />
            <span>adpratyush@gmail.com</span>
          </div>
          <div className="social-links">
            <a href="https://github.com/adpratyush" className="social-icon" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/pratyush-adhikari-9bb75a26b/" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://www.facebook.com/adpratyush" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="navigation-menu">
          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
