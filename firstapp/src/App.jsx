import React, { useState, useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Navbar from './components/Navbar';
import TodoList from './components/todolist'; // Import TodoList component

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [showCards, setShowCards] = useState(false);
  const [todos, setTodos] = useState([]); // State to manage todos

  // Save theme to localStorage on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar theme={theme} setTheme={setTheme} showCards={showCards} setShowCards={setShowCards} />
      
      <main className="p-4">
        {/* Render To-Do List */}
        <TodoList todos={todos} setTodos={setTodos} /> {/* Pass todos and setTodos to TodoList */}
        
        {/* Conditionally render CardContainer */}
        {showCards && <CardContainer theme={theme} />}
      </main>
    </div>
  );
};

export default App;
