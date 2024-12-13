import React from 'react';
import { FaRegAddressCard, FaHome } from 'react-icons/fa';
import ThemeToggle from './themetoggle';

const Navbar = ({ theme, setTheme, showCards, setShowCards }) => {
  const handleCardClick = () => {
    setShowCards(!showCards);
  };

  return (
    <header
      className={`sticky top-0 z-10 flex justify-between items-center p-4 ${
        theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-900'
      }`}
    >
      {/* Brand Name */}
      <h1 className="text-xl font-bold">EchoEnigma</h1>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">

        {/* Card Icon with Hover Effect */}
        <FaRegAddressCard
          className="text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300"
          onClick={handleCardClick}
        />

        {/* Theme Toggle */}
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
};

export default Navbar;
