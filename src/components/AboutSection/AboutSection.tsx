import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import GlassContainer from '../GlassContainer/GlassContainer';
import Button from '../Button/Button';
import './AboutSection.scss';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Frontend', technologies: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Svelte'] },
    { name: 'Backend', technologies: ['Node.js', 'Python', 'Express', 'Django', 'FastAPI'] },
    { name: 'Database', technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { name: 'Cloud & DevOps', technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Vercel'] },
    { name: 'Mobile', technologies: ['React Native', 'Flutter', 'Ionic', 'Cordova'] },
    { name: 'Design', technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Sketch'] }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: faLinkedin, url: 'https://linkedin.com/in/vaibhav-heda', color: '#0077B5' },
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/vaibhav-heda', color: '#333' },
    { name: 'Twitter', icon: faTwitter, url: 'https://twitter.com/vaibhav_heda', color: '#1DA1F2' },
    { name: 'Instagram', icon: faInstagram, url: 'https://instagram.com/vaibhav.heda', color: '#E4405F' }
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
            Get to know more about my background, skills, and passion for technology
          </p>
        </div>
        
        <div className="about__content">
          <div className="about__info">
            <GlassContainer variant="enhanced" className="about__bio">
              <h3>My Story</h3>
              <p>
                I'm a passionate Full Stack Developer with over 5 years of experience in building 
                web applications that make a difference. My journey began with curiosity about how 
                websites work, and it has evolved into a career where I get to solve complex problems 
                and create innovative solutions every day.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. When I'm not coding, you can find me contributing to open-source projects, 
                mentoring junior developers, or exploring new technologies.
              </p>
              <p>
                I'm always excited about new challenges and opportunities to learn. Whether it's 
                building a complex web application or optimizing performance, I approach every 
                project with enthusiasm and attention to detail.
              </p>
            </GlassContainer>
            
            <GlassContainer variant="default" className="about__contact">
              <h3>Let's Connect</h3>
              <div className="about__contact-info">
                <div className="about__contact-item">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>vaibhav.heda@email.com</span>
                </div>
                <div className="about__contact-item">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="about__contact-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>Mumbai, India</span>
                </div>
              </div>
              
              <div className="about__social">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    icon={social.icon}
                    onClick={() => window.open(social.url, '_blank')}
                    className="about__social-link"
                  >
                    {social.name}
                  </Button>
                ))}
              </div>
            </GlassContainer>
          </div>
          
          <div className="about__skills">
            <GlassContainer variant="enhanced" className="about__skills-container">
              <h3>Skills & Technologies</h3>
              <div className="about__skills-grid">
                {skills.map((skillCategory) => (
                  <div key={skillCategory.name} className="about__skill-category">
                    <h4>{skillCategory.name}</h4>
                    <div className="about__skill-tags">
                      {skillCategory.technologies.map((tech, index) => (
                        <span key={index} className="about__skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 