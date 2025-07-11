import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.scss';

const LIGHT_HOURS = { start: 7, end: 18 }; // 7am to 6pm

function getThemeForHour(hour: number) {
  return hour >= LIGHT_HOURS.start && hour <= LIGHT_HOURS.end ? 'light' : 'dark';
}

const ThemeFloatingSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  // Cycle: light -> dark -> system -> light ...
  const handleToggle = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };
  let icon = <Clock size={28} strokeWidth={2.2} />;
  let label = 'Auto';
  if (theme === 'light') {
    icon = <Sun size={28} strokeWidth={2.2} />;
    label = 'Light';
  } else if (theme === 'dark') {
    icon = <Moon size={28} strokeWidth={2.2} />;
    label = 'Dark';
  }
  return (
    <button
      className="theme-fab"
      onClick={handleToggle}
      aria-label={`Switch theme (current: ${label})`}
      title={`Switch theme (current: ${label})`}
      type="button"
    >
      {icon}
    </button>
  );
};

export default ThemeFloatingSwitcher; 