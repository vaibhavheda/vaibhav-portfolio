import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faPython, faGithub } from '@fortawesome/free-brands-svg-icons';
import GlassContainer from '../GlassContainer/GlassContainer';
import Button from '../Button/Button';
import './ProjectsSection.scss';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/vaibhav/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/vaibhav/task-manager",
      liveUrl: "https://task-manager-demo.com",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "SCSS"],
      githubUrl: "https://github.com/vaibhav/weather-dashboard",
      liveUrl: "https://weather-dashboard-demo.com",
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, comment system, and SEO optimization. Built with Next.js and Sanity CMS.",
      technologies: ["Next.js", "Sanity", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/vaibhav/blog-platform",
      liveUrl: "https://blog-platform-demo.com",
      image: "/images/project4.jpg"
    }
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return faReact;
      case 'node.js':
        return faNodeJs;
      case 'python':
        return faPython;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>
        
        <div className="projects__grid">
          {projects.map((project) => (
            <GlassContainer key={project.id} variant="card" className="projects__card">
              <div className="projects__image">
                <div className="projects__image-placeholder">
                  <FontAwesomeIcon icon={faReact} size="3x" />
                </div>
              </div>
              
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                
                <div className="projects__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__tech">
                      {getTechIcon(tech) && (
                        <FontAwesomeIcon icon={getTechIcon(tech)!} />
                      )}
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="projects__actions">
                  
                </div>
              </div>
            </GlassContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 