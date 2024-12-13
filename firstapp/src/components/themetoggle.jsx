import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition duration-300 ${
        theme === 'dark' ? 'bg-gray-600 text-gray-800' : 'bg-gray-300 text-gray-800'
      }`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FaMoon className="text-2xl" /> : <FaSun className="text-2xl" />}
    </button>
  );
};

export default ThemeToggle;
