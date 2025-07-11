import React from 'react';
import { faDownload, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import GlassContainer from '../GlassContainer/GlassContainer';
import './HeroSection.scss';

const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // This would typically download a CV file
    console.log('Downloading CV...');
    // For now, just show an alert
    alert('CV download functionality would be implemented here');
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Hi, I'm <span className="hero__name">Vaibhav Heda</span>
            </h1>
            <h2 className="hero__subtitle">Full Stack Developer</h2>
            <p className="hero__description">
              I craft beautiful, functional, and user-friendly web applications using modern technologies. 
              With expertise in React, Node.js, and cloud platforms, I bring ideas to life through code.
            </p>
            
            <div className="hero__actions">
              <Button variant="primary" icon={faDownload} onClick={downloadCV}>
                Download CV
              </Button>
              <Button variant="secondary" icon={faArrowDown} onClick={scrollToProjects}>
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="hero__visual">
            <GlassContainer variant="enhanced" className="hero__card">
              <div className="hero__profile">
                <div className="hero__avatar">
                  <div className="hero__avatar-placeholder">VH</div>
                </div>
                <div className="hero__info">
                  <h3>Vaibhav Heda</h3>
                  <p>Full Stack Developer</p>
                  <div className="hero__skills">
                    <span className="hero__skill">React</span>
                    <span className="hero__skill">Node.js</span>
                    <span className="hero__skill">TypeScript</span>
                    <span className="hero__skill">Python</span>
                  </div>
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
        
        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
          <div className="hero__scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 