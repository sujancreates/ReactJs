import React, { useState } from 'react';
import { FaRegAddressCard } from 'react-icons/fa'; // Import card icon from React Icons
import ThemeToggle from './components/Navbar'; 
import CardContainer from './components/Cardcontainer';

const App = () => {
  // Manage theme state in App
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [showCards, setShowCards] = useState(false); // State to toggle card visibility

  const handleCardClick = () => {
    setShowCards(!showCards); // Toggle card container visibility
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">EchoEnigma</h1>
        <FaRegAddressCard 
          className="text-2xl cursor-pointer" 
          onClick={handleCardClick} // Card icon click handler
        />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
      
      <div>
        {/* <h1 className='flex justify-center m-10 bold text-white bg-gray-800 w-80 h-80'>Hello, this is my React learning phase.</h1> */}
        {showCards && <CardContainer theme={theme}/>} {/* Display CardContainer only when showCards is true */}
      </div>
    </div>
  );
};

export default App;
