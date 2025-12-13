import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Button from '../atoms/Button';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="flex justify-around items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
      <Button
        onClick={toggleTheme}
        className={`w-full ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
      >
        <span>☀️ Light</span>
      </Button>
      <Button
        onClick={toggleTheme}
        className={`w-full ${theme === 'dark' ? 'bg-gray-700' : ''}`}
      >
        <span>🌙 Dark</span>
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
