import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle'; // Import ThemeToggle component

const App = () => {
  // Manage theme state in App
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">EchoEnigma</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
    </div>
  );
};

export default App;
