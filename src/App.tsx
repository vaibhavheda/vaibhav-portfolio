import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation/Navigation';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import AboutSection from './components/AboutSection/AboutSection';
import ChatComponent from './components/ChatComponent/ChatComponent';
import ThemeTimelineSwitcher from './components/ThemeToggle/ThemeToggle';
import './App.scss';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleContactClick = () => {
    setIsChatOpen(true);
  };

  const handleChatClose = () => {
    setIsChatOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Navigation onContactClick={handleContactClick} />
        <main className="main-content">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
        </main>
        <ChatComponent isOpen={isChatOpen} onClose={handleChatClose} />
        <footer>
          <ThemeTimelineSwitcher />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App; 