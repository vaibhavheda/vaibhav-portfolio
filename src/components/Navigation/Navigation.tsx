import React, { useRef, useEffect, useState } from 'react';
import Button from '../Button/Button';
import './Navigation.scss';

interface NavigationProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { label: 'Home', section: 'hero' },
  { label: 'Projects', section: 'projects' },
  { label: 'About', section: 'about' }
];

const Navigation: React.FC<NavigationProps> = ({ onContactClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll to section and set active
  const scrollToSection = (sectionId: string, idx: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveIdx(idx);
  };

  // Update slider position on activeIdx or resize
  useEffect(() => {
    const updateSlider = () => {
      const activeLink = linkRefs.current[activeIdx];
      const menu = menuRef.current;
      if (activeLink && menu) {
        const menuRect = menu.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setSliderStyle({
          left: linkRect.left - menuRect.left,
          width: linkRect.width
        });
      }
    };
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [activeIdx]);

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__menu" ref={menuRef}>
          {/* Glassy slider */}
          <div
            className="navigation__slider"
            style={{ left: sliderStyle.left, width: sliderStyle.width }}
          />
          {NAV_LINKS.map((link, idx) => (
            <button
              key={link.section}
              ref={el => (linkRefs.current[idx] = el)}
              className={`navigation__link${activeIdx === idx ? ' active' : ''}`}
              onClick={() => scrollToSection(link.section, idx)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="navigation__link navigation__contact-link"
            onClick={onContactClick}
            type="button"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 